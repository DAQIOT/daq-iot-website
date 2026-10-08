// 媒体库「按上传时间倒序」排序
// ------------------------------------------------------------
// 背景：
//   Decap CMS 的 GitHub backend 用 Git Trees API（/git/trees/{branch}:{folder}）
//   取媒体列表，该接口只返回 path / type / sha / size，**没有提交时间**；
//   媒体库组件自身也没有 sortable_fields（那是集合级配置，且不作用于媒体库），
//   所以原生媒体库只能按接口返回顺序（近似字典序）平铺，无法按上传时间排。
//
// 做法（零额外 API 请求、不改 vendor）：
//   1. 用 scripts/gen-media-index.cjs 从本地 git 历史预生成
//      public/admin/media-index.json（路径 → 首次提交时间）；
//   2. 这里 patch window.fetch：拦截 Git Trees API 的响应，
//      按当前排序模式重排 tree 数组后再交给 Decap。
//   3. 排序模式由 media-sort-ui.js 注入的下拉控制，存 localStorage。
//
// 降级：索引缺失 / 匹配不到的文件保持原相对顺序，排在最后。
(function () {
  var INDEX_URL = './media-index.json';
  var STORAGE_KEY = 'cms-media-sort';
  var SORT_FIELD_KEY = 'cms-media-sort-field'; // 遗留键，仅做兼容
  var index = null; // { '/images/xxx.png': '2026-09-29T14:48:52+08:00' }

  var VALID = ['time-desc', 'time-asc', 'name-asc', 'name-desc'];
  function mode() {
    var v = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(SORT_FIELD_KEY);
    return VALID.indexOf(v) >= 0 ? v : 'time-desc';
  }

  // 时间缓存：把 ISO 串预转成数字，避免每次比较都 new Date()
  var tsCache = Object.create(null);
  function ts(url) {
    if (url in tsCache) return tsCache[url];
    var v = index && index[url];
    var n = v ? Date.parse(v) : 0;
    tsCache[url] = isNaN(n) ? 0 : n;
    return tsCache[url];
  }

  // 取路径里的文件名（用于文件名排序）
  function basename(p) {
    var s = String(p || '');
    var i = s.lastIndexOf('/');
    return i >= 0 ? s.slice(i + 1) : s;
  }

  // 把 tree 里的 path（相对 media_folder）拼成 public_folder 形式的 URL
  // 例：media_folder=/public/images、public_folder=/images
  //     接口 tree 的 path 是 'a.png'，url 应为 '/images/a.png'
  function toUrl(prefix, p) {
    var clean = String(prefix || '').replace(/\/+$/, '');
    return clean + '/' + String(p).replace(/^\/+/, '');
  }

  // 从 API URL 里解析 media_folder / public_folder
  // 形如 https://api.github.com/repos/o/r/git/trees/main:public/images
  function parseApi(url) {
    var m = /\/git\/trees\/([^?]*)$/.exec(url);
    if (!m) return null;
    var ref = decodeURIComponent(m[1]);
    var i = ref.indexOf(':');
    if (i < 0) return null;
    var folder = ref.slice(i + 1).replace(/\/+$/, '');
    // 去掉可能的前导 /
    var norm = folder.replace(/^\/+/, '');
    if (norm.indexOf('public/') !== 0) return null;
    // public/images  →  /images
    return { folder: norm, publicUrl: '/' + norm.slice('public/'.length) };
  }

  function sortTree(tree, publicUrl) {
    if (!Array.isArray(tree)) return tree;
    var m = mode();

    // ── 文件名排序：不需要索引，直接排 ──
    if (m === 'name-asc' || m === 'name-desc') {
      var dir = m === 'name-asc' ? 1 : -1;
      return tree.slice().sort(function (a, b) {
        return dir * basename(a && a.path).localeCompare(basename(b && b.path), 'zh-Hans-CN', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    }

    // ── 时间排序：需要索引 ──
    var withTime = [];
    var without = [];
    for (var i = 0; i < tree.length; i++) {
      var it = tree[i];
      var t = ts(toUrl(publicUrl, it && it.path));
      if (t > 0) withTime.push({ it: it, t: t, i: i });
      else without.push({ it: it, t: 0, i: i });
    }
    // 都拿不到时间 → 不动，避免打乱原有顺序
    if (withTime.length === 0) return tree;

    var asc = m === 'time-asc';
    withTime.sort(function (a, b) {
      if (a.t !== b.t) return asc ? a.t - b.t : b.t - a.t;
      return a.i - b.i; // 同一时间保持原顺序（同批上传）
    });
    without.sort(function (a, b) {
      return a.i - b.i;
    });

    var out = new Array(tree.length);
    for (var j = 0; j < withTime.length; j++) out[j] = withTime[j].it;
    for (var k = 0; k < without.length; k++) out[withTime.length + k] = without[k];
    return out;
  }

  // 读取索引后再装 fetch 拦截，避免首次打开媒体库时索引还没到
  function install() {
    var origFetch = window.fetch.bind(window);

    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : input && input.url ? input.url : '';
      // 只处理 Git Trees API
      var isTrees = /api\.github\.com\/repos\/.*\/git\/trees\//.test(url);
      var p = isTrees ? parseApi(url) : null;

      return origFetch(input, init).then(function (res) {
        if (!p) return res;
        return res
          .clone()
          .json()
          .then(function (data) {
            if (!data || !Array.isArray(data.tree)) return res;
            data.tree = sortTree(data.tree, p.publicUrl);
            // 用新 body 重建 Response，保持其余元信息
            return new Response(JSON.stringify(data), {
              status: res.status,
              statusText: res.statusText,
              headers: res.headers
            });
          })
          .catch(function () {
            return res;
          });
      });
    };

    // 排序切换时清掉时间缓存，保证下次请求用新模式
    window.addEventListener('cms-media-sort-change', function () {
      tsCache = Object.create(null);
    });

    console.log('[media-sort] 已启用媒体库排序（' + mode() + '，索引 ' + Object.keys(index).length + ' 条）');
  }

  fetch(INDEX_URL + '?v=' + Date.now())
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      index = (data && data.items) || {};
      install();
    })
    .catch(function (e) {
      console.warn('[media-sort] 未加载到时间索引，仅「文件名」排序可用：', e && e.message);
      index = {};
      install();
    });
})();
