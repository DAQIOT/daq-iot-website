import type { Lang } from './config';

/**
 * 「方案库」（/solutions）左侧树的分类本地化。
 *
 * 内容层（src/content/plans/*.md）的 category / subcategory 存的是**中文规范名**，
 * 这里做一层归一化：原始写法 → 稳定 key → 按语言输出显示名。
 * 这样英/德页面也能显示对应语言的分类名（正文仍是中文，属于已知的过渡状态）。
 *
 * 新增一级分类需要我改这个文件 + 后台下拉（后台 select 的 options 与这里一一对应）；
 * 新增二级分类只要在后台文章里填同一个名字，树上会自动出现该节点（未登记的按中文原样显示）。
 *
 * 变更记录：
 * 2026-10-23 「光伏新能源」一级已并入「电力与能源」，其二级也做了收敛合并：
 *   并网与「四可」装置 → 电网调控与安全
 *   光伏电站数据采集 + 电站运维平台 → 光伏电站采集与运维
 *   储能与充放电监测 → 平移到电力与能源下（保留原名）
 * 老数据（category: 光伏新能源 / 旧二级名）靠下面的 ALIAS 自动归到新节点，不会掉词条。
 */

/** 一级分类：key / 三语名 / 排序（顺序 = 左侧树从上到下） */
export const PLAN_CATS: { key: string; zh: string; en: string; de: string }[] = [
  { key: 'manufacturing', zh: '智能制造', en: 'Smart Manufacturing', de: 'Intelligente Fertigung' },
  { key: 'power', zh: '电力与能源', en: 'Power & Energy', de: 'Energie & Strom' },
  { key: 'vision', zh: '机器视觉与仪表识别', en: 'Machine Vision & Meter Reading', de: 'Maschinelles Sehen & Zählerablesung' },
  { key: 'other', zh: '其他', en: 'Others', de: 'Sonstiges' }
];

/** 二级分类：parent = 一级 key；顺序 = 该一级下树节点顺序 */
export const PLAN_SUBCATS: { key: string; parent: string; zh: string; en: string; de: string }[] = [
  // 智能制造
  { key: 'device-data', parent: 'manufacturing', zh: '设备联网与数据采集', en: 'Device Networking & Data Acquisition', de: 'Gerätevernetzung & Datenerfassung' },
  { key: 'condition-monitoring', parent: 'manufacturing', zh: '设备状态监测与预测性维护', en: 'Condition Monitoring & Predictive Maintenance', de: 'Zustandsüberwachung & Predictive Maintenance' },
  { key: 'energy-management', parent: 'manufacturing', zh: '能耗与能源管理', en: 'Energy Consumption & Management', de: 'Energieverbrauch & -management' },
  { key: 'cleanroom-env', parent: 'manufacturing', zh: '洁净室与环境监测', en: 'Cleanroom & Environmental Monitoring', de: 'Reinraum- & Umweltüberwachung' },
  // 电力与能源（含原「光伏新能源」的内容，2026-10-23 合并）
  { key: 'meter-reading', parent: 'power', zh: '电表采集与电能计量', en: 'Meter Data Acquisition & Metering', de: 'Zählerablesung & Messwesen' },
  { key: 'distribution', parent: 'power', zh: '配电与用电监测', en: 'Distribution & Power Usage Monitoring', de: 'Verteilungs- & Verbrauchsüberwachung' },
  { key: 'grid-control', parent: 'power', zh: '电网调控与安全', en: 'Grid Control & Safety', de: 'Netzregelung & Sicherheit' },
  { key: 'pv-plant', parent: 'power', zh: '光伏电站采集与运维', en: 'PV Plant Acquisition & O&M', de: 'PV-Anlage: Erfassung & Betrieb' },
  { key: 'pv-storage', parent: 'power', zh: '储能与充放电监测', en: 'Storage & Charge / Discharge Monitoring', de: 'Speicher- & Ladeüberwachung' },
  // 机器视觉与仪表识别
  { key: 'meter-vision', parent: 'vision', zh: '无通讯接口仪表视觉抄表', en: 'Vision Reading for Non-Communicating Meters', de: 'Visuelle Ablesung ohne Schnittstelle' },
  { key: 'explosion-proof-vision', parent: 'vision', zh: '防爆仪表视觉识别', en: 'Explosion-Proof Gauge Recognition', de: 'Ex-geschützte Instrumentenerkennung' },
  { key: 'image-recognition', parent: 'vision', zh: '图像识别与状态识别', en: 'Image & State Recognition', de: 'Bild- & Zustandserkennung' },
  // 其他
  { key: 'digital-transformation', parent: 'other', zh: '数字化转型综合方案', en: 'Digital Transformation Solutions', de: 'Digitale Transformation' },
  { key: 'agri-municipal', parent: 'other', zh: '农业与市政基础设施', en: 'Agriculture & Municipal Infrastructure', de: 'Landwirtschaft & kommunale Infrastruktur' },
  { key: 'municipal-culture', parent: 'other', zh: '市政与文旅监测', en: 'Municipal & Cultural Heritage Monitoring', de: 'Kommunale & Kulturgut-Überwachung' },
  { key: 'field-installation', parent: 'other', zh: '工业现场施工与安装', en: 'On-site Installation', de: 'Vor-Ort-Montage' }
];

