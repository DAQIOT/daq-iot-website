/**
 * 生成「透明底」合作伙伴 Logo
 *
 * 背景：后台上传的 logo 图多为「白底 + 深色 logo」，直接放在有背景图的深色区块上
 * 会是一堆白方块。CSS 去不掉图片内部自带的白底，只能预处理图片。
 *
 * 算法：边缘泛洪填充（flood fill）
 *   1. 用图片最外圈像素求背景色
 *   2. 从四条边所有「接近背景色」的像素出发做 BFS，只把【与边缘连通】的区域判为背景
 *      —— 这样 logo 内部的浅色（比如「O」的空心、白色反白字）不会被误抠
 *   3. 背景像素按到背景色的距离做透明度渐变（alpha ramp），边缘不产生锯齿
 *   4. 输出带 alpha 的 webp，宽度限制 400px 控制体积
 *
 * 用法：node scripts/gen-logo-alpha.mjs
 * 输出：public/images/partners-alpha/**（原图不动）
 *
 * 以后后台新增 logo，重新跑一次这个脚本即可同步。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve('public/images/partners');
const OUT = path.resolve('public/images/partners-alpha');
const MAX_W = 400;

/** 背景泛洪判定阈值：与背景色距离 <= TOL 视为背景 */
const TOL = 36;
/** alpha 渐变：距离 <= NEAR 全透明，>= FAR 不透明 */
const NEAR = 8;
const FAR = 44;

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(abs)));
    else if (/\.(webp|png|jpe?g)$/i.test(e.name)) out.push(abs);
  }
  return out;
}

const dist = (d, o, bg) =>
  Math.max(Math.abs(d[o] - bg[0]), Math.abs(d[o + 1] - bg[1]), Math.abs(d[o + 2] - bg[2]));

function stripBackground(data, W, H) {
  // 1) 背景色：最外圈 4px 内不透明像素的平均值
  let sr = 0,
    sg = 0,
    sb = 0,
    sn = 0;
  const ring = Math.min(4, Math.floor(Math.min(W, H) / 2));
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (!(x < ring || y < ring || x >= W - ring || y >= H - ring)) continue;
      const o = (y * W + x) * 4;
      if (data[o + 3] < 200) continue;
      sr += data[o];
      sg += data[o + 1];
      sb += data[o + 2];
      sn++;
    }
  }
  const bg = sn > 0 ? [sr / sn, sg / sn, sb / sn] : [255, 255, 255];

  // 2) 从边缘泛洪，标记与边缘连通的背景像素
  const isBg = new Uint8Array(W * H);
  const stack = [];
  for (let x = 0; x < W; x++) {
    stack.push(x, (H - 1) * W + x);
  }
  for (let y = 0; y < H; y++) {
    stack.push(y * W, y * W + W - 1);
  }
  while (stack.length) {
    const i = stack.pop();
    if (isBg[i]) continue;
    const o = i * 4;
    if (data[o + 3] >= 20 && dist(data, o, bg) > TOL) continue; // 是内容，不入队
    isBg[i] = 1;
    const x = i % W,
      y = (i / W) | 0;
    if (x > 0 && !isBg[i - 1]) stack.push(i - 1);
    if (x < W - 1 && !isBg[i + 1]) stack.push(i + 1);
    if (y > 0 && !isBg[i - W]) stack.push(i - W);
    if (y < H - 1 && !isBg[i + W]) stack.push(i + W);
  }

  // 3) 背景像素按距离做透明渐变
  let removed = 0;
  for (let i = 0; i < W * H; i++) {
    if (!isBg[i]) continue;
    const o = i * 4;
    const d = dist(data, o, bg);
    let f;
    if (d <= NEAR) f = 0;
    else if (d >= FAR) f = 1;
    else f = (d - NEAR) / (FAR - NEAR);
    const na = Math.round(data[o + 3] * f);
    if (na < 20) removed++;
    data[o + 3] = na;
  }
  return removed / (W * H);
}

const files = await walk(SRC);
let done = 0;
const warn = [];

for (const file of files) {
  const rel = path.relative(SRC, file);
  const target = path
    .join(OUT, rel)
    .replace(/\.(png|jpe?g)$/i, '.webp');
  await fs.mkdir(path.dirname(target), { recursive: true });

  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ratio = stripBackground(data, info.width, info.height);
  if (ratio > 0.97) warn.push(`${rel} 抠掉 ${(ratio * 100).toFixed(0)}%（疑似空白图）`);

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(target);
  done++;
}

console.log(`透明底 logo 已生成 ${done} 张 → ${path.relative(process.cwd(), OUT)}`);
if (warn.length) console.log('提示:\n  ' + warn.join('\n  '));
