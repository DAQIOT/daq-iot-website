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
  // - 未设置时回退到当前真实对外域名 daq-iot.pages.dev
  // - 将来绑定正式域名（如 https://www.daq-iot.com）后，改这个默认值或在 Cloudflare 配 SITE_URL
  site: process.env.SITE_URL || 'https://daq-iot.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
