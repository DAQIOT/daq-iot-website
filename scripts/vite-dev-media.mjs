/**
 * 仅本地开发生效的「媒体清单」接口：GET /__media
 *
 * 为什么需要它：
 *   Decap 的本地后端（decap-server）在 getMedia 时会把媒体目录下【每个文件的完整内容】
 *   一起 base64 返回。本项目 public/images 根目录 138 张 / 72MB（全站 1927 个 / 718MB），
 *   后端每次打开媒体库都要传上百 MB，浏览器直接白屏/卡死。
 *
 * 这个中间件只返回【元数据】（路径 / 名称 / 体积 / 修改时间），并且支持：
 *   - folder / sub：目录导航
 *   - q：文件名模糊搜索（在 folder 下递归匹配）
 *   - sort：排序 time-desc（默认）/ time-asc / name-asc / name-desc
 *   - page / pageSize：分页
 * 图片缩略图直接返回 dev 服务器上的真实路径（原尺寸直出，不压缩），由浏览器按需加载。
 *
 * 只在 `astro dev` 时生效（configureServer），不参与 `astro build`，线上不受影响
 * （线上走 GitHub 后端的 git trees 接口，本来就是轻量的）。
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg', 'bmp', 'ico']);
const MAX_WALK = 20000; // 兜底：避免极端目录把 dev 服务拖垮

function relToRoot(abs) {
  return path.relative(process.cwd(), abs).split(path.sep).join('/');
}

async function walk(dir, out, depth, recursive) {
  if (depth > 6 || out.files.length > MAX_WALK) return;
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.folders.push(relToRoot(abs));
      if (recursive) await walk(abs, out, depth + 1, recursive);
    } else if (e.isFile()) {
      // 跳过 .gitkeep / .DS_Store / Thumbs.db 之类的系统占位文件
      if (e.name.startsWith('.')) continue;
      try {
        const st = await fs.stat(abs);
        out.files.push({ abs, size: st.size, mtime: st.mtimeMs });
      } catch {
        /* ignore */
      }
    }
  }
}

export default function devMediaApi() {
  return {
    name: 'dev-media-api',
    configureServer(server) {
      server.middlewares.use('/__media', async (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        try {
          const url = new URL(req.url || '/', 'http://localhost');
          const folderRaw = url.searchParams.get('folder') || 'public/images';
          const sub = url.searchParams.get('sub') || '';
          const q = (url.searchParams.get('q') || '').trim().toLowerCase();
          const sort = url.searchParams.get('sort') || 'time-desc';
          const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10) || 1);
          const pageSize = Math.min(
            200,
            Math.max(1, parseInt(url.searchParams.get('pageSize') || '24', 10) || 24)
          );
          const recursive = url.searchParams.get('recursive') === '1' || !!q;

          const rootDir = path.resolve(process.cwd(), 'public');
          const folderAbs = path.resolve(process.cwd(), String(folderRaw).replace(/^\/+/, ''));
          // 安全兜底：只允许访问 public/ 下的目录
          if (!folderAbs.startsWith(rootDir)) {
            res.statusCode = 403;
            res.end(JSON.stringify({ error: 'folder must be under public/' }));
            return;
          }
          const dirAbs = sub ? path.resolve(folderAbs, sub) : folderAbs;
          if (!dirAbs.startsWith(folderAbs)) {
            res.statusCode = 403;
            res.end(JSON.stringify({ error: 'invalid sub folder' }));
            return;
          }

          // 一级子目录（下拉导航用）
          let subfolders = [];
          try {
            const rd = await fs.readdir(folderAbs, { withFileTypes: true });
            subfolders = rd
              .filter((d) => d.isDirectory())
              .map((d) => d.name)
              .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'));
          } catch {
            /* 目录不存在 */
          }

          const out = { folders: [], files: [] };
          // 非递归：只列当前目录直属文件（decap-server 原行为也是只看直属文件）
          await walk(dirAbs, out, 0, recursive);

          let files = out.files;
          if (q) {
            files = files.filter((f) => path.basename(f.abs).toLowerCase().indexOf(q) >= 0);
          }
          // 排序（先排后分页，保证跨页顺序稳定）
          switch (sort) {
            case 'time-asc':
              files.sort((a, b) => a.mtime - b.mtime);
              break;
            case 'name-asc':
              files.sort((a, b) => path.basename(a.abs).localeCompare(path.basename(b.abs), 'zh-Hans-CN', { numeric: true }));
              break;
            case 'name-desc':
              files.sort((a, b) => path.basename(b.abs).localeCompare(path.basename(a.abs), 'zh-Hans-CN', { numeric: true }));
              break;
            case 'time-desc':
            default:
              files.sort((a, b) => b.mtime - a.mtime); // 新上传的排前面
          }

          const total = files.length;
          const totalPages = Math.max(1, Math.ceil(total / pageSize));
          const safePage = Math.min(page, totalPages);
          const slice = files.slice((safePage - 1) * pageSize, safePage * pageSize);

          const items = slice.map((f) => {
            const rel = relToRoot(f.abs);
            const name = path.basename(f.abs);
            const ext = (path.extname(f.abs).slice(1) || '').toLowerCase();
            return {
              id: rel,
              name,
              path: rel,
              size: f.size,
              mtime: f.mtime,
              ext,
              isImage: IMAGE_EXT.has(ext)
            };
          });

          res.statusCode = 200;
          res.end(
            JSON.stringify({
              folder: relToRoot(folderAbs),
              sub,
              subfolders,
              q,
              sort,
              page: safePage,
              pageSize,
              total,
              totalPages,
              items
            })
          );
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: String((e && e.message) || e) }));
        }
      });
    }
  };
}
