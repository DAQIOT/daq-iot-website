/**
 * 站内搜索索引：/<lang>/search-index.json（构建期静态生成）
 * 收录：产品（当前语言）+ 项目案例（当前语言）+ 方案库（三语共用中文内容）+ 资讯（当前语言）
 * 搜索结果页 /<lang>/search 前端脚本按关键词在本索引里过滤，静态站点无需后端。
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/config';

export const getStaticPaths = (() =>
  (['en', 'zh', 'de'] as Lang[]).map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const base = '/' + lang;
  // 内容集合 id 形如 "zh/xxx"，去掉语言前缀得到 URL slug
  const strip = (id: string) => id.split('/').slice(1).join('/');

  // c = 分类/行业（参与低权重关联匹配，如「网关」能命中分类名含网关的条目）
  const products = (await getCollection('products', (e) => e.id.startsWith(lang + '/') && !e.data.hidden)).map((e) => ({
    t: e.data.title,
    d: e.data.summary || '',
    c: e.data.category || '',
    u: `${base}/products/${strip(e.id)}`,
    i: e.data.image || '',
    y: 'product',
  }));

  const cases = (await getCollection('cases', (e) => e.id.startsWith(lang + '/') && !e.data.hidden)).map((e) => ({
    t: e.data.title,
    d: e.data.summary || '',
    c: e.data.industry || '',
    u: `${base}/cases/${strip(e.id)}`,
    i: e.data.image || '',
    y: 'case',
  }));

  const plans = (await getCollection('plans', (e) => !e.data.hidden)).map((e) => ({
    t: e.data.title,
    d: e.data.summary || '',
    c: [e.data.category, e.data.subcategory].filter(Boolean).join(' '),
    u: `${base}/solutions/${e.id}`,
    i: e.data.image || '',
    y: 'plan',
  }));

  const posts = (await getCollection('posts', (e) => e.id.startsWith(lang + '/'))).map((e) => ({
    t: e.data.title,
    d: e.data.description || '',
    c: '',
    u: `${base}/blog/${strip(e.id)}`,
    i: e.data.image || '',
    y: 'post',
    dt: e.data.pubDate || '',
  }));

  return new Response(JSON.stringify([...products, ...cases, ...plans, ...posts]), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
