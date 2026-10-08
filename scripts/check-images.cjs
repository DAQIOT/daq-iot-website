#!/usr/bin/env node
/**
 * check-images.cjs —— 校验所有内容文件里引用的图片，是否真实存在于 public/ 下
 *
 * 用法：npm run check:images
 *
 * 背景：
 *   Decap 的 media_folder 若不带前导 "/"，上传的图片会落到
 *   src/content/<集合>/<语言>/public/images/... 这样的"深渊目录"，
 *   而 md 里记录的是 /images/xxx.png（对应 public/images/）。
 *   结果就是后台看着传成功了，前台却 404 空白。
 *
 *   本脚本扫描 src/content/**\/*.md 中所有 /images/...、/files/... 等
 *   以 / 开头的站内资源引用，逐个检查 public/ 下是否存在。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const PUBLIC_DIR = path.join(ROOT, 'public');

// 只检查这些前缀的站内引用（以 / 开头的本地资源）
const LOCAL_PREFIXES = ['/images/', '/files/', '/uploads/', '/static/', '/assets/'];

// 逐行匹配：![alt](/images/xxx.png) 或 src="/images/xxx.png" 或裸链接
const REF_RE = /!\[[^\]]*\]\(([^)\s]+)|(?:src|href)\s*=\s*["']([^"']+)["']|["'](\/(?:images|files|uploads|static|assets)\/[^"'\s)]+)["']/g;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(md|mdx)$/i.test(name)) out.push(p);
  }
  return out;
}

function isLocal(ref) {
  if (!ref || !ref.startsWith('/')) return false;
  return LOCAL_PREFIXES.some((p) => ref.startsWith(p));
}

const files = walk(CONTENT_DIR);
const missing = new Map(); // ref -> [{file, line}]
let totalRefs = 0;

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((line, idx) => {
    let m;
    REF_RE.lastIndex = 0;
    while ((m = REF_RE.exec(line)) !== null) {
      const ref = m[1] || m[2] || m[3];
      if (!isLocal(ref)) continue;
      // 去掉 query / hash
      const clean = ref.split(/[?#]/)[0];
      totalRefs++;
      const disk = path.join(PUBLIC_DIR, clean.replace(/^\//, ''));
      if (!fs.existsSync(disk)) {
        if (!missing.has(clean)) missing.set(clean, []);
        missing.get(clean).push({
          file: path.relative(ROOT, file).replace(/\\/g, '/'),
          line: idx + 1,
        });
      }
    }
  });
}

console.log('');
if (missing.size === 0) {
  console.log(`✅ 全部 ${totalRefs} 处图片引用均存在（扫描 ${files.length} 个内容文件）`);
  console.log('');
  process.exit(0);
}

let count = 0;
for (const arr of missing.values()) count += arr.length;

console.log(`❌ 共 ${count} 处引用指向不存在的图片（去重后 ${missing.size} 个路径）：`);
console.log('');

// 按文件聚合输出
const byFile = new Map();
for (const [ref, locs] of missing) {
  for (const loc of locs) {
    if (!byFile.has(loc.file)) byFile.set(loc.file, []);
    byFile.get(loc.file).push({ ref, line: loc.line });
  }
}
for (const [file, items] of byFile) {
  console.log(`■ ${file}`);
  items
    .sort((a, b) => a.line - b.line)
    .forEach((it) => console.log(`    第 ${it.line} 行  ${it.ref}`));
  console.log('');
}

console.log(`（共涉及 ${byFile.size} 个内容文件）`);
console.log('');
process.exit(1);
