/**
 * 方案库分类清单：/<lang>/plan-cats.json（构建期静态生成）
 *
 * 用途：后台「方案库」编辑页的一级 / 二级分类输入框，把站上已有的分类做成下拉候选，
 * 同时仍允许直接输入新名字（新增分类不需要改代码）。
 *
 * 输出（按左侧树的顺序排好，一级、二级都带该类下的方案数量）：
 * {
 *   "lang": "en",
 *   "categories": [
 *     { "value": "Smart Manufacturing", "count": 12,
 *       "subcategories": [ { "value": "Device Networking & Data Acquisition", "count": 5 } ] }
 *   ]
 * }
 * value 存的是「当前语言的显示名」，英文站即英文名，直接写回 frontmatter 也能被 plan-cats.ts 识别。
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import type { Lang } from '../../i18n/config';
import {
  planCatKey,
  planSubKey,
  planCatRank,
  planSubRank,
  localizePlanCat,
  localizePlanSub
} from '../../i18n/plan-cats';
import { getPlanCards } from '../../lib/plans';

export const getStaticPaths = (() =>
  (['en', 'zh', 'de'] as Lang[]).map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

type SubNode = { key: string; label: string; count: number };
type CatNode = { key: string; label: string; count: number; subs: Map<string, SubNode> };

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const cards = await getPlanCards(lang);

  const cats = new Map<string, CatNode>();
  for (const c of cards) {
    const ck = planCatKey(c.catRaw) || 'other';
    if (!cats.has(ck)) {
      // 分类留空的方案会被归到 other，显示名要回退到「其他」的本地化名，不能露出裸 key
      const label = localizePlanCat(c.catRaw, lang) || localizePlanCat('其他', lang) || ck;
      cats.set(ck, { key: ck, label, count: 0, subs: new Map() });
    }
    const node = cats.get(ck)!;
    node.count += 1;

    const sk = planSubKey(c.subRaw);
    if (sk) {
      if (!node.subs.has(sk)) {
        node.subs.set(sk, { key: sk, label: localizePlanSub(c.subRaw, lang) || sk, count: 0 });
      }
      node.subs.get(sk)!.count += 1;
    }
  }

  const categories = [...cats.values()]
    .sort((a, b) => planCatRank(a.key) - planCatRank(b.key) || b.count - a.count || a.label.localeCompare(b.label))
    .map((n) => ({
      value: n.label,
      count: n.count,
      subcategories: [...n.subs.values()]
        .sort(
          (a, b) =>
            planSubRank(n.key, a.key) - planSubRank(n.key, b.key) || b.count - a.count || a.label.localeCompare(b.label)
        )
        .map((s) => ({ value: s.label, count: s.count }))
    }));

  return new Response(JSON.stringify({ lang, categories }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
