/**
 * 方案库「一级分类 / 二级分类」下拉候选（后台增强）
 * ------------------------------------------------------------
 * 问题：英文方案库的分类是自由填写的输入框，好处是能随时新增分类，坏处是每次都要手打，
 *       容易写成 "Edge Device" / "Edge Devices" 两个节点。
 *
 * 做法：把站上**已经存在**的分类做成输入框的原生下拉候选（<datalist>）：
 *   · 点击输入框右侧箭头 → 列出已有分类，选一个即可
 *   · 也可以直接输入新名字 → 新分类照旧生效（不会被下拉限制住）
 *   · 二级分类的候选会跟随当前填的一级分类自动收窄
 *   · 中文视图的「二级分类」同样是输入框，也会一并获得候选
 *
 * 候选数据来自构建产物 /<lang>/plan-cats.json（见 src/pages/[lang]/plan-cats.json.ts），
 * 所以后台里新增的分类，下次部署后就会自动出现在下拉里。取不到时用内置的四个基础分类兜底。
 */
(function () {
  var LABEL_CAT = /^一级分类/;
  var LABEL_SUB = /^二级分类/;

  var lang = (function () {
    try {
      var l = localStorage.getItem('cms-lang');
      return l === 'en' || l === 'de' || l === 'zh' ? l : 'zh';
    } catch (e) {
      return 'zh';
    }
  })();

  var FALLBACK = {
    en: [
      { value: 'Smart Manufacturing', subcategories: [] },
      { value: 'Power & Energy', subcategories: [] },
      { value: 'Machine Vision & Meter Reading', subcategories: [] },
      { value: 'Others', subcategories: [] }
    ],
    zh: [
      { value: '智能制造', subcategories: [] },
      { value: '电力与能源', subcategories: [] },
      { value: '机器视觉与仪表识别', subcategories: [] },
      { value: '其他', subcategories: [] }
    ],
    de: [{ value: 'Others', subcategories: [] }]
  };

  var catalog = { categories: FALLBACK[lang] || FALLBACK.zh };

  // ── datalist 容器（只建一次，React 重渲染也不会丢） ──
  function ensureList(id) {
    var el = document.getElementById(id);
    if (!el || el.tagName !== 'DATALIST') {
      el = document.createElement('datalist');
      el.id = id;
      document.body.appendChild(el);
    }
    return el;
  }

  var catList = ensureList('pcc-cat-list');
  var subList = ensureList('pcc-sub-list');

  function fill(list, values) {
    var sig = values.join('\u0001');
    if (list.getAttribute('data-sig') === sig) return;
    list.setAttribute('data-sig', sig);
    while (list.firstChild) list.removeChild(list.firstChild);
    values.forEach(function (v) {
      var o = document.createElement('option');
      o.value = v;
      list.appendChild(o);
    });
  }

  function pushUnique(arr, v) {
    if (v && arr.indexOf(v) < 0) arr.push(v);
  }

  // ── 找到某个标签对应的文本输入框（下拉框直接跳过，中文视图的一级分类是 select） ──
  function findInput(re) {
    var labels = document.querySelectorAll('label');
    for (var i = 0; i < labels.length; i++) {
      var txt = (labels[i].textContent || '').replace(/\s+/g, '');
      if (!re.test(txt)) continue;
      var id = labels[i].getAttribute('for');
      var el = id ? document.getElementById(id) : null;
      if (!el && labels[i].parentElement) {
        el = labels[i].parentElement.querySelector('input, select');
      }
      if (!el) continue;
      if (el.tagName === 'INPUT' && (el.type === 'text' || !el.type || el.type === 'search')) return el;
    }
    return null;
  }

  var catInput = null;
  var subInput = null;

  function rebuildSub() {
    var cur = catInput && catInput.value ? catInput.value.trim() : '';
    var vals = [];
    var scope = catalog.categories.filter(function (c) {
      return !cur || c.value === cur;
    });
    (scope.length ? scope : catalog.categories).forEach(function (c) {
      (c.subcategories || []).forEach(function (s) {
        pushUnique(vals, s.value);
      });
    });
    fill(subList, vals);
  }

  function sync() {
    fill(
      catList,
      catalog.categories.map(function (c) {
        return c.value;
      })
    );

    var c = findInput(LABEL_CAT);
    if (c !== catInput) catInput = c;
    if (catInput) catInput.setAttribute('list', 'pcc-cat-list');

    var s = findInput(LABEL_SUB);
    if (s !== subInput) subInput = s;
    if (subInput) subInput.setAttribute('list', 'pcc-sub-list');

    rebuildSub();
  }

  // 一级分类改动 → 二级候选跟着收窄（捕获阶段，React 的合成事件不影响）
  document.addEventListener(
    'input',
    function (e) {
      if (catInput && e.target === catInput) rebuildSub();
    },
    true
  );
  document.addEventListener(
    'change',
    function (e) {
      if (catInput && e.target === catInput) rebuildSub();
    },
    true
  );

  // ── DOM 变化（切集合 / 进编辑页 / 语言切换）后重新挂载 ──
  var timer = null;
  var mo = new MutationObserver(function () {
    if (timer) return;
    timer = setTimeout(function () {
      timer = null;
      try {
        sync();
      } catch (e) {
        /* ignore */
      }
    }, 260);
  });
  mo.observe(document.body, { childList: true, subtree: true });

  // ── 拉取站上已有的分类（取不到就用兜底列表，不影响手动输入） ──
  try {
    var url = new URL('../' + lang + '/plan-cats.json', location.href).href;
    fetch(url, { cache: 'no-store' })
      .then(function (r) {
        return r && r.ok ? r.json() : null;
      })
      .then(function (data) {
        if (data && Array.isArray(data.categories) && data.categories.length) {
          catalog = data;
          sync();
          console.log('[plan-cat] 已载入分类候选：' + data.categories.length + ' 个一级分类');
        }
      })
      .catch(function () {
        /* 静默：后台仍可自由输入 */
      });
  } catch (e) {
    /* ignore */
  }

  sync();
})();
