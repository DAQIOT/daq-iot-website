// 「选择文件」按钮 → 直接选本地文件
// ------------------------------------------------------------
// 需求：资源库条目里的「选择文件」不该去打开媒体库，而是像普通上传一样
//       直接选本地文件 → 上传 → 把路径填回字段。
//       媒体库本身保持原样（默认加载该集合媒体目录下的全部文件，只做分页）。
//
// 实现（不改 vendor、不压缩素材）：
//   1. 在捕获阶段拦住「选择文件」按钮的点击（早于 React 的 onClick），取消默认行为；
//   2. 弹出原生 <input type="file"> 选文件；
//   3. 直接调本地后端（decap-server）的 persistMedia 上传到该集合的媒体目录；
//   4. 把公开路径（/files/resources/xxx.pdf）写回字段的输入框（React 受控输入用原生 setter 注入）。
//
// 只在 localhost / 127.0.0.1（本地后端）生效；线上走 GitHub 后端时不介入。
// 关闭：localStorage.setItem('cms-direct-upload','off')
(function () {
  var TAG = '[file-picker]';
  var KEY = 'cms-direct-upload';
  var PROXY = 'http://localhost:8081/api/v1';

  var host = location.hostname;
  if (!(host === 'localhost' || host === '127.0.0.1')) return;
  if (localStorage.getItem(KEY) === 'off') return;

  // 文件组件的按钮文案（三语）
  var LABELS = /^(选择文件|选择其他文件|Choose file|Choose another file|Datei auswählen|Andere Datei auswählen)$/;

  // ── 集合 → 媒体目录（从 config.yml 读，和后台实际生效的一致）──
  var cfg = null;
  function collectionMediaFolder(name) {
    if (!cfg) return '';
    var c = (cfg.collections || []).filter(function (x) {
      return x.name === name;
    })[0];
    if (!c) return '';
    if (c.media_folder) return String(c.media_folder).replace(/^\/+/, '');
    // 字段级 media_folder（如某个 file 字段单独指定）
    var found = '';
    (c.fields || []).forEach(function scan(f) {
      if (found) return;
      if (f && f.media_folder) found = String(f.media_folder).replace(/^\/+/, '');
      if (f && Array.isArray(f.fields)) f.fields.forEach(scan);
    });
    return found || String(cfg.media_folder || 'public/images').replace(/^\/+/, '');
  }

  fetch('config.yml?v=' + Date.now())
    .then(function (r) {
      return r.text();
    })
    .then(function (text) {
      cfg = window.jsyaml ? window.jsyaml.load(text) : null;
      console.log(TAG, '已加载后台配置，可直接上传');
    })
    .catch(function (e) {
      console.warn(TAG, 'config.yml 读取失败：', e);
    });

  function currentCollection() {
    var m = /#\/collections\/([^/?#]+)/.exec(location.hash || '');
    return m ? decodeURIComponent(m[1]) : '';
  }

  // ── 公开路径：public/files/resources → /files/resources/xxx.pdf ──
  function publicUrl(mediaFolder, name) {
    var pub = String(mediaFolder).replace(/^public/, ''); // → /files/resources
    pub = pub.replace(/\/+$/, '');
    return (pub || '') + '/' + name;
  }

  function readAsBase64(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () {
        var dataUrl = String(fr.result);
        resolve(dataUrl.slice(dataUrl.indexOf(',') + 1));
      };
      fr.onerror = function () {
        reject(new Error('文件读取失败'));
      };
      fr.readAsDataURL(file);
    });
  }

  function upload(file, mediaFolder) {
    var safeName = file.name;
    var target = mediaFolder.replace(/\/+$/, '') + '/' + safeName;
    var body = {
      action: 'persistMedia',
      params: {
        repo: 'DAQIOT/daq-iot-website',
        branch: 'main',
        mediaFolder: mediaFolder,
        asset: { path: target, content: null, encoding: 'base64' },
        options: { commitMessage: 'Upload ' + safeName }
      }
    };
    return readAsBase64(file).then(function (b64) {
      body.params.asset.content = b64;
      return fetch(PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
    }).then(function (r) {
      return r.json().then(function (data) {
        if (!r.ok) throw new Error((data && data.error) || 'HTTP ' + r.status);
        return publicUrl(mediaFolder, safeName);
      });
    });
  }

  // ── 把值写回字段（React 受控输入需要原生 setter + input 事件）──
  function findValueInput(btn) {
    var el = btn;
    for (var i = 0; i < 8 && el; i++) {
      var input = el.querySelector && el.querySelector('input[type="text"], input:not([type]), input[type="url"]');
      if (input) return input;
      el = el.parentElement;
    }
    return null;
  }

  function setValue(input, value) {
    var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    if (setter) {
      setter.call(input, value);
    } else {
      input.value = value;
    }
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function pick(btn) {
    var input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';
    var origin = btn.textContent;
    document.body.appendChild(input);
    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) {
        document.body.removeChild(input);
        return;
      }
      var coll = currentCollection();
      var mediaFolder = collectionMediaFolder(coll) || 'public/images';
      btn.textContent = '上传中…';
      upload(file, mediaFolder)
        .then(function (url) {
          var target = findValueInput(btn);
          if (target) {
            setValue(target, url);
            btn.textContent = '已上传 ✓';
            console.log(TAG, '已上传并回填：', url);
          } else {
            btn.textContent = origin;
            alert('已上传：' + url + '\n（未能自动填入字段，请手动把这段路径粘贴到字段里）');
          }
        })
        .catch(function (e) {
          btn.textContent = origin;
          console.error(TAG, e);
          alert('上传失败：' + (e && e.message ? e.message : e));
        })
        .then(function () {
          setTimeout(function () {
            btn.textContent = origin;
          }, 1500);
          if (input.parentNode) document.body.removeChild(input);
        });
    });
    input.click();
  }

  // 捕获阶段拦截：早于 React 的事件处理
  document.addEventListener(
    'click',
    function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('button, a') : null;
      if (!btn) return;
      var txt = (btn.textContent || '').trim();
      if (!LABELS.test(txt)) return;
      e.preventDefault();
      e.stopPropagation();
      console.log(TAG, '接管「' + txt + '」→ 直接选择本地文件');
      pick(btn);
    },
    true
  );

  console.log(TAG, '已启用「选择文件」直传；关闭方式：localStorage.setItem("cms-direct-upload","off")');
})();
