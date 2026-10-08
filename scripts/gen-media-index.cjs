#!/usr/bin/env node
/**
 * gen-media-index.cjs —— 从 git 历史生成媒体文件「首次提交时间」索引
 *
 * 用法：npm run media:index
 *   （npm script 会先跑 git log 输出到 .git-media-log.tmp，再调用本脚本读取）
 *
 * 为什么需要：
 *   Decap 的 GitHub backend 用 Git Trees API 取媒体列表，
 *   该接口不返回提交时间 → 媒体库无法按上传时间排序。
 *   这里离线从本地 git 历史挖出每个图片的首次提交时间，
 *   生成 public/admin/media-index.json，供 media-sort.js 在前端使用。
 *
 * 输入格式（.git-media-log.tmp）：
 *   COMMIT|2026-09-29T14:48:52+08:00
 *
 *   public/images/xxx.png
 *   public/images/yyy.png
 *   COMMIT|...
 *
 * 输出：public/admin/media-index.json
 *   { "generated": "...", "items": { "/images/xxx.png": "2026-09-29T14:48:52+08:00" } }
 *
 * 注意：取的是「首次提交」（git log 默认从新到旧，
 *       同一文件后面的记录忽略 → 保留最后一次赋值即最早时间）。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG_FILE = path.join(ROOT, '.git-media-log.tmp');
const OUT_FILE = path.join(ROOT, 'public', 'admin', 'media-index.json');

if (!fs.existsSync(LOG_FILE)) {
  console.error('');
  console.error(`❌ 找不到 ${path.basename(LOG_FILE)}`);
  console.error('   请用 npm run media:index（它会先生成该文件），或手动执行：');
  console.error('   git log --diff-filter=A --format="COMMIT|%cI" --name-only -- public/images > .git-media-log.tmp');
  console.error('');
  process.exit(1);
}

const text = fs.readFileSync(LOG_FILE, 'utf8');
const lines = text.split(/\r?\n/);

const items = Object.create(null);
let currentTime = null;
let added = 0;

const IMG_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

for (const raw of lines) {
  const line = raw.trim();
  if (!line) continue;

  if (line.startsWith('COMMIT|')) {
    currentTime = line.slice('COMMIT|'.length).trim();
    continue;
  }

  // 只索引 public/images 下的图片，且必须有当前时间上下文
  if (!currentTime) continue;
  if (!/^public\/images\//.test(line)) continue;
  if (!IMG_EXT.test(line)) continue;

  // public/images/xxx.png  →  /images/xxx.png
  const url = '/' + line.slice('public/'.length);

  // git log 从新到旧：后面的记录时间更早 → 持续覆盖，最终留下最早时间
  // 用 --diff-filter=A 时理论上每个文件只出现一次，这里覆盖是幂等且安全的
  if (!(url in items)) {
    items[url] = currentTime;
    added++;
  }
}

const out = {
  generated: new Date().toISOString(),
  count: added,
  items
};

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), 'utf8');

console.log('');
console.log(`✅ 已生成 ${path.relative(ROOT, OUT_FILE).replace(/\\/g, '/')}`);
console.log(`   索引 ${added} 张图片的首次提交时间`);
console.log('');
