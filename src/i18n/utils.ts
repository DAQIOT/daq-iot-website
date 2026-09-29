import { ui } from './ui';
import { defaultLang, type Lang } from './config';
import { getCollection } from 'astro:content';

// 旧同步方式：仅在未迁移到 content collections 的组件里使用
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

// 新异步方式：从 content collections 读取各集合并合并（frontmatter 为嵌套对象）
export async function getTranslations(lang: Lang) {
  const data = await getRawSite(lang);
  return function t(key: string, fallback?: string): string {
    const value = key.split('.').reduce<any>((o, k) => (o == null ? undefined : o[k]), data);
    return typeof value === 'string' || typeof value === 'number' ? String(value) : (fallback ?? key);
  };
}

// 返回完整嵌套对象，供首页等需要读取列表（行业、指标）的页面使用
export async function getSiteData(lang: Lang): Promise<Record<string, any>> {
  const data = await getRawSite(lang);
  const { name, ...rest } = data;
  return rest;
}

async function loadCollectionData(lang: Lang, collection: string): Promise<Record<string, any>> {
  const entries = await getCollection(
    collection as any,
    (entry: { id: string }) => entry.id.startsWith(lang + '-')
  );
  return ((entries[0] as { data?: Record<string, any> } | undefined)?.data ?? {}) as Record<string, any>;
}

async function getRawSite(lang: Lang): Promise<Record<string, any>> {
  const [siteData, solutionsData, servicesData, partnersData, supportData, aboutData, contactData] = await Promise.all([
    loadCollectionData(lang, 'site'),
    loadCollectionData(lang, 'solutions'),
    loadCollectionData(lang, 'services'),
    loadCollectionData(lang, 'partners'),
    loadCollectionData(lang, 'support'),
    loadCollectionData(lang, 'about'),
    loadCollectionData(lang, 'contact'),
  ]);

  return {
    ...siteData,
    solutions: solutionsData,
    services: servicesData,
    partners: partnersData,
    support: supportData,
    about: aboutData,
    contact: contactData,
  };
}

// 去掉当前路径的语言前缀，返回纯路径（如 /en/about -> /about）
export function stripLang(pathname: string, lang: Lang): string {
  const prefix = `/${lang}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(prefix + '/')) return pathname.slice(prefix.length) || '/';
  return pathname;
}

// 获取当前语言的分类列表（multiple_folders 结构：zh/、en/、de/ 子目录，文件名不含语言前缀）
// 分类文件按语言分目录存放，每个文件内 name/description 即当前语言
export async function getCategoriesByLang(lang: Lang) {
  const entries = await getCollection('categories', (entry: { id: string }) => entry.id.startsWith(lang + '/'));
  return entries.sort((a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

// 三个页面的归属标签前缀 —— 必须与后台「项目案例 → 归属标签」选项的 value 前缀保持一致
// 标签值形如「解决方案 · 智能制造」，前半段决定页面、后半段决定卡片
export const PAGE_TAG_PREFIX = {
  solutions: '解决方案',
  services: '服务与支持',
  partners: '合作伙伴'
} as const;
export type TagPage = keyof typeof PAGE_TAG_PREFIX;
export const pageTagKey = (page: TagPage, cardTitle: string) => `${PAGE_TAG_PREFIX[page]} · ${cardTitle}`;

// 三个页面的案例候选池 = 当前语言下所有未隐藏案例
// 具体归到哪个页面/哪张卡片，由案例的「归属标签」（tags）决定（见 PageTagCards 组件）
export async function getAllCases(lang: Lang, limit = 0) {
  const entries = await getCollection('cases', (entry: any) => entry.id.startsWith(lang + '/') && !entry.data.hidden);
  const sorted = entries.sort((a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0));
  return limit > 0 ? sorted.slice(0, limit) : sorted;
}

// 页面标签 = 这三个页面「页面文案」里的卡片列表本身
// （解决方案 → 方案列表 / 服务与支持 → 服务列表 / 合作伙伴 → 合作类型列表）
// key 取中文卡片的标题（案例的「分类标签」存的就是这个值，跨语言统一）
// name/desc 取当前语言的卡片标题/说明（英/德页面自动显示对应语言）
export async function getPageTags(lang: Lang, page: 'solutions' | 'services' | 'partners') {
  const cur = await getSiteData(lang);
  const zh = lang === 'zh' ? cur : await getSiteData('zh');
  const curItems = ((cur[page]?.items ?? []) as { title?: string; desc?: string; caseTitle?: string }[]) || [];
  const zhItems = ((zh[page]?.items ?? []) as { title?: string; desc?: string; caseTitle?: string }[]) || [];
  return curItems
    .map((it, i) => ({
      key: String(zhItems[i]?.title ?? it.title ?? '').trim(),
      name: String(it.title ?? '').trim(),
      desc: String(it.desc ?? '').trim(),
      // 该标签专属的「案例区小标题」：留空时由组件回退到整页默认 / 系统默认
      caseTitle: String(it.caseTitle ?? '').trim(),
      slug: 'tag-' + (i + 1)
    }))
    .filter((t) => t.key && t.name);
}
