【下载文件放置说明】
1. 把可下载的真实文件（scada 安装包、配置工具、APP、PDF 手册等）放到本目录 public/downloads/ 下。
2. 文件放好后，到 Decap 后台「下载中心」新增/编辑条目，在「下载文件路径」字段填：
   /downloads/<文件名>
   例如 /downloads/scada-setup-v6.0.418.zip
3. 确认 src/content/downloads/zh|en|de/*.md 里的 file 字段与真实文件名一致。
4. 保存后自动触发 Cloudflare Pages 部署。

注意：文件名避免中文和空格，用连字符（-）分隔。
