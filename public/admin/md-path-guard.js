/**
 * 正文图片路径保险（md-path-guard.js）
 * ------------------------------------------------------------
 * 问题：Decap 正文编辑器从媒体库插图时，偶尔会把仓库相对路径写进 Markdown
 *       （如 `![x](public/images/a.png)`、封面 `image: public/images/a.png`），
 *       页面构建时报 Could not find requested image。
 *
 * 方案：拦住「文章保存」的请求，在提交给 GitHub / 本地 decap-server 之前，
 *       把 md 里的错误前缀改回站点路径：
 *         ](public/images/  →  ](/images/
 *         ](public/files/   →  ](/files/
 *         image: public/images/  →  image: /images/   （封面字段，含加引号写法）
 *       改过就右上角弹提示；没写错则原样放行（零改动、零开销）。
 *
 * 覆盖两条保存通道：
 *   · 线上 GitHub 后端：PUT api.github.com/repos/:o/:r/contents/<path>.md（body.content = base64）
 *   · 本地 decap-server：POST localhost:8081（RPC action=persist，params.entries[].data = base64）
 *
 * 加载：须在 CMS 发起保存请求之前（和 media-dedupe.js 一样放在前面）。
 * 出错兜底：任何解析异常都按原请求放行，绝不阻塞保存。
 */
(function () {
  if (window.__mdPathGuardInstalled) return;
  window.__mdPathGuardInstalled = true;

  var origFetch = window.fetch ? window.fetch.bind(window) : null;
  if (!origFetch) return;

  /** base64（UTF-8）→ 文本 */
  function b64decode(s) {
    var bin = atob(s);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  /** 文本 → base64（UTF-8） */
  function b64encode(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  /** 修正 md 文本里的错误前缀，返回 {text, count}；没问题时 count=0 */
  function fixMd(text) {
    var count = 0;
    // 1) 正文与链接里的 public/images|files
    var out = text.replace(/(^|[\s([])public\/(images|files)\//g, function (m, pre, dir) {
      count++;
      return pre + '/' + dir + '/';
    });
    // 1b) Markdown 里的相对写法 ](../public/images/... → ](/images/...
    out = out.replace(/\]\(\.{1,2}\/public\/(images|files)\//g, function (m, dir) {
      count++;
      return '](/' + dir + '/';
    });
    // 2) frontmatter 字段值：image: public/images/...（含 "public/...）
    out = out.replace(/^([A-Za-z_][\w-]*:\s*)("?)public\/((?:images|files)\/)/gm, function (m, head, quote, rest) {
      count++;
      return head + (quote || '') + '/' + rest;
    });
    return { text: out, count: count };
  }

  /** 右上角提示 */
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
      }, 5200);
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 5800);
    } catch (e) {}
  }

  /** 线上：PUT api.github.com/repos/x/y/contents/<path>.md，body={content: base64} */
  function matchGithubMdPut(url, method, bodyText) {
    if (method !== 'PUT') return false;
    if (!/\/repos\/[^/]+\/[^/]+\/contents\//i.test(url)) return false;
    var m = url.match(/contents\/([^?#]+)/);
    if (!m) return false;
    var path;
    try {
      path = decodeURIComponent(m[1]);
    } catch (e) {
      return false;
    }
    return /\.md$/i.test(path) && /\.md$/i.test(path); // 明确只处理 md
  }

  /** 本地：POST localhost:8081 RPC，body={action:'persist', params:{entries:[{path,data}]}} */
  function matchLocalPersist(url, method, json) {
    if (method !== 'POST') return false;
    if (!/localhost:8081|127\.0\.0\.1:8081/.test(url)) return false;
    return !!(json && json.action === 'persist' && json.params && Array.isArray(json.params.entries));
  }

  window.fetch = function (input, init) {
    var result = null; // {count} 表示已修改，需要替换 body
    try {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
      if (typeof (init && init.body) !== 'string') return origFetch(input, init);

      var json = null;
      if (method === 'POST') {
        try {
          json = JSON.parse(init.body);
        } catch (e) {
          json = null;
        }
      }

      // ── 本地 RPC persist：逐个 entry 修 ──
      if (matchLocalPersist(url, method, json)) {
        var total = 0;
        json.params.entries.forEach(function (en) {
          if (!en || typeof en.path !== 'string' || !/\.md$/i.test(en.path)) return;
          if (typeof en.data !== 'string' || !en.data) return;
          try {
            var fixed = fixMd(b64decode(en.data));
            if (fixed.count > 0) {
              en.data = b64encode(fixed.text);
              total += fixed.count;
            }
          } catch (e) {
            /* 该 entry 解不开就原样放行 */
          }
        });
        if (total > 0) {
          toast('已自动修正 ' + total + ' 处图片路径（去掉多余的 public/ 前缀），按正确路径保存。');
          init = Object.assign({}, init, { body: JSON.stringify(json) });
        }
        return origFetch(input, init);
      }

      // ── 线上 GitHub PUT contents/<x>.md ──
      if (matchGithubMdPut(url, method, init.body)) {
        var body = JSON.parse(init.body);
        if (body && typeof body.content === 'string' && body.content) {
          var f = fixMd(b64decode(body.content));
          if (f.count > 0) {
            body.content = b64encode(f.text);
            init = Object.assign({}, init, { body: JSON.stringify(body) });
            toast('已自动修正 ' + f.count + ' 处图片路径（去掉多余的 public/ 前缀），按正确路径保存。');
          }
        }
        return origFetch(input, init);
      }
    } catch (e) {
      return origFetch(input, init); // 兜底：绝不阻塞保存
    }
    return origFetch(input, init);
  };
})();
