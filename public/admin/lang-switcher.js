// CMS 顶部语言切换下拉 banner
// 默认中文；切换后跳转到对应语言的【产品】集合（#/collections/{lang}_products）
// 侧边栏的 6 个集合入口仍全部显示，但默认操作集合按所选语言定位
(function () {
  function getLangFromHash() {
    var h = window.location.hash || '';
    var m = h.match(/collections\/(zh|en|de)_/);
    return m ? m[1] : 'zh';
  }

  function bindSelect() {
    var select = document.getElementById('cms-lang-select');
    if (!select || select.dataset.bound) return;
    select.dataset.bound = '1';
    select.value = getLangFromHash();
    select.addEventListener('change', function () {
      var lang = select.value;
      window.location.hash = '#/collections/' + lang + '_products';
    });
  }

  // 监听 hashchange（用户在 CMS 内点击其他集合时同步下拉值）
  window.addEventListener('hashchange', function () {
    var select = document.getElementById('cms-lang-select');
    if (!select) return;
    var lang = getLangFromHash();
    if (select.value !== lang) select.value = lang;
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSelect);
  } else {
    bindSelect();
  }
})();