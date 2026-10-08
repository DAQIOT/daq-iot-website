#!/usr/bin/env node
/**
 * audit-media.cjs —— 媒体目录对账
 *
 * 用法：npm run audit:media
 *
 * 作用：
 *   1. 统计各媒体目录（顶层 public/images、public/files 等）的实际文件数；
 *   2. 找出「内容里引用了、磁盘上没有」的图片（= 缺图）；
 *   3. 找出「磁盘上有、但没有任何内容引用」的图片（= 孤儿文件，可考虑清理）。
 *
 * 输出：控制台摘要 + 生成「媒体对账.md」
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const PUBLIC_DIR = path.join(ROOT, 'public');
const REPORT = path.join(ROOT, '媒体对账.md');

// 需要统计的媒体目录（与 config.yml 中的 media_folder 对应）
const MEDIA_DIRS = [
  { label: '公共（顶层 media_folder）', folder: 'public/images', url: '/images', usedBy: '所有集合（当前设计：图片统一平铺）' },
  { label: '文件（下载中心）', folder: 'public/files', url: '/files', usedBy: 'downloads 集合' },
];

const IMG_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

function walkContent(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkContent(p, out);
    else if (/\.(md|mdx)$/i.test(name)) out.push(p);
  }
  return out;
}

function walkMedia(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkMedia(p, out);
    else out.push(p);
  }
  return out;
}

// ── 1. 收集内容里所有引用 ──
const REF_RE = /!\[[^\]]*\]\(([^)\s]+)|(?:src|href)\s*=\s*["']([^"']+)["']|["'](\/(?:images|files|uploads|static|assets)\/[^"'\s)]+)["']/g;
const contentFiles = walkContent(CONTENT_DIR);
const referenced = new Set();

for (const file of contentFiles) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  REF_RE.lastIndex = 0;
  while ((m = REF_RE.exec(text)) !== null) {
    const ref = m[1] || m[2] || m[3];
    if (!ref || !ref.startsWith('/')) continue;
    const clean = ref.split(/[?#]/)[0];
    if (/^\/(images|files|uploads|static|assets)\//.test(clean)) referenced.add(clean);
  }
}

// ── 2. 统计各媒体目录 ──
const lines = [];
lines.push('# 媒体对账');
lines.push('');
lines.push(`生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`);
lines.push('');
lines.push('## 目录概览');
lines.push('');
lines.push('| 目录 | 用途 | 磁盘文件数 |');
lines.push('|---|---|---|');

const allMedia = new Set();
const mediaStats = [];
for (const d of MEDIA_DIRS) {
  const abs = path.join(ROOT, d.folder);
  const files = walkMedia(abs);
  mediaStats.push({ ...d, abs, files });
  files.forEach((f) => {
    const rel = path.relative(PUBLIC_DIR, f).replace(/\\/g, '/');
    allMedia.add('/' + rel);
  });
  lines.push(`| ${d.folder} | ${d.usedBy} | ${files.length} |`);
}
lines.push('');

console.log('');
console.log('已生成 媒体对账.md');
const summary = mediaStats.map((s) => `${s.label.split('（')[0]} ${s.files.length}`).join(' / ');
console.log('  媒体目录：' + summary);

// ── 3. 缺图：引用了但磁盘没有 ──
const missing = [...referenced].filter((r) => !allMedia.has(r));
console.log(`  引用了但磁盘没有：${missing.length} 个路径`);
lines.push('## 缺图（内容里引用了，public/ 下不存在）');
lines.push('');
if (missing.length === 0) {
  lines.push('✅ 无缺图');
  lines.push('');
} else {
  lines.push(`共 ${missing.length} 个路径：`);
  lines.push('');
  missing.sort().forEach((m) => lines.push(`- \`${m}\``));
  lines.push('');
}

// ── 4. 孤儿：磁盘有但未引用 ──
const orphan = [...allMedia].filter((p) => !referenced.has(p) && IMG_EXT.test(p));
console.log(`  磁盘有但未引用：${orphan.length} 个`);
lines.push('## 未引用（磁盘上有，但内容里没引用）');
lines.push('');
lines.push(`共 ${orphan.length} 个（可能是历史遗留、或仅由代码/样式引用，不一定是垃圾）。`);
lines.push('');
lines.push('<details><summary>展开列表</summary>');
lines.push('');
orphan.sort().forEach((o) => lines.push(`- \`${o}\``));
lines.push('');
lines.push('</details>');
lines.push('');

fs.writeFileSync(REPORT, lines.join('\n'), 'utf8');
console.log('');
