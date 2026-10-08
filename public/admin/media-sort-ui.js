// 媒体库「排序」按钮
// ------------------------------------------------------------
// 背景：Decap 媒体库原生没有排序 UI，也不支持 sortable_fields（那是集合级配置）。
// 这里在媒体库弹窗的搜索框旁注入一个排序下拉，支持：
//   · 上传时间（新→旧）  默认
//   · 上传时间（旧→新）
//   · 文件名（A→Z）
//   · 文件名（Z→A）
//
// 实现要点：
//   1. 排序状态存在 localStorage，fetch 拦截器（media-sort.js）读取它决定返回顺序；
//   2. 切换排序后需要让 Decap 重新拉一次媒体列表 —— 通过 React fiber 找到媒体库组件实例，
//      调用它的 loadMedia()（Decap 内部标准方法），不修改 vendor 文件；
//   3. 因为弹窗是 React 渲染的，按钮用 MutationObserver 幂等注入。
(function () {
  var STORAGE_KEY = 'cms-media-sort';
  var BTN_ID = 'cms-media-sort-btn';

  var OPTIONS = [
    { key: 'time-desc', label: '上传时间（新→旧）' },
    { key: 'time-asc', label: '上传时间（旧→新）' },
    { key: 'name-asc', label: '文件名（A→Z）' },
    { key: 'name-desc', label: '文件名（Z→A）' }
  ];

  function getMode() {
    var v = localStorage.getItem(STORAGE_KEY);
    return OPTIONS.some(function (o) { return o.key === v; }) ? v : 'time-desc';
  }

  function setMode(v) {
    localStorage.setItem(STORAGE_KEY, v);
    // 通知 media-sort.js 的拦截器换排序方式
    window.dispatchEvent(new CustomEvent('cms-media-sort-change', { detail: { mode: v } }));
  }

  // ── 让 Decap 重新拉取媒体列表 ──
  // 在 React fiber 树上找带 loadMedia 方法的组件（媒体库抽屉组件）
  function triggerReload() {
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

    // 找 React 挂载的根节点
    var keys = Object.keys(root);
    var fiberKey = keys.filter(function (k) { return k.indexOf('__reactContainer') === 0 || k.indexOf('__reactFiber') === 0; })[0];

    if (!fiberKey) {
      // 退一步：从弹窗 DOM 上找
      var modal = document.querySelector('[role="dialog"], .Pane, div[class*="Modal"]');
      if (modal) {
        var mk = Object.keys(modal).filter(function (k) { return k.indexOf('__reactFiber') === 0 || k.indexOf('__reactInternalInstance') === 0; })[0];
        if (mk) walkFiber(modal[mk], 0);
      }
    } else {
      walkFiber(root[fiberKey], 0);
    }

    if (found) {
      try {
        found.loadMedia({ privateUpload: !!found.privateUpload });
        console.log('[media-sort] 已按新排序重新加载媒体列表');
        return true;
      } catch (e) {
        console.warn('[media-sort] 重新加载失败：', e);
      }
    }
    console.warn('[media-sort] 未找到媒体库组件，排序将在下次打开媒体库时生效');
    return false;
  }

  // ── 注入按钮 ──
  function inject() {
    // 精确定位：媒体库搜索框的 placeholder 来自 mediaLibrary.mediaLibraryModal.search
    var all = document.querySelectorAll('input');
    var searchInput = null;
    for (var i = 0; i < all.length; i++) {
      var ph = all[i].getAttribute('placeholder') || '';
      if (/搜索|Search|Suchen/i.test(ph)) {
        searchInput = all[i];
        break;
      }
    }
    if (!searchInput) return;
    if (document.getElementById(BTN_ID)) return;

    var row = searchInput.parentElement;
    if (!row) return;

    var wrap = document.createElement('div');
    wrap.id = BTN_ID;
    wrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin-left:10px;flex-shrink:0;';

    var label = document.createElement('span');
    label.textContent = '排序';
    label.style.cssText = 'font-size:12px;color:#64748b;white-space:nowrap;';
    wrap.appendChild(label);

    var sel = document.createElement('select');
    sel.style.cssText = 'font-size:12px;padding:4px 8px;border:1px solid #cbd5e1;border-radius:4px;background:#fff;color:#1f2937;cursor:pointer;outline:none;';
    OPTIONS.forEach(function (o) {
      var op = document.createElement('option');
      op.value = o.key;
      op.textContent = o.label;
      sel.appendChild(op);
    });
    sel.value = getMode();
    sel.addEventListener('change', function () {
      setMode(sel.value);
      triggerReload();
    });

    wrap.appendChild(sel);
    row.appendChild(wrap);
    console.log('[media-sort] 排序按钮已注入');
  }

  if (window.MutationObserver) {
    var mo = new MutationObserver(function () { inject(); });
    mo.observe(document.body, { childList: true, subtree: true });
  }
  setInterval(inject, 1200);
  inject();
})();
