/**
 * 方案库取数（中文库 plans + 英文库 plans-en）
 *
 * 规则（严格分语言显示）：
 * - 中文站 / 德文站：只用 plans，行为与改造前完全一致（德文站暂无德文稿，仍回退中文）
 * - 英文站：只用 plans-en 生成卡片，中文稿不再出现在英文站
 *     · 同 slug 的中文稿只作为「字段兜底」：英文稿的分类/二级分类/封面/排序留空时继承
 *     · 中文没有的 slug 也能正常显示（纯英文方案）
 *     · plansEn.hidden: true → 该篇不在英文站显示
 * - 图片：英文稿可写自己的路径（建议 /images/plans-en/<slug>/…），留空则沿用同 slug 中文图
 */
import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/config';
import { planCatKey, planSubKey } from '../i18n/plan-cats';

export type PlanCard = {
  id: string;
  title: string;
  summary: string;
  image: string;
  order: number;
  /** 原始分类写法（可能是中文名 / 英文名 / key） */
  catRaw: string;
  subRaw: string;
  /** 归一化后的分类 key（用于筛选与树） */
  cat: string;
  sub: string;
  /** 是否有英文正文 */
  hasEn: boolean;
};

const pick = (v: string | undefined | null, fallback: string) => {
  const s = (v ?? '').trim();
  return s || fallback;
};

const toCard = (id: string, d: any, hasEn = false): PlanCard => ({
  id,
  title: d.title ?? '',
  summary: d.summary ?? '',
  image: d.image ?? '',
  order: d.order ?? 0,
  catRaw: d.category ?? '',
  subRaw: d.subcategory ?? '',
  cat: planCatKey(d.category) || 'other',
  sub: planSubKey(d.subcategory),
  hasEn
});

/** 当前语言下应展示的方案卡片（已排序） */
export async function getPlanCards(lang: Lang): Promise<PlanCard[]> {
  const zh = (await getCollection('plans')).filter((e) => !e.data.hidden);

  if (lang !== 'en') {
    return zh.map((e) => toCard(e.id, e.data)).sort(sortCards(lang));
  }

  // 英文站：只展示 plans-en，中文库仅用于补齐英文稿留空的字段
  const [enAll, zhAll] = await Promise.all([
    getCollection('plansEn'),
    getCollection('plans')
  ]);
  const zhMap = new Map(zhAll.map((e) => [e.id, e.data]));
  const cards: PlanCard[] = [];

  for (const t of enAll) {
    if (t.data.hidden) continue;
    const z = zhMap.get(t.id);
    cards.push(
      toCard(
        t.id,
        {
          title: pick(t.data.title, z?.title),
          summary: pick(t.data.summary, z?.summary),
          image: pick(t.data.image, z?.image),
          order: t.data.order ?? z?.order ?? 0,
          category: pick(t.data.category, z?.category),
          subcategory: pick(t.data.subcategory, z?.subcategory)
        },
        true
      )
    );
  }

  return cards.sort(sortCards(lang));
}

const sortCards = (lang: Lang) => (a: PlanCard, b: PlanCard) =>
  a.order - b.order || a.title.localeCompare(b.title, lang === 'zh' ? 'zh' : lang);

/** 详情页用：id → 卡片（英文站含英文独有方案） */
export async function getPlanCardMap(lang: Lang): Promise<Map<string, PlanCard>> {
  return new Map((await getPlanCards(lang)).map((c) => [c.id, c]));
}
