# DAQ-IOT 多语言外贸官网 (daq-iot-website)

公司面向海外市场的多语言外贸官网。基于 **Astro 静态站点 + Tailwind CSS**，配套 **Decap CMS** 后台编辑内容，部署在 **Cloudflare Pages**。

- **GitHub 仓库**：`DAQIOT/daq-iot-website`（默认分支 `main`）
- **Cloudflare Pages 项目名**：`daq-iot`
- **唯一对外域名**：[https://daq-iot.pages.dev](https://daq-iot.pages.dev)

---

## 技术栈

| 层 | 选型 |
|---|---|
| 静态站点框架 | Astro 6.4（`output: 'static'`） |
| CSS | Tailwind CSS 4.3（经 `@tailwindcss/vite`） |
| 多语言 | 自研物理目录路由：`src/pages/[lang]/` → `/zh` `/en` `/de`，根 `/` 重定向到默认语言 `/en` |
| CMS 后台 | Decap CMS（`public/admin/`），GitHub backend |
| OAuth | Cloudflare Pages Functions（`functions/oauth/`）+ 独立 Worker（`oauth-proxy/`） |
| 部署 | Cloudflare Pages（直连 GitHub `main` 分支自动部署） |
| SEO | `@astrojs/sitemap` |

---

## 目录结构

```
官网/
├── astro.config.mjs          Astro 配置（SITE_URL 环境变量覆盖默认域名）
├── package.json              依赖与脚本
├── tsconfig.json             继承 astro/tsconfigs/strict
├── content.config.ts         11 个 content collections 的 schema 定义
├── .gitignore
│
├── src/
│   ├── pages/
│   │   ├── index.astro       根路径 / → meta refresh 跳到 /en
│   │   └── [lang]/           三语物理目录
│   │       ├── index.astro                首页
│   │       ├── about.astro                关于我们
│   │       ├── products.astro             产品列表（带分类标签筛选）
│   │       ├── products/[slug].astro      产品详情
│   │       ├── cases/index.astro          案例列表（带行业标签筛选）
│   │       ├── cases/[slug].astro         案例详情
│   │       ├── blog.astro / blog/[slug].astro  博客
│   │       ├── downloads.astro            下载中心（带分类筛选）
│   │       ├── solutions.astro services.astro partners.astro support.astro contact.astro
│   │       └── software/scada-manual.astro
│   ├── layouts/BaseLayout.astro
│   ├── components/           Header / Footer / LanguageSwitcher
│   ├── content/              Content Collections（按 zh/en/de 分目录的 Markdown）
│   │   ├── site/{zh,en,de}-settings.md        网站基础文案
│   │   ├── solutions/{zh,en,de}-index.md      解决方案
│   │   ├── services/{zh,en,de}-index.md
│   │   ├── partners/{zh,en,de}-index.md
│   │   ├── support/{zh,en,de}-index.md
│   │   ├── about/{zh,en,de}-index.md
│   │   ├── contact/{zh,en,de}-index.md       联系信息（姓名/邮箱/电话/地址）
│   │   ├── categories/{zh,en,de}/*.md         产品分类（支持二级层级）
│   │   ├── products/{zh,en,de}/*.md            产品
│   │   ├── cases/{zh,en,de}/*.md               项目案例
│   │   ├── downloads/{zh,en,de}/*.md           下载中心
│   │   └── posts/{zh,en,de}/*.md               博客文章
│   ├── i18n/
│   │   ├── config.ts         语言字典与默认语言
│   │   ├── ui.ts             UI 文案翻译字典
│   │   └── utils.ts          工具函数（getTranslations / getCategoriesByLang）
│   ├── lib/renderMarkdown.ts
│   └── styles/global.css
│
├── public/
│   ├── admin/                Decap CMS 后台（config.yml + vendor/decap-cms）
│   ├── images/               媒体库（Decap 上传入口）
│   └── downloads/            下载文件存放
│
├── functions/
│   └── oauth/
│       ├── auth.js           Cloudflare Pages Function：跳转 GitHub OAuth
│       └── callback.js       回调处理（交换 code → token）
│
└── oauth-proxy/
    └── worker.js             独立的 OAuth 代理 Worker
```

---

## 本地开发

### 环境要求

- Node.js >= 18（推荐 20+）
- npm

### 安装与启动

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 生产构建（输出到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

### 本地 CMS 编辑（可选）

如需在本地使用 Decap CMS 后台编辑内容：

```bash
# 终端1：启动 CMS API
npx decap-server

# 终端2：启动 Astro
npm run dev

# 浏览器打开 http://localhost:4321/admin/
```

> `public/admin/init-cms.js` 会自动检测 localhost 并切换为 local_backend 模式，无需改 config.yml。

---

## 内容管理（Decap CMS）

后台地址：[https://daq-iot.pages.dev/admin/](https://daq-iot.pages.dev/admin/)

- **GitHub 认证**：用公司 GitHub 账号登录即可编辑
- **多语言结构**：`multiple_folders`，后台顶部语言下拉决定展示哪些语言的内容
- **可编辑集合**：

| 集合 | 目录 | 用途 |
|---|---|---|
| products | `src/content/products` | 产品（支持多语言、分类关联） |
| cases | `src/content/cases` | 项目案例（按行业自动生成筛选标签） |
| categories | `src/content/categories` | 产品分类（支持二级层级） |
| downloads | `src/content/downloads` | 下载中心（支持图片说明） |
| posts | `src/content/posts` | 博客文章 |
| site | `src/content/site` | 网站基础文案（导航/hero/CTA/页脚等） |
| solutions / services / partners / support / about / contact | 各自目录 | 各页面文案 |

- **媒体上传**：图片统一进 `public/images/`

> OAuth 流程由 Cloudflare Pages Functions + 独立 Worker 协同完成。GitHub OAuth App 的 `CLIENT_ID` / `CLIENT_SECRET` 配置在 Cloudflare Pages 项目环境变量中。

---

## 部署流程

1. 修改代码 / 后台编辑内容 → 提交 → push 到 GitHub `DAQIOT/daq-iot-website` 仓库 `main` 分支
2. Cloudflare Pages 监听 push，**自动构建部署**
3. 默认域名 [https://daq-iot.pages.dev](https://daq-iot.pages.dev) 在 1-2 分钟内更新

无需登录 Cloudflare 操作。

### 站点 URL（Sitemap / Canonical）

- 默认（无环境变量时）：`https://daq-iot.com`
- Cloudflare Pages → Settings → Environment variables 里设 `SITE_URL=https://daq-iot.pages.dev` 后，canonical 与 sitemap 用 Pages 域名

---

## 备份与恢复

### 方式一：Git 仓库（推荐，日常备份）

项目本身在 GitHub 上，每次 push 都是一份版本快照。这是最可靠的备份方式。

```bash
# 查看历史版本
git log --oneline -20

# 回滚到某个版本（创建新提交，不破坏历史）
git revert <commit-hash>

# 紧急回滚（直接重置，谨慎使用）
git reset --hard <commit-hash>
```

### 方式二：本地完整备份（大改前推荐）

在推送重大改动前，用 git 打标签或下载 zip：

```bash
# 方式 A：打标签标记当前版本
git tag -a v1.0-stable -m "稳定版本备份"
git push origin v1.0-stable

# 方式 B：下载项目 zip
# GitHub 仓库页面 → Code → Download ZIP
# 或命令行：
git archive --format=zip -o backup-$(date +%Y%m%d).zip HEAD

# 方式 C：手动复制整个项目目录（含 node_modules 可跳过）
# 直接复制项目文件夹到其他盘 / 移动硬盘
```

### 方式三：Cloudflare Pages 部署历史

Cloudflare Pages 保留每次部署的历史版本，可在 Cloudflare Dashboard → Pages → 项目 → Deployments 中查看和回滚到任意历史部署。

### 恢复流程

1. **代码回滚**：`git reset --hard <commit-hash>` 或下载历史 zip 覆盖本地
2. **内容恢复**：从 GitHub 历史中找到对应的 `.md` 文件内容，手动恢复
3. **生产回滚**：在 Cloudflare Pages Dashboard 中选择历史部署 → Rollback
4. **媒体文件**：`public/images/` 下的图片随 git 一起版本管理，无需单独备份

---

## 常用命令速查

| 操作 | 命令 |
|---|---|
| 安装依赖 | `npm install` |
| 启动开发 | `npm run dev` |
| 生产构建 | `npm run build` |
| 预览构建 | `npm run preview` |
| 启动本地 CMS | `npx decap-server` |
| 查看 git 状态 | `git status` |
| 查看 git 历史 | `git log --oneline -20` |
| 打标签备份 | `git tag -a v1.0 -m "描述"` |
| 下载项目 zip | GitHub 仓库 → Code → Download ZIP |

---

## 开发注意事项

### YAML 日期字段必须加引号

Markdown frontmatter 中的日期字段（`releaseDate`、`pubDate`）**必须用引号包裹**，否则 YAML 会解析为 Date 对象导致构建报错：

```yaml
# 正确
releaseDate: "2026-09-01"
pubDate: "2025-07-31"

# 错误（YAML 解析为 Date 对象）
releaseDate: 2026-09-01
```

### 内联脚本不能用 TypeScript

Astro 中 `<script is:inline>` 和 `<script define:vars>` 不经过编译，必须写纯 JavaScript，不能使用 TypeScript 类型注解（如 `cat: string`）或类型断言（如 `as HTMLElement`）。

### 联系信息动态读取

联系页面的姓名、邮箱、电话、手机等真实值存储在 `src/content/contact/{zh,en,de}-index.md` 中，通过 `t('contact.personName')` 等方式动态读取。不要在 `.astro` 模板中硬编码这些值。

---

## 参考

- Astro 文档：https://docs.astro.build/
- Decap CMS：https://decapcms.org/docs/
- Cloudflare Pages：https://developers.cloudflare.com/pages/
- Tailwind CSS：https://tailwindcss.com/docs
