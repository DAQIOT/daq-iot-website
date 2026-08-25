// Decap CMS 动态初始化：按顶部语言下拉派生【产品】【产品分类】集合
// ------------------------------------------------------------
// config.yml 里 products / categories 是单一模板定义（i18n 模式）。
// 这里在 CMS 初始化前，按当前选择的语言把这两个集合改写为
// 只管理对应语言的目录：
//   zh -> src/content/products/zh   + src/content/categories/zh
//   en -> src/content/products/en   + src/content/categories/en
//   de -> src/content/products/de   + src/content/categories/de
// 效果：后台侧边栏只有【产品】【产品分类】两个入口；
// 切换顶部语言并刷新后，整个后台内容切换为该语言，
// 添加/删除/编辑只影响当前语言，各语言内容完全独立。
(function () {
  var LANGS = ['zh', 'en', 'de'];
  var lang = localStorage.getItem('cms-lang');
  if (LANGS.indexOf(lang) < 0) lang = 'zh';

  // 切换语言刷新后，若 Decap 的 GitHub OAuth token 从 localStorage 丢失，
  // 从 sessionStorage 备份恢复，避免每次切语言都重新登录
  (function restoreAuthBackup() {
    try {
      var user = localStorage.getItem('decap-cms-user');
      var backup = sessionStorage.getItem('cms-lang-user-backup');
      if (!user && backup) {
        localStorage.setItem('decap-cms-user', backup);
      }
      sessionStorage.removeItem('cms-lang-user-backup');
    } catch (e) { /* ignore */ }
  })();

  var VIEW_FILTERS = {
    zh: [
      { label: '全部', field: 'category', pattern: '.*' },
      { label: '仪器仪表采集（含二级）', field: 'category', pattern: 'daq-meter.*' },
      { label: '电表采集', field: 'category', pattern: 'daq-meter-electric' },
      { label: '其他类仪表采集', field: 'category', pattern: 'daq-meter-other' },
      { label: '无线传感器（含二级）', field: 'category', pattern: 'daq-sensor.*' },
      { label: '电力类传感器', field: 'category', pattern: 'daq-sensor-power' },
      { label: '环境类传感器', field: 'category', pattern: 'daq-sensor-env' },
      { label: '定时抓拍', field: 'category', pattern: 'daq-camera' },
      { label: '采集终端', field: 'category', pattern: 'daq-gateway' },
      { label: '软件平台', field: 'category', pattern: 'daq-software' },
      { label: '安装施工', field: 'category', pattern: 'daq-install' }
    ],
    en: [
      { label: 'All', field: 'category', pattern: '.*' },
      { label: 'Instrumentation (incl. sub)', field: 'category', pattern: '^(instrumentation|instrument-acquisition)$' },
      { label: 'Instrument Acquisition', field: 'category', pattern: 'instrument-acquisition' },
      { label: 'Wireless Sensor', field: 'category', pattern: 'wirelesssensor' },
      { label: 'Wireless Timing Photography', field: 'category', pattern: 'wirelesstimingphotography' },
      { label: 'PLC Acquisition', field: 'category', pattern: 'plcacquisition' },
      { label: 'Data Acquisition Software', field: 'category', pattern: 'dataacquisitionsoftware' }
    ],
    de: [
      { label: 'Alle', field: 'category', pattern: '.*' },
      { label: 'Instrumentierung (inkl. Unterkategorie)', field: 'category', pattern: '^(instrumentierung|instrument-acquisition)$' },
      { label: 'Instrumentenerfassung', field: 'category', pattern: 'instrument-acquisition' },
      { label: 'Funksensoren', field: 'category', pattern: 'funksensoren' },
      { label: 'Drahtlose Intervallfotografie', field: 'category', pattern: 'drahtlose-intervallfotografie' },
      { label: 'PLC-Erfassung', field: 'category', pattern: 'plc-erfasssung' },
      { label: 'Datenerfassungssoftware', field: 'category', pattern: 'datenerfassungssoftware' }
    ]
  };

  // 复制模板集合并去掉 i18n 相关属性，锁定到指定语言的目录
  function derive(collection, folder, label) {
    var c = JSON.parse(JSON.stringify(collection));
    delete c.i18n;
    delete c.hide;
    c.folder = folder;
    c.label = label;
    (c.fields || []).forEach(function (f) {
      delete f.i18n;
      if (f.fields) f.fields.forEach(function (sf) { delete sf.i18n; });
    });
    return c;
  }

  // ============================================================
  // 分类列表树形折叠：点击父类（折叠箭头）展开/收起其二级分类
  // Decap 原生列表是扁平的（每个分类都是独立条目），
  // 这里不动 React 管理的 DOM 节点，只用 CSS order 把二级项排在父级下方，
  // 并用 JS 折叠显示，避免 React 重渲染时节点重复/丢失。
  // ============================================================
  function maybeTreeify() {
    // 仅在「产品分类」集合列表页生效
    if (location.hash.indexOf('collections/categories') < 0) return;
    var ul = document.querySelector('main ul');
    if (!ul) return;

    // 让 ul 支持 CSS order 重排（不移动 DOM 节点）
    ul.classList.add('tree-root');

    var lis = Array.prototype.slice.call(ul.children).filter(function (c) {
      return c.tagName === 'LI' && c.querySelector('h2');
    });
    if (lis.length < 2) return;

    // 先还原上一轮样式/按钮
    Array.prototype.slice.call(ul.querySelectorAll('.tree-toggle')).forEach(function (t) { t.remove(); });
    lis.forEach(function (li) {
      li.classList.remove('tree-parent', 'tree-child');
      li.style.order = '';
    });

    // 解析一级 / 二级（二级 path 形如「父级 / 子级」）
    var parents = {}, childrenMap = {};
    lis.forEach(function (li) {
      var h = li.querySelector('h2');
      var t = h ? h.textContent.trim() : '';
      var i = t.indexOf(' / ');
      if (i >= 0) {
        var p = t.slice(0, i);
        (childrenMap[p] = childrenMap[p] || []).push(li);
      } else {
        parents[t] = li;
      }
    });

    var order = 100;
    Object.keys(parents).forEach(function (p) {
      var pli = parents[p];
      pli.style.order = order;
      pli.classList.add('tree-parent');

      var children = childrenMap[p] || [];
      children.forEach(function (cli, idx) {
        cli.style.order = order + idx + 1;
        cli.classList.add('tree-child');
      });

      if (children.length > 0) {
        var tog = document.createElement('button');
        tog.type = 'button';
        tog.className = 'tree-toggle';
        tog.textContent = '▾'; // 默认展开
        tog.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var open = children[0].style.display !== 'none';
          children.forEach(function (cli) { cli.style.display = open ? 'none' : ''; });
          tog.textContent = open ? '▸' : '▾';
        });
        pli.insertBefore(tog, pli.firstChild);
      }

      order += 100;
    });
  }

  // 注入树形样式（ul 用 flex column 让 order 生效；箭头；子级缩进）
  (function () {
    var st = document.createElement('style');
    st.textContent =
      '.tree-root{display:flex !important;flex-direction:column !important;}' +
      '.tree-parent{position:relative;padding-left:4px !important;}' +
      '.tree-parent h2{padding-left:34px !important;margin-left:0 !important;}' +
      '.tree-toggle{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:18px;height:18px;line-height:15px;text-align:center;border:1px solid #cbd5e1;background:#f1f5f9;cursor:pointer;border-radius:3px;z-index:3;font-size:12px;padding:0;}' +
      '.tree-toggle:hover{background:#e2e8f0;}' +
      '.tree-child{margin-left:40px !important;padding-left:14px !important;border-left:2px solid #cbd5e1;background:#f8fafc;}' +
      '.tree-child h2{font-weight:400;}';
    document.head.appendChild(st);
  })();

  // 监听 DOM 变化后重新树形化（disconnect 期间操作，避免自身触发递归）
  var _tw = new MutationObserver(function () {
    _tw.disconnect();
    try { maybeTreeify(); } catch (e) { console.error('[treeify]', e); }
    _tw.observe(document.body, { childList: true, subtree: true });
  });
  _tw.observe(document.body, { childList: true, subtree: true });
  setTimeout(maybeTreeify, 400);
  setTimeout(maybeTreeify, 1200);

  fetch('config.yml?v=5')
    .then(function (r) { return r.text(); })
    .then(function (text) {
      var config = jsyaml.load(text);
      // 固定 site_id，避免 Decap 把不同语言配置当成不同站点而丢失 OAuth 登录态
      config.backend = config.backend || {};
      config.backend.site_id = config.backend.site_id || 'daq-iot-website';
      var rest = [];
      var productsTpl = null;
      var categoriesTpl = null;
      (config.collections || []).forEach(function (c) {
        if (c.name === 'products') { productsTpl = c; return; }
        if (c.name === 'categories') { categoriesTpl = c; return; }
        rest.push(c);
      });
      if (!productsTpl || !categoriesTpl) {
        console.error('[init-cms] config.yml 缺少 products/categories 模板，回退默认初始化');
        window.CMS.init();
        return;
      }

      var products = derive(productsTpl, 'src/content/products/' + lang, '产品');
      products.view_filters = VIEW_FILTERS[lang];

      var categories = derive(categoriesTpl, 'src/content/categories/' + lang, '产品分类');
      // 新建分类时自动写入当前语言标识
      (categories.fields || []).forEach(function (f) {
        if (f.name === 'lang') f.default = lang;
      });

      config.collections = [products, categories].concat(rest);

      // 本地预览：走 decap-server 本地代理（localhost:8081），无需 GitHub OAuth
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        config.local_backend = true;
      }

      // load_config_file:false 必须放在 config 对象内部！
      // CMS.init 只解构 options.config 传给 loadConfig；
      // 若不关闭，Decap 会再 fetch config.yml 并与传入对象做数组合并，
      // 导致 i18n.locales / collections 重复而校验失败
      config.load_config_file = false;
      window.CMS.init({ config: config });
      console.log('[init-cms] 已按语言初始化后台：' + lang);
    })
    .catch(function (e) {
      console.error('[init-cms] 初始化失败，回退默认初始化：', e);
      window.CMS.init();
    });
})();
