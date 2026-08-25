// CMS 顶部语言切换下拉 banner
// 切换后保存选择并刷新页面，admin/init-cms.js 会按所选语言
// 重新派生【产品】【产品分类】集合 = 整个后台内容切换到该语言
(function () {
  function bind() {
    var select = document.getElementById('cms-lang-select');
    if (!select || select.dataset.bound) return;
    select.dataset.bound = '1';
    var saved = localStorage.getItem('cms-lang') || 'zh';
    select.value = saved;
    select.addEventListener('change', function () {
      localStorage.setItem('cms-lang', select.value);
      // 切换语言会刷新页面，先把 Decap 的登录 token 备份到 sessionStorage，
      // 防止刷新后 GitHub OAuth 登录态丢失导致重新登录
      try {
        var user = localStorage.getItem('decap-cms-user');
        if (user) sessionStorage.setItem('cms-lang-user-backup', user);
      } catch (e) { /* ignore */ }
      window.location.reload();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
