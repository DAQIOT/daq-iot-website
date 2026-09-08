// Decap CMS 动态初始化：按顶部语言下拉派生【全部 12 个集合】
// ------------------------------------------------------------
// 阶段一：语言切换彻底化
//   i18n:true 集合（products/categories/cases/downloads/posts）：
//     folder 改为 src/content/{collection}/{lang}，只显示当前语言
//   i18n:false 集合（site/solutions/services/partners/support/about/contact）：
//     转为 file collection，只指向 {lang}-settings.md 或 {lang}-index.md
//
// 阶段二：侧边栏分组
//   集合按"内容管理"和"页面文案"两组用分隔线分开
//
// 效果：切换顶部语言并刷新后，整个后台所有集合只显示当前语言内容。
// 侧边栏按逻辑分组，不再是一堆平铺列表。
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

  // 分类名称映射（slug -> 显示名称），用于产品列表分组标题替换
  var CATEGORY_MAP = {
    zh: {
      'daq-meter': '仪器仪表采集',
      'daq-meter-electric': '仪器仪表采集 / 电表采集',
      'daq-meter-other': '仪器仪表采集 / 其他类仪表采集',
      'daq-sensor': '无线传感器',
      'daq-sensor-env': '无线传感器 / 环境类传感器',
      'daq-sensor-power': '无线传感器 / 电力类传感器',
      'daq-camera': '定时抓拍',
      'daq-gateway': '采集终端',
      'daq-software': '软件平台',
      'daq-install': '安装施工'
    },
    en: {
      'instrumentation': 'Instrumentation',
      'instrument-acquisition': 'Instrumentation / Instrument Acquisition',
      'wirelesssensor': 'Wireless Sensor',
      'wirelesstimingphotography': 'Wireless Timing Photography',
      'plcacquisition': 'PLC Acquisition',
      'dataacquisitionsoftware': 'Data Acquisition Software'
    },
    de: {
      'instrumentation': 'Instrumentierung',
      'instrument-acquisition': 'Instrumentierung / Instrumentenerfassung',
      'wirelesssensor': 'Funksensoren',
      'wirelesstimingphotography': 'Drahtlose Intervallfotografie',
      'plcacquisition': 'PLC-Erfassung',
      'dataacquisitionsoftware': 'Datenerfassungssoftware'
    }
  };
  var CAT_NAMES = CATEGORY_MAP[lang] || {};
  var CAT_ORDER = Object.keys(CAT_NAMES);

  // 文案集合（i18n:false）的文件后缀映射
  // site -> zh-settings.md, solutions -> zh-index.md, etc.
  var FILE_SUFFIX = {
    site: 'settings',
    solutions: 'index',
    services: 'index',
    partners: 'index',
    support: 'index',
    about: 'index',
    contact: 'index'
  };

  // 集合 label 映射
  var LABEL_MAP = {
    products: '产品',
    categories: '产品分类',
    cases: '项目案例',
    downloads: '下载中心',
    posts: '博客文章',
    site: '网站基础文案',
    solutions: '解决方案',
    services: '服务与支持',
    partners: '合作伙伴',
    support: '技术支持',
    about: '关于我们',
    contact: '联系我们'
  };

  // i18n:true 集合列表（folder 派生）
  var I18N_COLLECTIONS = ['products', 'categories', 'cases', 'downloads', 'posts'];
  // i18n:false 集合列表（file 派生）
  var SINGLE_FILE_COLLECTIONS = ['site', 'solutions', 'services', 'partners', 'support', 'about', 'contact'];

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

  // 将 folder 集合转为 file 集合，只指向当前语言的那一个文件
  // 用于 i18n:false 的文案集合，让后台只显示当前语言的文件
  function deriveSingleFile(collection, lang, label, fileSuffix) {
    var c = JSON.parse(JSON.stringify(collection));
    delete c.i18n;
    delete c.hide;
    delete c.folder;
    delete c.identifier_field;
    delete c.create;
    c.label = label;
    var fileName = lang + '-' + fileSuffix + '.md';
    c.files = [{
      name: lang + '-' + fileSuffix,
      label: label,
      file: 'src/content/' + c.name + '/' + fileName,
      fields: c.fields
    }];
    (c.fields || []).forEach(function (f) {
      delete f.i18n;
      if (f.fields) f.fields.forEach(function (sf) { delete sf.i18n; });
    });
    return c;
  }

  // ============================================================
  // 分类列表树形折叠：点击父类（折叠箭头）展开/收起其二级分类
  // ============================================================
  function maybeTreeify() {
    if (location.hash.indexOf('collections/categories') < 0) return;
    var ul = document.querySelector('main ul');
    if (!ul) return;

    ul.classList.add('tree-root');

    var lis = Array.prototype.slice.call(ul.children).filter(function (c) {
      return c.tagName === 'LI' && c.querySelector('h2');
    });
    if (lis.length < 2) return;

    Array.prototype.slice.call(ul.querySelectorAll('.tree-toggle')).forEach(function (t) { t.remove(); });
    lis.forEach(function (li) {
      li.classList.remove('tree-parent', 'tree-child');
      li.style.order = '';
    });

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
        tog.textContent = '▾';
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

  // ============================================================
  // 产品列表分组增强
  // ============================================================
  function maybeProductGroups() {
    if (location.hash.indexOf('collections/products') < 0) return;
    var map = CAT_NAMES;
    if (!map || !Object.keys(map).length) return;

    var root = document.querySelector('#nc-root');
    if (!root) return;

      var slugs = Object.keys(map);
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      var node;
      var replacedParents = [];
      var replacedCount = 0;
      while ((node = walker.nextNode())) {
        var text = node.nodeValue;
        if (!text) continue;
        var trimmed = text.trim();
        if (!trimmed) continue;
        var parent = node.parentElement;
        if (!parent) continue;
        var closestH2 = parent.closest ? parent.closest('h2') : null;
        if (closestH2 && (!closestH2.className || closestH2.className.indexOf('GroupHeading') < 0)) continue;
        var match = trimmed.match(/([a-z0-9-]+)(\s*\(\d+\))?$/);
        if (!match) continue;
        var slug = match[1];
        if (slugs.indexOf(slug) < 0) continue;
        var count = match[2] || '';
        node.nodeValue = map[slug] + count;
        replacedCount++;

        var header = parent.closest ? parent.closest('li, div, section') : parent;
        if (header && replacedParents.indexOf(header) < 0) {
          replacedParents.push(header);
          header.classList.add('product-group-header');
          if (!header.querySelector('.product-group-arrow')) {
            var arrow = document.createElement('span');
            arrow.className = 'product-group-arrow';
            arrow.textContent = '▾';
            header.insertBefore(arrow, header.firstChild);
          }
          if (!header.dataset.groupBound) {
            header.dataset.groupBound = '1';
            (function (h) {
              h.addEventListener('click', function (e) {
                var t = e.target;
                if (t && (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a, button'))) return;
                toggleProductGroup(h);
              });
            })(header);
          }
        }
      }
      return replacedCount;
    }

    var _pgAttempts = 0;
    function pollProductGroups() {
      if (++_pgAttempts > 50) return;
      if (location.hash.indexOf('collections/products') < 0) return;
      var count = maybeProductGroups();
      console.log('[product-groups] poll #' + _pgAttempts + ' replaced=' + count);
      setTimeout(pollProductGroups, 700);
    }

  function toggleProductGroup(header) {
    var arrow = header.querySelector('.product-group-arrow');
    var items = [];
    var sibling = header.nextElementSibling;
    while (sibling) {
      if (sibling.classList && sibling.classList.contains('product-group-header')) break;
      items.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    if (!items.length) {
      var list = header.parentElement && header.parentElement.querySelector('ul, ol');
      if (list && list !== header) {
        items = Array.prototype.slice.call(list.children);
      }
    }
    if (!items.length) return;

    var open = items[0].style.display !== 'none';
    items.forEach(function (it) { it.style.display = open ? 'none' : ''; });
    if (arrow) arrow.textContent = open ? '▸' : '▾';
    header.classList.toggle('collapsed', open);
  }

  // ============================================================
  // 侧边栏分组：在"内容管理"和"页面文案"两组之间插入分隔标题
  // ============================================================
  function injectSidebarGroups() {
    var root = document.querySelector('#nc-root') || document.body;
    // 查找侧边栏中指向 collections 的链接
    var links = root.querySelectorAll('a[href*="#/collections/"]');
    if (links.length < 4) return;

    // 检查是否已注入
    var existing = root.querySelector('.cms-group-sep');
    if (existing) return;

    // 页面文案集合名列表
    var pageContentNames = SINGLE_FILE_COLLECTIONS;
    // 内容管理集合名列表
    var contentNames = I18N_COLLECTIONS;

    var sepInserted = {};
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';

      // 在第一个"内容管理"集合前插入分组标题
      var isFirstContent = false;
      for (var i = 0; i < contentNames.length; i++) {
        if (href.indexOf('collections/' + contentNames[i]) >= 0) {
          isFirstContent = true;
          break;
        }
      }
      if (isFirstContent && !sepInserted.content) {
        sepInserted.content = true;
        // 检查是否已有
        var prev = link.previousElementSibling;
        if (!prev || !prev.classList || !prev.classList.contains('cms-group-sep')) {
          var sep = document.createElement('div');
          sep.className = 'cms-group-sep cms-group-content';
          sep.textContent = '内容管理';
          link.parentNode.insertBefore(sep, link);
        }
      }

      // 在第一个"页面文案"集合前插入分组标题
      var isFirstPage = false;
      for (var j = 0; j < pageContentNames.length; j++) {
        if (href.indexOf('collections/' + pageContentNames[j]) >= 0) {
          isFirstPage = true;
          break;
        }
      }
      if (isFirstPage && !sepInserted.page) {
        sepInserted.page = true;
        var prevP = link.previousElementSibling;
        if (!prevP || !prevP.classList || !prevP.classList.contains('cms-group-sep')) {
          var sepP = document.createElement('div');
          sepP.className = 'cms-group-sep cms-group-page';
          sepP.textContent = '页面文案';
          link.parentNode.insertBefore(sepP, link);
        }
      }
    });
  }

  // 注入样式：树形 + 产品分组 + 侧边栏分组
  (function () {
    var st = document.createElement('style');
    st.textContent =
      '.tree-root{display:flex !important;flex-direction:column !important;}' +
      '.tree-parent{position:relative;padding-left:4px !important;}' +
      '.tree-parent h2{padding-left:34px !important;margin-left:0 !important;}' +
      '.tree-toggle{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:18px;height:18px;line-height:15px;text-align:center;border:1px solid #cbd5e1;background:#f1f5f9;cursor:pointer;border-radius:3px;z-index:3;font-size:12px;padding:0;}' +
      '.tree-toggle:hover{background:#e2e8f0;}' +
      '.tree-child{margin-left:40px !important;padding-left:14px !important;border-left:2px solid #cbd5e1;background:#f8fafc;}' +
      '.tree-child h2{font-weight:400;}' +
      '.product-group-header{cursor:pointer;user-select:none;}' +
      '.product-group-header .product-group-arrow{display:inline-block;width:18px;height:18px;line-height:15px;text-align:center;border:1px solid #cbd5e1;background:#f1f5f9;border-radius:3px;font-size:12px;margin-right:6px;}' +
      // 侧边栏分组分隔
      '.cms-group-sep{font-size:11px !important;font-weight:700 !important;color:#64748b !important;text-transform:uppercase !important;letter-spacing:0.08em !important;padding:12px 16px 4px !important;margin-top:8px !important;border-top:1px solid #e2e8f0 !important;background:#f8fafc !important;pointer-events:none;}' +
      '.cms-group-sep:first-child{border-top:none !important;margin-top:0 !important;}';
    document.head.appendChild(st);
  })();

  // 监听 DOM 变化后重新执行增强逻辑
  var _tw = new MutationObserver(function () {
    _tw.disconnect();
    try { maybeTreeify(); } catch (e) { console.error('[treeify]', e); }
    try { maybeProductGroups(); } catch (e) { console.error('[product-groups]', e); }
    try { injectSidebarGroups(); } catch (e) { console.error('[sidebar-groups]', e); }
    _tw.observe(document.body, { childList: true, subtree: true });
  });
  _tw.observe(document.body, { childList: true, subtree: true });
  setTimeout(maybeTreeify, 400);
  setTimeout(maybeTreeify, 1200);
  setTimeout(injectSidebarGroups, 500);
  setTimeout(injectSidebarGroups, 1500);
  setTimeout(pollProductGroups, 600);

  // ============================================================
  // 按语言派生全部 12 个集合后初始化 CMS
  // ============================================================
  fetch('config.yml?v=' + Date.now())
    .then(function (r) { return r.text(); })
    .then(function (text) {
      var config = jsyaml.load(text);
      config.backend = config.backend || {};
      config.backend.site_id = config.backend.site_id || 'daq-iot-website';

      // 按 name 索引所有模板集合
      var templates = {};
      (config.collections || []).forEach(function (c) {
        templates[c.name] = c;
      });

      var derived = [];

      // ── 内容管理组：i18n:true 集合，folder 派生到当前语言子目录 ──
      if (templates.products) {
        var products = derive(templates.products, 'src/content/products/' + lang, '① 产品');
        products.view_filters = VIEW_FILTERS[lang];
        products.view_groups = [{ label: '按分类分组', field: 'category' }];
        derived.push(products);
      }
      if (templates.categories) {
        var categories = derive(templates.categories, 'src/content/categories/' + lang, '② 产品分类');
        (categories.fields || []).forEach(function (f) {
          if (f.name === 'lang') f.default = lang;
        });
        derived.push(categories);
      }
      if (templates.cases) {
        derived.push(derive(templates.cases, 'src/content/cases/' + lang, '③ 项目案例'));
      }
      if (templates.downloads) {
        derived.push(derive(templates.downloads, 'src/content/downloads/' + lang, '④ 下载中心'));
      }
      if (templates.posts) {
        derived.push(derive(templates.posts, 'src/content/posts/' + lang, '⑤ 博客文章'));
      }

      // ── 页面文案组：i18n:false 集合，转为 file collection 只指向当前语言文件 ──
      SINGLE_FILE_COLLECTIONS.forEach(function (name) {
        if (!templates[name]) return;
        var suffix = FILE_SUFFIX[name] || 'index';
        derived.push(deriveSingleFile(templates[name], lang, LABEL_MAP[name], suffix));
      });

      config.collections = derived;

      // 本地预览：走 decap-server 本地 git-gateway（localhost:8081），无需真实 GitHub OAuth
      // 线上：走 GitHub OAuth，删除 local_backend 避免尝试连接不存在的本地服务器
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        config.backend = { name: 'git-gateway', branch: 'main' };
        config.local_backend = { url: 'http://localhost:8081/api/v1' };
      } else {
        delete config.local_backend;
      }

      // load_config_file:false 必须放在 config 对象内部
      config.load_config_file = false;
      window.CMS.init({ config: config });
      console.log('[init-cms] 已按语言初始化后台：' + lang + '（' + derived.length + ' 个集合）');
    })
    .catch(function (e) {
      console.error('[init-cms] 初始化失败，回退默认初始化：', e);
      window.CMS.init();
    });
})();
