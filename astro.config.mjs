import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 多语言外贸站骨架
// 语言路由采用物理目录方式：src/pages/[lang]/ 对应 /en /zh /de
// 根路径 / 会重定向到默认语言 /en
export default defineConfig({
  output: 'static',
  // 网站域名（决定 sitemap、canonical、hreflang 的绝对地址）：
  // - 线上可用环境变量 SITE_URL 覆盖，无需改代码
  // - 未设置时回退到正式对外域名 www.daq-iot.com
  // - 历史说明：2026-09 官网已从 daq-iot.pages.dev 迁移到 www.daq-iot.com（CNAME 指向 CF Pages）
  site: process.env.SITE_URL || 'https://www.daq-iot.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
