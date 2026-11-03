/**
 * 方案库取数（中文库 plans + 英文库 plans-en）
 *
 * 规则：
 * - 中文站 / 德文站：只用 plans，行为与改造前完全一致
 * - 英文站：以 plans-en 为准
 *     · 与中文同 slug  → 英文版覆盖标题/摘要/封面/分类/排序；字段留空则继承中文
 *     · 中文没有该 slug → 英文独有方案，只在英文站出现
 *     · hidden: true    → 只在英文站隐藏（中文站不受影响）
 * - 图片：英文稿可写自己的路径（建议 /images/plans-en/<slug>/…），留空则沿用中文图
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

  const enAll = await getCollection('plansEn');
  const enMap = new Map(enAll.map((e) => [e.id, e]));
  const zhIds = new Set(zh.map((e) => e.id));
  const cards: PlanCard[] = [];

  for (const z of zh) {
    const t = enMap.get(z.id);
    if (t?.data.hidden) continue;
    cards.push(
      toCard(
        z.id,
        {
          title: pick(t?.data.title, z.data.title),
          summary: pick(t?.data.summary, z.data.summary),
          image: pick(t?.data.image, z.data.image),
          order: t?.data.order ?? z.data.order ?? 0,
          category: pick(t?.data.category, z.data.category),
          subcategory: pick(t?.data.subcategory, z.data.subcategory)
        },
        Boolean(t)
      )
    );
  }

  // 英文独有方案（中文库没有对应 slug）
  for (const t of enAll) {
    if (zhIds.has(t.id) || t.data.hidden) continue;
    cards.push(toCard(t.id, t.data, true));
  }

  return cards.sort(sortCards(lang));
}

const sortCards = (lang: Lang) => (a: PlanCard, b: PlanCard) =>
  a.order - b.order || a.title.localeCompare(b.title, lang === 'zh' ? 'zh' : lang);

/** 详情页用：id → 卡片（英文站含英文独有方案） */
export async function getPlanCardMap(lang: Lang): Promise<Map<string, PlanCard>> {
  return new Map((await getPlanCards(lang)).map((c) => [c.id, c]));
}

/** 英文独有的方案 slug（只用于英文站路由，中文站不会生成这些页面） */
export async function getEnglishOnlyPlanIds(): Promise<string[]> {
  const zhIds = new Set((await getCollection('plans')).map((e) => e.id));
  return (await getCollection('plansEn'))
    .filter((e) => !zhIds.has(e.id) && !e.data.hidden)
    .map((e) => e.id);
}

/** 英文站需要排除的 slug（英文稿显式 hidden） */
export async function getHiddenEnPlanIds(): Promise<Set<string>> {
  return new Set(
    (await getCollection('plansEn'))
      .filter((e) => e.data.hidden)
      .map((e) => e.id)
  );
}
