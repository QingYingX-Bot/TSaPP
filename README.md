# XiaoMiGao 官网

Vue 3 + Vite 静态单页应用，部署后为纯静态资源（可放在任意静态托管）。

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
- `src/components/` — 公共头部（导航 + 语言切换）、页脚
- `src/composables/useLang.js` — 中/英语言状态与持久化
- `src/router/` — 路由：`/`、`/privacy`、`/terms`

