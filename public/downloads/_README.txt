【下载文件放置说明】

⚠️ 本目录默认不再提交任何二进制文件（见仓库根 .gitignore）

原因：
  1. Cloudflare Pages 单文件上限 25 MiB，超过会直接部署失败
  2. GitHub 建议单文件 < 50 MB
  3. 二进制进 git 会让仓库永久膨胀，且无法真正删除

推荐做法 —— 下载文件托管到外部，仓库里只存链接：

  1. 把安装包 / 配置工具 / APP / PDF 上传到外部存储：
       · Cloudflare R2 公网桶（Cloudflare 官方推荐的大文件方案）
       · 阿里云 OSS / 腾讯云 COS
       · 旧站静态目录 www.daq-iot.com/static/...
  2. 到 Decap 后台「下载中心」编辑对应条目，在「下载链接列表」里添加一条：
       · 链接文字：如「Windows 版」「官方下载」
       · 下载地址：填完整 URL，如 https://static.daq-iot.com/scada-system-4.27.1-windows-x64.zip
       · 链接类型：选「外部链接」
  3. 一条记录可以加多条链接（Windows / Mac / 镜像 / 网盘）。

什么情况才放本目录：
  · 确实小于 25 MiB 且希望由 Cloudflare 直接托管、不依赖外部服务的小文件
  · 放好后在 md 的 file 字段填 /downloads/<文件名>，并在 .gitignore 加白名单放行
  · 文件名避免中文和空格，用连字符（-）分隔

当前已外置的文件（本地备份在 E:\DESKTOP\downloads-backup\）：
  · scada-system-4.27.1-windows-x64.zip   44.41 MB  ← 超 25 MiB，必须外链
  · rs485-bus-sharer-config-tool-v1.0.zip  0.44 MB  ← 按统一策略一并外链
