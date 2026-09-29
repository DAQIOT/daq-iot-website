import type { Lang } from './config';

/**
 * 项目案例「行业」标签的本地化。
 *
 * 内容层（src/content/cases/<lang>/*.md）的 industry 字段历史上中英文混用，
 * 这里做一层归一化：先把各种原始写法收敛成稳定的 key，再按语言输出显示名。
 * 这样英文站/德文站不会再出现中文标签，同一行业的中英两种写法也会合并成一个筛选标签。
 */

/** 原始值（中/英）→ 归一化 key */
const KEY_BY_RAW: Record<string, string> = {
  '光伏新能源': 'pv',
  'PV & New Energy': 'pv',
  'PV & New Energies': 'pv',
  'PV and New Energy': 'pv',
  '智能制造': 'manufacturing',
  'Smart Manufacturing': 'manufacturing',
  '智慧矿山': 'mining',
  'Smart Mining': 'mining',
  '智慧城市': 'city',
  'Smart City': 'city',
  '电力与能源': 'power',
  'Power & Energy': 'power',
  'Electric Power & Energy': 'power',
  '其他': 'other',
  'Others': 'other',
  'Other': 'other',
};

/** 归一化 key → 三语显示名 */
const LABEL_BY_KEY: Record<string, Record<Lang, string>> = {
  pv: { zh: '光伏新能源', en: 'PV & New Energy', de: 'PV & Neue Energien' },
  manufacturing: { zh: '智能制造', en: 'Smart Manufacturing', de: 'Intelligente Fertigung' },
  mining: { zh: '智慧矿山', en: 'Smart Mining', de: 'Intelligenter Bergbau' },
  city: { zh: '智慧城市', en: 'Smart City', de: 'Smart City' },
  power: { zh: '电力与能源', en: 'Power & Energy', de: 'Energie & Strom' },
  other: { zh: '其他', en: 'Others', de: 'Sonstiges' },
};

/** 把原始 industry 值收敛成稳定 key（用于筛选匹配与分组） */
export function industryKey(raw?: string): string {
  const value = (raw ?? '').trim();
  if (!value) return '';
  return KEY_BY_RAW[value] ?? value;
}

/** 按语言输出行业显示名；未知值原样返回，方便后台新增行业时立即生效 */
export function localizeIndustry(raw: string | undefined, lang: Lang): string {
  const key = industryKey(raw);
  if (!key) return '';
  const labels = LABEL_BY_KEY[key];
  return labels ? (labels[lang] ?? labels.zh) : key;
}

/**
 * 行业筛选栏的展示顺序：
 * 规范行业按固定次序（与后台「项目案例 → 所属行业」下拉一致），
 * 未登记的行业排在其后，「其他」永远垫底。
 * 不这么做的话，顺序会跟着案例的录入顺序乱变。
 */
const INDUSTRY_ORDER = ['manufacturing', 'pv', 'city', 'power', 'mining'];

function industryRank(key: string): number {
  const i = INDUSTRY_ORDER.indexOf(key);
  if (i >= 0) return i;
  if (key === 'other') return 1000;
  return 500;
}

export function sortIndustryKeys(keys: string[]): string[] {
  // Array.prototype.sort 是稳定排序：同级（如多个未登记行业）保持原始相对顺序
  return [...keys].sort((a, b) => industryRank(a) - industryRank(b));
}
