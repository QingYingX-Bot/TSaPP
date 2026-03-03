# XiaoMiGao 官网

Vue 3 + Vite + Vuetify 静态单页应用，部署后为纯静态资源（可放在任意静态托管）。网站图标与顶栏/首页 Logo 使用 `public/logo.jpg`（页面内以圆形展示）。若希望浏览器标签页图标也为圆形，可将 logo 裁剪成圆形后保存为 `public/favicon-circle.png`，并在 `index.html` 中改用该 favicon 的注释说明。

## 开发

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 构建与部署

```bash
npm run build
```

产物在 `dist/` 目录，将整个目录上传到任意静态托管（如 GitHub Pages、Vercel、Netlify、Nginx 等）即可。

- 若部署在**站点根路径**（如 `https://example.com/`），无需改配置。
- 若部署在**子路径**（如 `https://example.com/TSaPP/`），请修改 `vite.config.js` 中的 `base: '/TSaPP/'` 后重新构建。

## 项目结构

- `src/views/` — 首页、隐私政策、服务条款三个页面
- `src/components/` — 公共头部（Logo + 首页入口 + 语言切换）、页脚（隐私政策 / 服务条款链接）
- `src/composables/useLang.js` — 中/英语言状态与持久化
- `src/router/` — 路由：`/`、`/privacy`、`/terms`