/**
 * 历史别名 → 新节点（2026-10-23 合并「光伏新能源」后保留）
 * 作用：文章里如果还留着旧的一级 / 二级名字，会被自动折算到新节点，不会在树上多出孤立分支。
 */
const CAT_ALIAS: Record<string, string> = {
  pv: 'power',
  '光伏新能源': 'power',
  'PV & New Energy': 'power',
  'PV & New Energies': 'power'
};
const SUB_ALIAS: Record<string, string> = {
  // 原「光伏新能源」的二级 → 电力与能源下的新节点（中文键必须加引号：「」不是合法标识符）
  'pv-data': 'pv-plant',
  '光伏电站数据采集': 'pv-plant',
  'pv-om': 'pv-plant',
  '电站运维平台': 'pv-plant',
  'pv-grid': 'grid-control',
  '并网与「四可」装置': 'grid-control',
  'pv-storage': 'pv-storage'
};

/** 原始值 → key（同时接受中文规范名、英文名与 key 本身，后台手填英文也能识别） */
const CAT_KEY_BY_RAW: Record<string, string> = {};
const SUB_KEY_BY_RAW: Record<string, string> = {};
PLAN_CATS.forEach((c) => {
  CAT_KEY_BY_RAW[c.zh] = c.key;
  CAT_KEY_BY_RAW[c.en] = c.key;
  CAT_KEY_BY_RAW[c.key] = c.key;
});
PLAN_SUBCATS.forEach((s) => {
  SUB_KEY_BY_RAW[s.zh] = s.key;
  SUB_KEY_BY_RAW[s.en] = s.key;
  SUB_KEY_BY_RAW[s.key] = s.key;
});

export function planCatKey(raw?: string): string {
  const v = (raw ?? '').trim();
  if (!v) return '';
  const base = CAT_KEY_BY_RAW[v] ?? v;
  return CAT_ALIAS[base] ?? base;
}

export function planSubKey(raw?: string): string {
  const v = (raw ?? '').trim();
  if (!v) return '';
  const base = SUB_KEY_BY_RAW[v] ?? v;
  return SUB_ALIAS[base] ?? base;
}

/** 一级显示名；未登记的 key 原样返回（后台新增分类不必改代码就能显示） */
export function localizePlanCat(raw: string | undefined, lang: Lang): string {
  const key = planCatKey(raw);
  if (!key) return '';
  const hit = PLAN_CATS.find((c) => c.key === key);
  return hit ? hit[lang] ?? hit.zh : key;
}

export function localizePlanSub(raw: string | undefined, lang: Lang): string {
  const key = planSubKey(raw);
  if (!key) return '';
  const hit = PLAN_SUBCATS.find((s) => s.key === key);
  return hit ? hit[lang] ?? hit.zh : key;
}

/** 一级排序权重（未登记的一级排在「其他」之前） */
export function planCatRank(key: string): number {
  const i = PLAN_CATS.findIndex((c) => c.key === key);
  if (i >= 0) return PLAN_CATS[i].key === 'other' ? 1000 : i;
  return 500;
}

/** 二级排序权重（未登记的二级排在其父级末尾） */
export function planSubRank(catKey: string, subKey: string): number {
  const list = PLAN_SUBCATS.filter((s) => s.parent === catKey);
  const i = list.findIndex((s) => s.key === subKey);
  return i >= 0 ? i : 500;
}
