/**
 * 媒体库上传防覆盖（media-dedupe.js）
 *
 * 问题：Decap 上传媒体文件时，如果 public/images 下已有同名文件，
 *       它会带着旧文件的 sha 直接提交，旧文件被静默覆盖。
 *
 * 方案：拦截对 GitHub Contents API 的 PUT 请求（仅限 public/images、public/files
 *       下的媒体文件），上传前先 HEAD 探测目标路径是否已存在：
 *       - 不存在 → 正常上传（一次 HEAD 的开销，可忽略）
 *       - 已存在 → 自动改名为 名称(1).png、名称(2).png … 直到找到空位，
 *                  并在右上角弹提示告知新文件名；原文件保持不动。
 *
 * 范围：只拦媒体文件（图片/视频/文档等扩展名白名单），
 *       正文 md、json、yml 的保存不受影响（它们本来就是覆盖自身）。
 * 生效：线上 GitHub OAuth 登录后生效；本地 decap-server 代理不走此 API，不拦。
 * 加载：必须在 decap-cms.js / init-cms.js 发起任何上传请求之前加载。
 */
(function () {
  if (window.__mediaDedupeInstalled) return;
  window.__mediaDedupeInstalled = true;

  // 媒体文件扩展名（白名单之外的一律不拦，避免误伤文章保存）
  var MEDIA_EXT = /\.(png|jpe?g|webp|gif|svg|ico|bmp|avif|tiff?|mp4|webm|mov|mp3|wav|pdf|zip|docx?|xlsx?|pptx?|csv|woff2?|ttf|otf)$/i;
  // 只拦这两个媒体目录
  var MEDIA_DIR = /^\/?public\/(images|files)\//i;

  var origFetch = window.fetch ? window.fetch.bind(window) : null;
  if (!origFetch) return;

  /** 判断一个 URL 是否为「媒体文件的覆盖式上传」，命中返回解析结果 */
  function matchMediaUpload(url) {
    if (!/api\.github\.com\/repos\/[^/]+\/[^/]+\/contents\//i.test(url)) return null;
    var m = url.match(/contents\/([^?#]+)/);
    if (!m) return null;
    var path;
    try {
      path = decodeURIComponent(m[1]);
    } catch (e) {
      return null;
    }
    if (!MEDIA_DIR.test(path) || !MEDIA_EXT.test(path)) return null;
    return { url: url, path: path };
  }

  /** 拆出 目录 / 主名 / 扩展名（含点） */
  function splitPath(path) {
    var i = path.lastIndexOf('/');
    var dir = i >= 0 ? path.slice(0, i + 1) : '';
    var name = i >= 0 ? path.slice(i + 1) : path;
    var dot = name.lastIndexOf('.');
    var base = dot > 0 ? name.slice(0, dot) : name;
    var ext = dot > 0 ? name.slice(dot) : '';
    return { dir: dir, base: base, ext: ext };
  }

  /** 右上角提示（不阻塞上传流程） */
  function toast(msg) {
    try {
      var el = document.createElement('div');
      el.textContent = msg;
      el.style.cssText =
        'position:fixed;top:48px;right:16px;z-index:99999;background:#1f2937;color:#f9fafb;' +
        'padding:10px 16px;border-radius:8px;font:13px/1.5 -apple-system,"Segoe UI",sans-serif;' +
        'box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:460px;';
      document.body.appendChild(el);
      setTimeout(function () {
        el.style.transition = 'opacity .4s';
        el.style.opacity = '0';
      }, 4600);
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 5200);
    } catch (e) {}
  }

  window.fetch = function (input, init) {
    try {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method = ((init && init.method) || (input && input.method) || 'GET').toUpperCase();
      if (method !== 'PUT' || !init || typeof init.body !== 'string') return origFetch(input, init);

      var hit = matchMediaUpload(url);
      if (!hit) return origFetch(input, init);

      var body;
      try {
        body = JSON.parse(init.body);
      } catch (e) {
        return origFetch(input, init);
      }
      var headers = init.headers || (input && input.headers) || {};

      // 先探测目标路径是否已有文件（HEAD 与 GET 同语义，只看状态码）
      return origFetch(hit.url.split('?')[0], { method: 'HEAD', headers: headers }).then(function (res) {
        if (res.status !== 200) return origFetch(input, init); // 不存在 → 原样上传

        // 已存在 → 从 (1) 开始找空位；(n) 也被占用时 GitHub 返回 422，继续递增
        var parts = splitPath(hit.path);
        var attempt = function (n) {
          var newPath = parts.dir + parts.base + '(' + n + ')' + parts.ext;
          var newUrl = hit.url.replace(/contents\/[^?#]+/, 'contents/' + encodeURIComponent(newPath));
          var newBody = Object.assign({}, body, {
            sha: undefined,
            message: 'Upload ' + newPath + ' (auto-renamed: same-name file already exists)'
          });
          return origFetch(newUrl, Object.assign({}, init, { body: JSON.stringify(newBody) })).then(function (res2) {
            if (res2.status === 422) return attempt(n + 1);
            if (res2.ok) {
              toast(
                '媒体库已有同名文件「' + parts.base + parts.ext + '」，本次已自动保存为「' +
                  parts.base + '(' + n + ')' + parts.ext + '」，原文件未被覆盖。'
              );
            }
            return res2;
          });
        };
        return attempt(1);
      });
    } catch (e) {
      return origFetch(input, init);
    }
  };
})();
