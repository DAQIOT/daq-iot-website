#!/usr/bin/env node
/**
 * fix-misplaced-media.cjs —— 把"走错门"的图片从深渊目录搬回正确位置
 *
 * 用法：npm run fix:media
 *
 * 背景：
 *   Decap 的 media_folder 若不带前导 "/"，会被当成相对路径，
 *   上传的图片落到 src/content/<集合>/<语言>/public/images/... 。
 *   正确位置应是 public/images/... 。
 *
 *   本脚本扫描 src/content/**&#47;public/** 下所有文件，搬回 public/ 对应位置：
 *     · 目标不存在 → 直接移动
 *     · 目标存在且内容相同 → 删除源（去重）
 *     · 目标存在但内容不同 → 改名 xxx-alt.ext 后移入，绝不覆盖
 *   最后清理空目录。
 *
 * ⚠️ 修复 config.yml 后，请重启 decap-server 让配置生效。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const SRC_CONTENT = path.join(ROOT, 'src', 'content');
const PUBLIC_DIR = path.join(ROOT, 'public');

function md5(file) {
  return crypto.createHash('md5').update(fs.readFileSync(file)).digest('hex');
}

// 找 src/content 下所有形如 .../<语言>/public/... 的"深渊"文件
function findMisplaced(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      // 命中深渊：目录名恰好是 public，且父链里带 content
      if (name === 'public') {
        collectFiles(p, out);
      } else {
        findMisplaced(p, out);
      }
    }
  }
  return out;
}

function collectFiles(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) collectFiles(p, out);
    else out.push(p);
  }
}

function pruneEmpty(dir) {
  if (!fs.existsSync(dir)) return false;
  const entries = fs.readdirSync(dir);
  if (entries.length === 0) {
    fs.rmdirSync(dir);
    return true;
  }
  return false;
}

const misplaced = findMisplaced(SRC_CONTENT);

if (misplaced.length === 0) {
  console.log('');
  console.log('✅ 没有发现走错目录的图片（src/content 下无 public/ 深渊目录）');
  console.log('');
  process.exit(0);
}

console.log('');
console.log(`发现 ${misplaced.length} 个走错目录的文件，开始搬运…`);
console.log('');

let moved = 0;
let skipped = 0;
let renamed = 0;

for (const src of misplaced) {
  // src = .../src/content/cases/zh/public/images/cases/xxx.png
  // 取出 "public/" 之后的部分 → images/cases/xxx.png
  const idx = src.indexOf(`${path.sep}public${path.sep}`);
  if (idx < 0) continue;
  const relAfterPublic = src.slice(idx + `${path.sep}public${path.sep}`.length);
  const dest = path.join(PUBLIC_DIR, relAfterPublic);

  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (!fs.existsSync(dest)) {
    fs.renameSync(src, dest);
    moved++;
  } else if (md5(src) === md5(dest)) {
    fs.unlinkSync(src);
    skipped++;
  } else {
    const ext = path.extname(dest);
    const base = dest.slice(0, -ext.length);
    let alt = `${base}-alt${ext}`;
    let n = 2;
    while (fs.existsSync(alt)) {
      alt = `${base}-alt${n}${ext}`;
      n++;
    }
    fs.renameSync(src, alt);
    renamed++;
  }
}

// 清理空目录（自底向上）
function cleanEmpty(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) cleanEmpty(p);
  }
  pruneEmpty(dir);
}
cleanEmpty(SRC_CONTENT);

console.log(`  搬回 ${moved} 个，内容重复跳过 ${skipped} 个，重命名 ${renamed} 个`);
console.log('');

// 复查
const left = findMisplaced(SRC_CONTENT);
if (left.length === 0) {
  console.log('✅ 深渊目录已清空');
} else {
  console.log(`⚠️ 仍有 ${left.length} 个文件未处理`);
}
console.log('');
