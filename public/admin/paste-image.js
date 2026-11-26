/**
 * 正文粘贴图片自动上传（paste-image.js）
 * ------------------------------------------------------------
 * 需求：富文本/Markdown 正文里 Ctrl+V 一张截图，自动上传到媒体库并在光标处
 *       插入 ![](/images/xxx.png)，无需再一张张点「选择图片」。
 *
 * 保留原功能：本脚本只在「剪贴板里确实有图片文件」时接管粘贴；普通文字粘贴、
 *             工具栏的图片按钮、媒体库选图等原有流程一律不干预。
 *
 * 上传方式：走 GitHub Contents API（线上）或 decap-server（本地），
 *           复用页面已有的 media-dedupe.js（同名自动改名，不覆盖旧文件）。
 *           上传后立即插入 Markdown 图片语法，Decap 的 IMAGE 编辑器组件会自动识别。
 *
 * 触发时机：粘贴即上传（不是发布时统一上传——Decap 的保存钩子改不了正文，
 *           且媒体上传本身是独立提交，技术上无法合并到发布那一次提交）。
 *
 * 关闭：localStorage.setItem('cms-paste-image','off')
 */
(function () {
  if (window.__pasteImageInstalled) return;
  window.__pasteImageInstalled = true;

  var TAG = '[paste-image]';
  var OFF_KEY = 'cms-paste-image';
  if (localStorage.getItem(OFF_KEY) === 'off') return;

  var REPO = 'DAQIOT/daq-iot-website';
  var BRANCH = 'main';
  var MEDIA_DIR = 'public/images';
  var PUB_DIR = '/images';
  var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  var PROXY = 'http://localhost:8081/api/v1';

  var origFetch = window.fetch ? window.fetch.bind(window) : null;
  if (!origFetch) return;

  function toast(msg, isError) {
    try {
      var el = document.createElement('div');
      el.textContent = msg;
      el.style.cssText =
        'position:fixed;top:48px;right:16px;z-index:100000;' +
        'background:' + (isError ? '#b91c1c' : '#1f2937') + ';color:#f9fafb;' +
        'padding:10px 16px;border-radius:8px;font:13px/1.5 -apple-system,"Segoe UI",sans-serif;' +
        'box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:460px;';
      document.body.appendChild(el);
      setTimeout(function () { el.style.transition = 'opacity .4s'; el.style.opacity = '0'; }, 4200);
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 4800);
    } catch (e) {}
  }

  /** 取剪贴板里的图片文件（可能多张，逐个处理） */
  function getImages(e) {
    var out = [];
    var items = e.clipboardData && e.clipboardData.items;
    if (!items) return out;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.kind === 'file' && /^image\//i.test(it.type)) {
        var f = it.getAsFile && it.getAsFile();
        if (f) out.push(f);
      }
    }
    // Safari 有时只给 files
    if (!out.length && e.clipboardData.files) {
      for (var j = 0; j < e.clipboardData.files.length; j++) {
        var f2 = e.clipboardData.files[j];
        if (/^image\//i.test(f2.type)) out.push(f2);
      }
    }
    return out;
  }

  function readAsBase64(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () {
        var s = String(fr.result);
        resolve(s.slice(s.indexOf(',') + 1));
      };
      fr.onerror = function () { reject(new Error('图片读取失败')); };
      fr.readAsDataURL(file);
    });
  }

  function safeName(file, index) {
    var ext = (file.name && file.name.match(/\.[a-z0-9]+$/i)) ||
      ({ 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' }[file.type] || '.png');
    var d = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var ts = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' +
      pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
    var rnd = Math.random().toString(36).slice(2, 7);
    return 'pasted-' + ts + '-' + rnd + (index ? '-' + (index + 1) : '') + String(ext).toLowerCase();
  }

  function getToken() {
    try {
      var u = JSON.parse(localStorage.getItem('decap-cms-user') || '{}');
      return u.token || '';
    } catch (e) { return ''; }
  }

  /** 上传一个文件，返回公开路径 /images/xxx */
  function uploadOne(file, name, index) {
    var repoPath = MEDIA_DIR + '/' + name;
    var apiUrl = 'https://api.github.com/repos/' + REPO + '/contents/' + repoPath;

    if (isLocal) {
      // 本地 decap-server：与 file-picker.js 同一通道
      return readAsBase64(file).then(function (b64) {
        return origFetch(PROXY, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'persistMedia',
            params: {
              repo: REPO,
              branch: BRANCH,
              mediaFolder: MEDIA_DIR,
              asset: { path: repoPath, content: b64, encoding: 'base64' },
              options: { commitMessage: 'Upload pasted image ' + name }
            }
          })
        });
      }).then(function (r) {
        if (!r.ok) throw new Error('本地上传 HTTP ' + r.status);
        return PUB_DIR + '/' + name;
      });
    }

    var token = getToken();
    if (!token) return Promise.reject(new Error('未取到登录令牌，请先在后台登录'));

    return readAsBase64(file).then(function (b64) {
      return origFetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': 'token ' + token,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github+json'
        },
        body: JSON.stringify({
          message: 'Upload pasted image ' + name,
          content: b64,
          branch: BRANCH
        })
      });
    }).then(function (r) {
      if (!r.ok) {
        return r.text().then(function (t) { throw new Error('上传失败 HTTP ' + r.status + ': ' + t.slice(0, 160)); });
      }
      return PUB_DIR + '/' + name;
    });
  }

  /**
   * 识别当前焦点所在的正文编辑器，返回可复用的上下文。
   * 兼容三种内核：
   *   - slate：Decap 3.x 富文本编辑器（contenteditable role=textbox），本项目当前使用
   *   - cm：旧版 CodeMirror（源码模式兜底）
   *   - textarea：源码模式下的原生文本域兜底
   */
  function getEditorCtx() {
    var a = document.activeElement;
    if (!a) return null;

    // 1) Decap 3.x Slate 富文本内核
    if (a.getAttribute && a.getAttribute('contenteditable') === 'true' &&
        a.getAttribute('role') === 'textbox') {
      var sel = window.getSelection();
      var range = (sel && sel.rangeCount) ? sel.getRangeAt(0).cloneRange() : null;
      return { type: 'slate', el: a, range: range };
    }

    // 2) 旧版 CodeMirror（源码/富文本兜底）
    if (a.closest) {
      var host = a.closest('.CodeMirror');
      if (host && host.CodeMirror) return { type: 'cm', cm: host.CodeMirror };
    }

    // 3) 源码模式 textarea 兜底
    if (a.tagName === 'TEXTAREA') {
      return { type: 'textarea', el: a };
    }
    return null;
  }

  /** 在光标处插入 Markdown 图片文本，兼容三种编辑器内核 */
  function insertMarkdown(text, ctx) {
    if (!ctx) return false;

    if (ctx.type === 'cm') {
      if (typeof ctx.cm.replaceSelection !== 'function') return false;
      ctx.cm.replaceSelection(text);
      ctx.cm.focus();
      return true;
    }

    if (ctx.type === 'slate') {
      var el = ctx.el;
      if (!el || !el.isConnected) return false;
      el.focus();
      var sel = window.getSelection();
      if (!sel) return false;
      sel.removeAllRanges();
      if (ctx.range && el.contains(ctx.range.startContainer)) {
        sel.addRange(ctx.range);
      } else {
        // 光标位置已失效：兜底到末尾
        var r = document.createRange();
        r.selectNodeContents(el);
        r.collapse(false);
        sel.addRange(r);
      }
      // execCommand 会触发 Slate 的 beforeinput/input，让内容真正进入编辑器状态
      return document.execCommand('insertText', false, text);
    }

    if (ctx.type === 'textarea') {
      var t = ctx.el;
      var s = t.selectionStart, e = t.selectionEnd;
      var setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
      if (setter) setter.call(t, t.value.slice(0, s) + text + t.value.slice(e));
      else t.value = t.value.slice(0, s) + text + t.value.slice(e);
      t.selectionStart = t.selectionEnd = s + text.length;
      t.dispatchEvent(new Event('input', { bubbles: true }));
      t.focus();
      return true;
    }
    return false;
  }

  document.addEventListener('paste', function (e) {
    var imgs = getImages(e);
    if (!imgs.length) return; // 没有图片 → 完全不干预，保留原粘贴行为

    // 只接管正文编辑器内的粘贴；其它输入框（标题、摘要等）保持原样
    var ctx = getEditorCtx();
    if (!ctx) return;

    e.preventDefault();
    e.stopPropagation();

    toast('检测到 ' + imgs.length + ' 张图片，正在上传…');
    var chain = Promise.resolve();

    imgs.forEach(function (file, idx) {
      chain = chain.then(function () {
        var name = safeName(file, idx);
        return uploadOne(file, name, idx).then(function (url) {
          var md = '![](' + url + ')\n';
          if (!insertMarkdown(md, ctx)) {
            // 极端情况下没拿到编辑器实例：给出可手贴的路径，绝不静默丢图
            console.warn(TAG, '未能自动插入，图片地址：', url);
            toast('图片已上传，但自动插入失败，请手动粘贴：' + url, true);
          }
        });
      });
    });

    chain.then(function () {
      toast(imgs.length + ' 张图片已上传并插入正文。');
    }).catch(function (err) {
      console.error(TAG, err);
      toast('图片上传失败：' + (err && err.message ? err.message : err), true);
    });
  }, true); // 捕获阶段，早于 CodeMirror 的 paste 处理

  console.log(TAG, '已启用「粘贴图片即上传」；关闭方式：localStorage.setItem("cms-paste-image","off")');
})();
