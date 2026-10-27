// 后台媒体库「轻量模式」
// ------------------------------------------------------------
// 问题：Decap 本地后端（decap-server）的 getMedia 会把媒体目录下【每个文件的完整内容】
//       一起 base64 返回。本项目 public/images 根目录 138 张 / 72MB，一打开媒体库就要传
//       上百 MB，浏览器直接空白 / 卡死。
//
// 做法（不改 vendor、不碰线上，也不压缩/不筛掉任何素材）：
//   1. Decap 的 getMedia 是「先 listFiles 拿列表，再对每条单独取预览」——
//      所以只要把【列表】换成轻量的（只分页，不筛选），后面的缩略图就只会拉当前页；
//   2. 列表来源换成 dev 中间件提供的 /__media（只返回路径 / 体积 / 时间，不返回内容）；
//      默认 behavior 与原生一致：列出该集合媒体目录下的全部文件（默认按修改时间倒序）；
//   3. 媒体库弹窗顶部注入一行「排序 + 分页」工具条。
//
// 开关：localStorage['cms-media-lite'] = 'off' 可整体关闭，回退到 Decap 原生行为（会慢）。
// 仅在 localhost / 127.0.0.1 生效；线上（GitHub 后端）本就不走本地 proxy，不受影响。
(function () {
  var TAG = '[media-lite]';
  var KEY = 'cms-media-lite';
  var BTN_ID = 'cms-media-lite-bar';
  var PAGE_SIZE_DEFAULT = 24;

  var host = location.hostname;
  var isLocal = host === 'localhost' || host === '127.0.0.1';
  var enabled = isLocal && localStorage.getItem(KEY) !== 'off';
  if (!enabled) return;

  // 排序：与 media-sort-ui.js 共用同一份选项和 localStorage key
  var SORT_KEY = 'cms-media-sort';
  var SORT_OPTIONS = window.__cmsSortOptions || [
    { key: 'time-desc', label: '上传时间（新→旧）' },
    { key: 'time-asc', label: '上传时间（旧→新）' },
    { key: 'name-asc', label: '文件名（A→Z）' },
    { key: 'name-desc', label: '文件名（Z→A）' }
  ];

  function sortMode() {
    var v = localStorage.getItem(SORT_KEY);
    return SORT_OPTIONS.some(function (o) {
      return o.key === v;
    })
      ? v
      : 'time-desc';
  }

  // 每个 media_folder 一份浏览状态（切集合时互不干扰）
  var state = {};
  function st(folder) {
    if (!state[folder]) {
      state[folder] = { sub: '', q: '', sort: sortMode(), page: 1, pageSize: PAGE_SIZE_DEFAULT, subfolders: [], total: 0 };
    }
    return state[folder];
  }

  var origFetch = window.fetch.bind(window);

  // ── createObjectURL 垫片（缩略图的关键）──
  // 本地后端的 getMedia 返回项会被 decap 内部的 mz({id,content,encoding,path,name}) 重建：
  //   它【只认】 content+encoding:'base64'，否则按「空内容」new Blob([Uint8Array(0)])
  //   再 URL.createObjectURL(blob) 生成 displayURL —— 我们注入的字符串会被扔掉，
  //   结果就是 12 张 <img src="blob:...空文件">，naturalWidth=0，缩略图全是空白。
  // （console 里那排 "Unsupported encoding 'undefined' for file ..." 就是它打的。）
  // 好在 .map(mz) 是同步的、且每个条目恰好调用一次 createObjectURL ——
  // 所以在返回轻量列表前把「真实路径队列」挂好，垫片遇到 size===0 的 blob
  // 就按顺序换成 dev 服务器上的真实地址（返回值本来就是字符串，完全兼容）。
  var origCreateObjectURL = URL.createObjectURL.bind(URL);
  var blobUrlQueue = null;
  URL.createObjectURL = function (obj) {
    try {
      if (blobUrlQueue && blobUrlQueue.length && obj && obj.size === 0) {
        var u = blobUrlQueue.shift();
        if (!blobUrlQueue.length) blobUrlQueue = null;
        return u;
      }
    } catch (e) {
      /* fallthrough */
    }
    return origCreateObjectURL(obj);
  };

  // 启动时先探一次 /__media：dev 服务没重启时会 404，此时彻底不介入，
  // 并在页面上给出明确提示（避免用户只看到「媒体库空白」却不知道为什么）。
  var apiReady = null; // null=未探测 true=可用 false=不可用
  var warned = false;

  function hint(msg) {
    if (warned) return;
    warned = true;
    console.warn(TAG, msg);
    var el = document.createElement('div');
    el.id = 'cms-media-lite-hint';
    el.textContent = msg;
    el.style.cssText =
      'position:fixed;right:16px;bottom:16px;z-index:99999;max-width:420px;padding:10px 14px;' +
      'background:#7c2d12;color:#fff;font-size:12px;line-height:1.6;border-radius:8px;' +
      'box-shadow:0 4px 14px rgba(0,0,0,.25);font-family:system-ui,-apple-system,sans-serif;';
    document.body.appendChild(el);
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 15000);
  }

  origFetch('/__media?folder=public/images&page=1&pageSize=1')
    .then(function (r) {
      apiReady = !!r.ok;
      if (!apiReady) {
        hint('媒体库轻量模式未生效：/__media 返回 ' + r.status + '。请重启 npm run dev（改过 astro.config.mjs）后硬刷新。');
      } else {
        console.log(TAG, '接口就绪，媒体库将按分页加载');
      }
    })
    .catch(function () {
      apiReady = false;
      hint('媒体库轻量模式未生效：无法连接 /__media。请重启 npm run dev 后硬刷新。');
    });

  function bodyOf(input, init) {
    if (init && init.body) return init.body;
    if (input && typeof input === 'object' && input.body) return input.body;
    if (typeof input === 'string' && input.indexOf('{') >= 0) return null;
    return null;
  }

  function isGetMediaRpc(input, init) {
    try {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      if (!/localhost:8081|127\.0\.0\.1:8081/.test(url)) return null;
      var method = (init && init.method) || (input && input.method) || 'POST';
      if (String(method).toUpperCase() !== 'POST') return null;
      var body = bodyOf(input, init);
      if (!body || typeof body !== 'string') return null;
      var json = JSON.parse(body);
      if (!json || json.action !== 'getMedia' || !json.params) return null;
      return json.params.mediaFolder || 'public/images';
    } catch (e) {
      return null;
    }
  }

  // public/ 下的文件在 dev 服务器上的可直接访问路径
  //   public/images/cases/a.jpg  ->  /images/cases/a.jpg
  // 用它作为 displayURL：原图原尺寸直出（不压缩、不转换），而且不用再发一次请求去取内容。
  function publicUrl(p) {
    var rel = String(p || '').replace(/\\/g, '/').replace(/^public\//, '');
    if (!rel) return '';
    if (rel.charAt(0) !== '/') rel = '/' + rel;
    return rel
      .split('/')
      .map(function (seg) {
        return seg ? encodeURIComponent(seg) : seg;
      })
      .join('/');
  }

  // 用轻量接口取一页
  function fetchPage(folder, s) {
    var qs =
      '/__media?folder=' +
      encodeURIComponent(folder) +
      '&sub=' +
      encodeURIComponent(s.sub || '') +
      '&q=' +
      encodeURIComponent(s.q || '') +
      '&sort=' +
      encodeURIComponent(s.sort || 'time-desc') +
      '&page=' +
      s.page +
      '&pageSize=' +
      s.pageSize;
    return origFetch(qs)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        s.total = data.total || 0;
        s.totalPages = data.totalPages || 1;
        s.subfolders = data.subfolders || [];
        if (s.page > s.totalPages) s.page = s.totalPages;
        updateBar(folder);
        // 挂好「真实路径队列」给 createObjectURL 垫片用（顺序必须与 items 一致，
        // 因为 decap 的 .map(mz) 会按顺序对每个空 blob 调一次 createObjectURL）
        blobUrlQueue = (data.items || []).map(function (it) {
          return publicUrl(it.path);
        });
        // Decap 期望的形状。
        // ⚠️ displayURL 必须是【非空字符串】：
        //    decap 的 loadMediaDisplayURL(file) 第一行就是守卫
        //      const {displayURL, id} = file;
        //      if (!id || !displayURL || ...) return;   // 直接放弃加载
        //    之前只返回 id/name/path/size，导致缩略图永远为空（只剩文件名 + 文件图标）。
        //    这里直接给出 dev 服务器上的真实路径，Decap 会走 `typeof displayURL === 'string'`
        //    的即时分支，连额外的单文件请求都不用发，秒出图。
        return new Response(
          JSON.stringify(
            (data.items || []).map(function (it) {
              var url = publicUrl(it.path);
              return {
                id: it.path,
                name: it.name,
                path: it.path,
                size: it.size,
                url: url,
                displayURL: url
              };
            })
          ),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      });
  }

  window.fetch = function (input, init) {
    var folder = apiReady === true ? isGetMediaRpc(input, init) : null;
    if (folder) {
      currentFolder = folder; // 记住当前集合的媒体目录，供工具条使用
      return fetchPage(folder, st(folder)).catch(function (e) {
        console.warn(TAG, '轻量列表失败，回退原生：', e && e.message);
        return origFetch(input, init);
      });
    }
    return origFetch(input, init);
  };

  // ── 让 Decap 重新拉一次列表 ──
  // 从 React fiber 上找带 loadMedia 的媒体库组件（与 media-sort-ui.js 同一套路）
  function reload() {
    var root = document.getElementById('nc-root') || document.body;
    var found = null;
    function walkFiber(fiber, depth) {
      if (!fiber || found || depth > 60) return;
      var p = fiber.memoizedProps;
      if (p && typeof p.loadMedia === 'function' && typeof p.closeMediaLibrary === 'function') {
        found = p;
        return;
      }
      walkFiber(fiber.child, depth + 1);
      walkFiber(fiber.sibling, depth + 1);
    }
    var keys = Object.keys(root);
    var fk = keys.filter(function (k) {
      return k.indexOf('__reactContainer') === 0 || k.indexOf('__reactFiber') === 0;
    })[0];
    if (fk) walkFiber(root[fk], 0);
    if (!found) {
      var modal = document.querySelector('[role="dialog"], .Pane, div[class*="Modal"]');
      if (modal) {
        var mk = Object.keys(modal).filter(function (k) {
          return k.indexOf('__reactFiber') === 0 || k.indexOf('__reactInternalInstance') === 0;
        })[0];
        if (mk) walkFiber(modal[mk], 0);
      }
    }
    if (found) {
      try {
        found.loadMedia({ privateUpload: !!found.privateUpload });
        return true;
      } catch (e) {
        console.warn(TAG, '重新加载失败：', e);
      }
    }
    return false;
  }
  window.__cmsReloadMedia = reload;

  // ── 注入工具条 ──
  var currentFolder = null;

  function mkSelect(options, value, onChange, maxWidth) {
    var sel = document.createElement('select');
    sel.style.cssText =
      'font-size:12px;padding:4px 8px;border:1px solid #cbd5e1;border-radius:4px;background:#fff;color:#1f2937;cursor:pointer;outline:none;' +
      (maxWidth ? 'max-width:' + maxWidth + 'px;' : '');
    options.forEach(function (o) {
      var op = document.createElement('option');
      op.value = o.v;
      op.textContent = o.t;
      sel.appendChild(op);
    });
    sel.value = value;
    sel.addEventListener('change', function () {
      onChange(sel.value);
    });
    return sel;
  }

  function mkButton(text, onClick, disabled) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = text;
    b.disabled = !!disabled;
    b.style.cssText =
      'font-size:12px;padding:4px 9px;border:1px solid #cbd5e1;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;';
    if (!disabled) {
      b.addEventListener('click', onClick);
    } else {
      b.style.opacity = '0.45';
      b.style.cursor = 'not-allowed';
    }
    return b;
  }

  function buildBar() {
    var bar = document.createElement('div');
    bar.id = BTN_ID;
    // 完整宽度的一行，作为 LibraryTop 区域的最后一个子元素（见 inject 的说明）
    bar.style.cssText =
      'display:flex;align-items:center;gap:10px;flex-wrap:wrap;width:100%;box-sizing:border-box;' +
      'padding:6px 14px 8px;margin:0;font-size:12px;color:#64748b;';
    return bar;
  }

  var lastSig = '';
  function updateBar(folder) {
    var bar = document.getElementById(BTN_ID);
    if (!bar || !currentFolder || (folder && folder !== currentFolder)) return;
    var s = st(currentFolder);
    var totalPages = s.totalPages || 1;
    // 内容没变就别重建，避免每 1.5s 的轮询打断正在操作的下拉
    var sig = [currentFolder, s.sub, s.q, s.sort, s.page, s.total, totalPages, s.pageSize].join('|');
    if (sig === lastSig) return;
    lastSig = sig;
    bar.innerHTML = '';

    // 排序（真正的后端排序，翻页顺序也稳定）
    var lab = document.createElement('span');
    lab.textContent = '排序';
    lab.style.cssText = 'color:#64748b;white-space:nowrap;';
    bar.appendChild(lab);
    bar.appendChild(
      mkSelect(
        SORT_OPTIONS.map(function (o) {
          return { v: o.key, t: o.label };
        }),
        s.sort,
        function (v) {
          localStorage.setItem(SORT_KEY, v);
          Object.keys(state).forEach(function (k) {
            state[k].sort = v;
            state[k].page = 1;
          });
          reload();
        },
        170
      )
    );

    // 说明：不做任何筛选，媒体库默认就是「该集合媒体目录下的全部文件」，这里只分页
    var tip = document.createElement('span');
    tip.textContent = '共 ' + s.total + ' 个（未筛选）';
    tip.style.cssText = 'color:#94a3b8;white-space:nowrap;';
    bar.appendChild(tip);

    var sep = document.createElement('span');
    sep.style.cssText = 'flex:1 1 auto;';
    bar.appendChild(sep);

    // 分页
    bar.appendChild(document.createTextNode('第 ' + s.page + '/' + totalPages + ' 页'));
    bar.appendChild(
      mkButton(
        '上一页',
        function () {
          if (s.page > 1) {
            s.page--;
            reload();
          }
        },
        s.page <= 1
      )
    );
    bar.appendChild(
      mkButton(
        '下一页',
        function () {
          if (s.page < totalPages) {
            s.page++;
            reload();
          }
        },
        s.page >= totalPages
      )
    );
    bar.appendChild(
      mkSelect(
        [
          { v: '12', t: '12/页' },
          { v: '24', t: '24/页' },
          { v: '48', t: '48/页' },
          { v: '96', t: '96/页' }
        ],
        String(s.pageSize),
        function (v) {
          s.pageSize = parseInt(v, 10);
          s.page = 1;
          reload();
        }
      )
    );
  }

  // 找到媒体库顶部区域（同时含搜索框和上传按钮的祖先，即 LibraryTop），
  // 工具条【append 到它内部末尾】。
  // ⚠️ 千万不能作为 modal 的直接子元素插在 LibraryTop 和网格之间：
  //    实测（playwright 量过）CardGridContainer 会被挤成 高度=0，
  //    react-window 量到 0 高度就一张卡都不渲染 → 网格整片空白。
  //    塞进 LibraryTop 内部则不改变兄弟结构，网格高度自动让出工具条那一行。
  function findAnchor(searchInput) {
    var el = searchInput;
    for (var i = 0; i < 10 && el.parentElement; i++) {
      el = el.parentElement;
      var txt = el.textContent || '';
      if (/上传|Upload|Hochladen|插入|Insert|取消|Cancel/i.test(txt)) return el;
    }
    return searchInput.parentElement;
  }

  function inject() {
    if (document.getElementById(BTN_ID)) {
      updateBar();
      return;
    }
    var inputs = document.querySelectorAll('input');
    var searchInput = null;
    for (var i = 0; i < inputs.length; i++) {
      var ph = inputs[i].getAttribute('placeholder') || '';
      if (/搜索|Search|Suchen/i.test(ph)) {
        searchInput = inputs[i];
        break;
      }
    }
    if (!searchInput) return;

    var host = findAnchor(searchInput);
    if (!host) return;

    var bar = buildBar();
    host.appendChild(bar);
    console.log(TAG, '已注入「排序 + 分页」工具条');
    updateBar();
  }

  if (window.MutationObserver) {
    var pending = false;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () {
        pending = false;
        inject();
      }, 150);
    }).observe(document.body, { childList: true, subtree: true });
  }
  setInterval(inject, 1500);
  inject();

  console.log(TAG, '已启用轻量媒体列表（仅分页，不做筛选）；关闭方式：localStorage.setItem("cms-media-lite","off")');
})();
