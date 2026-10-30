/**
 * 后台列表模糊搜索（list-search.js）v3
 *
 * 需求：集合列表页搜索框，输入关键词直接【过滤下方列表】，只显示匹配的条目。
 *
 * 与 v2 的区别：
 *   1. 不再用浮层弹结果 —— 直接隐藏下方列表不匹配的行（React 重渲染后由 tick 自动重新套用）。
 *   2. 锚点改为类名选择 [class*="CollectionControlsContainer"]（emotion 类名内嵌组件名，稳定）。
 *      v2 用「排序按钮向上爬父级」的方式，在没有「筛选/分组」的集合页（如项目案例）
 *      会回退到排序按钮的父级，把搜索框插进排序下拉里把排序撑开 —— 已废弃。
 *   3. 搜索框作为工具条容器的兄弟节点插在其后，右缘与工具条/白色卡片对齐
 *      （动态 marginRight = 父容器右缘 - 工具条右缘），不再悬在页面最右侧。
 *
 * 数据不需要后端请求：直接匹配列表行可见文本（标题/摘要），所见即所搜。
 */
(function () {
  'use strict';

  var STYLE_ID = 'nc-list-search-style';
  var BOX_ID = 'nc-list-search-box';
  var INPUT_ID = 'nc-list-search-input';
  var COUNT_ID = 'nc-list-search-count';

  /* ───────────────────────── 样式（注入一次） ───────────────────────── */
  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = [
      /* 独立一行跟在工具条后，右缘与工具条对齐（marginRight 由 JS 动态校正） */
      '#' + BOX_ID + '{width:300px;max-width:100%;margin:10px 0 6px auto;}',
      '#' + INPUT_ID + '{width:100%;box-sizing:border-box;height:34px;padding:0 30px;',
      '  border:1px solid #d7dbe0;border-radius:8px;font-size:13px;background:#fff;color:#1f2328;outline:none;}',
      '#' + INPUT_ID + ':focus{border-color:#378add;box-shadow:0 0 0 2px rgba(55,138,221,.15);}',
      '#' + BOX_ID + ' .nc-ls-icon{position:absolute;left:10px;top:17px;transform:translateY(-50%);',
      '  width:15px;height:15px;pointer-events:none;opacity:.45;z-index:1;}',
      '#' + BOX_ID + ' .nc-ls-clear{position:absolute;right:6px;top:17px;transform:translateY(-50%);',
      '  border:none;background:none;cursor:pointer;font-size:15px;line-height:1;color:#888780;padding:4px;display:none;z-index:1;}',
      '#' + BOX_ID + ' .nc-ls-clear:hover{color:#2c2c2a;}',
      '#' + COUNT_ID + '{font-size:12px;color:#888780;text-align:right;padding:4px 2px 0;display:none;}',
      '#' + COUNT_ID + ' b{color:#2c6ecb;font-weight:600;}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* ───────────────────────── 锚点：工具条容器 ───────────────────────── */
  // emotion 生成的类名内嵌组件名（css-xxx-CollectionControlsContainer），直接按类名找最稳
  function findToolbar() {
    return document.querySelector('[class*="CollectionControlsContainer"]');
  }

  function isListView() {
    var h = location.hash || '';
    return /#\/collections\/[^/]+$/.test(h) || h === '' || h === '#/';
  }

  /* ───────────────────────── 列表行过滤 ───────────────────────── */
  // 列表（含网格视图）都是 ul.CardsGrid 下的直接子元素
  function findListRows() {
    var grid = document.querySelector('ul[class*="CardsGrid"], [class*="CardsGrid"]');
    if (!grid) return [];
    return Array.prototype.slice.call(grid.children);
  }

  var lastWords = [];
  var lastSig = '';

  function applyFilter(words) {
    lastWords = words;
    var rows = findListRows();
    // 幂等守卫：内容没变就不重写 DOM。
    // 否则 count.innerHTML 每次都会替换子节点 → 触发 MutationObserver → 再套一次过滤 → 死循环冻死页面。
    var fresh = rows.some(function (li) { return li.dataset.ncLsOrig === undefined; });
    var sig = words.join(' ') + '|' + rows.length;
    if (sig === lastSig && !fresh) return;
    lastSig = sig;

    var shown = 0;
    for (var i = 0; i < rows.length; i++) {
      var li = rows[i];
      if (li.dataset.ncLsOrig === undefined) li.dataset.ncLsOrig = li.style.display || '';
      var txt = (li.textContent || '').toLowerCase();
      var hit = words.every(function (w) { return txt.indexOf(w) !== -1; });
      li.style.display = hit ? (li.dataset.ncLsOrig || '') : 'none';
      if (hit) shown++;
    }
    var count = document.getElementById(COUNT_ID);
    if (count) {
      var html = shown
        ? '匹配 <b>' + shown + '</b> / ' + rows.length + ' 条'
        : '无匹配条目，换个关键词试试';
      if (count.style.display !== 'block') count.style.display = 'block';
      if (count.innerHTML !== html) count.innerHTML = html;
    }
  }

  function clearFilter() {
    lastWords = [];
    lastSig = '';
    findListRows().forEach(function (li) {
      if (li.dataset.ncLsOrig !== undefined) {
        li.style.display = li.dataset.ncLsOrig || '';
        delete li.dataset.ncLsOrig;
      }
    });
    var count = document.getElementById(COUNT_ID);
    if (count) count.style.display = 'none';
  }

  /* ───────────────────────── 搜索框 ───────────────────────── */
  var lastCollName = '';

  // 让搜索框右缘与工具条右缘对齐（工具条容器不是通栏，父容器才是）
  function alignBox() {
    var box = document.getElementById(BOX_ID);
    var bar = findToolbar();
    if (!box || !bar) return;
    var pr = box.parentElement.getBoundingClientRect();
    var br = bar.getBoundingClientRect();
    var mr = Math.max(0, Math.round(pr.right - br.right));
    if (Math.abs((parseInt(box.style.marginRight, 10) || 0) - mr) > 1) {
      box.style.marginRight = mr + 'px';
    }
  }

  function ensureBox() {
    if (!isListView()) { removeBox(); return; }
    var bar = findToolbar();
    if (!bar || !bar.parentElement) return;

    // 集合切换：清空输入与过滤
    var m = (location.hash || '').match(/#\/collections\/([^/?#]+)/);
    var collName = m ? decodeURIComponent(m[1]) : '';
    if (collName !== lastCollName) {
      lastCollName = collName;
      var input0 = document.getElementById(INPUT_ID);
      if (input0 && input0.value) {
        input0.value = '';
        clearFilter();
        var clr0 = document.querySelector('#' + BOX_ID + ' .nc-ls-clear');
        if (clr0) clr0.style.display = 'none';
      }
    }

    var box = document.getElementById(BOX_ID);
    if (box) {
      // React 重渲染可能挪走外来节点，确保仍紧跟在工具条之后
      if (box.previousElementSibling !== bar || box.parentElement !== bar.parentElement) {
        bar.parentElement.insertBefore(box, bar.nextSibling);
      }
      // 过滤中被 React 重渲染冲掉时自动补套
      if (lastWords.length) applyFilter(lastWords);
      alignBox();
      return;
    }

    injectStyle();
    box = document.createElement('div');
    box.id = BOX_ID;
    box.innerHTML =
      '<svg class="nc-ls-icon" viewBox="0 0 16 16" fill="none" stroke="#444441" stroke-width="1.5">' +
      '<circle cx="7" cy="7" r="4.6"/><path d="M10.5 10.5L14 14" stroke-linecap="round"/></svg>' +
      '<input id="' + INPUT_ID + '" type="text" placeholder="输入关键词，过滤下方列表…" ' +
      'autocomplete="off" spellcheck="false"/>' +
      '<button class="nc-ls-clear" title="清除过滤" tabindex="-1">✕</button>' +
      '<div id="' + COUNT_ID + '"></div>';
    bar.parentElement.insertBefore(box, bar.nextSibling);
    alignBox();

    var input = box.querySelector('#' + INPUT_ID);
    var clear = box.querySelector('.nc-ls-clear');
    var timer = null;

    input.addEventListener('input', function () {
      clear.style.display = input.value ? 'block' : 'none';
      clearTimeout(timer);
      timer = setTimeout(function () {
        var words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (words.length) applyFilter(words); else clearFilter();
      }, 200);
    });
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        input.value = '';
        clear.style.display = 'none';
        clearFilter();
        input.blur();
      }
    });
    clear.addEventListener('click', function () {
      input.value = '';
      clear.style.display = 'none';
      clearFilter();
      input.focus();
    });
  }

  function removeBox() {
    clearFilter();
    var box = document.getElementById(BOX_ID);
    if (box) box.remove();
    lastCollName = '';
  }

  /* ───────────────────────── 启动与持续维护 ───────────────────────── */
  // 节流：Decap 列表频繁重渲染，MutationObserver 会密集触发，
  // 加上 applyFilter 自身的幂等守卫，避免任何回环把页面拖死。
  var lastTick = 0;
  function tick() {
    var now = Date.now();
    if (now - lastTick < 300) return;
    lastTick = now;
    try { ensureBox(); } catch (e) { /* 静默：后台脚本不能打断 CMS */ }
  }

  injectStyle();
  if (window.MutationObserver) {
    new MutationObserver(tick).observe(document.body, { childList: true, subtree: true });
  }
  setInterval(tick, 1200);
  tick();
})();
