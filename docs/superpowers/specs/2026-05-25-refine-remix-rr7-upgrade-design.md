# Refine + Remix → React Router v7 升级设计

**日期：** 2026-05-25  
**状态：** 已确认  
**作者：** brainstorming session

## 背景

项目当前基于 Remix 2.17 + Refine v5（`@refinedev/remix-router`），部署目标为 Vercel，同时保留 Docker 自托管构建能力。TODO 中记录的阻塞点：`@refinedev/remix-router` 绑定 Remix 2.x，无法直接升级到 Remix v3 / React Router v7。

Refine 官方立场（[#6670](https://github.com/refinedev/refine/issues/6670)）：`@refinedev/remix-router` 继续维护 Remix 2.x；需要 RR v7 的用户应切换至 `@refinedev/react-router`。

**术语：** 本设计中的「Remix v3」指 React Router v7 Framework Mode（Remix v2 的官方继任者），而非基于 Preact 的新 Remix v3 重写版。

## 决策摘要

| 决策项 | 选择 |
|--------|------|
| 升级目标 | React Router v7 Framework Mode + `@refinedev/react-router` |
| 迁移方案 | 方案 1：官方 Codemod + 手动收尾 |
| 生产部署 | Vercel（`@vercel/react-router`） |
| Docker | 保留兼容（更新 `start` script 与构建产物路径） |
| 范围拆分 | PR1 框架迁移；PR2 `app/lib/` fork 清理 |

## 当前状态

### 版本

- Refine Core: 5.0.8（最新 5.0.12）
- Remix: 2.17.4（Remix 2 末代）
- React: 19.2.1
- `react-router-dom`: 7.1.1（已安装但未作为主框架）

### 集成深度

- `app/root.tsx`：`routerProvider` + `UnsavedChangesNotifier` 来自 `@refinedev/remix-router`
- 8 个列表页 loader 使用 `parseTableParams`（仅 remix-router 导出）
- 约 90 个文件引用 `@remix-run/*`
- 生态：`@sentry/remix`、`@vercel/remix`、`remix-auth`、`remix-themes`、`remix-utils`
- `vite.config.ts` 已启用全部 Remix v2 future flags

### 自定义 `app/lib/`（PR2 范围，PR1 不动）

| 目录 | 引用情况 | PR2 计划 |
|------|----------|----------|
| `refinedev-kbar` | 4 处引用 | 对比 `@refinedev/kbar` 后回归官方包 |
| `refinedev-ably` | 定制 Live Provider | 评估是否保留最小定制 |
| `refinedev-react-table` | 无引用（死代码） | 删除 |
| `remix-auth-oauth2` | OAuth2 定制 | 不在 PR2 范围 |

## 架构变更

```
当前                              目标
─────────────────────────────────────────────────────
@remix-run/dev (vite plugin)  →  @react-router/dev (reactRouter plugin)
@remix-run/node/react/serve   →  react-router / @react-router/node / @react-router/serve
@refinedev/remix-router       →  @refinedev/react-router
@sentry/remix                 →  @sentry/react-router
@vercel/remix/vite            →  @vercel/react-router/vite
remix vite:dev/build          →  react-router dev/build
remix-serve                   →  react-router-serve
RemixBrowser / RemixServer    →  HydratedRouter / ServerRouter
```

路由文件命名（`app/routes/*.tsx` flat routes）保持不变，通过新建 `app/routes.ts` + `@react-router/fs-routes` 的 `flatRoutes()` 适配。

## PR1：框架迁移

### 1. 依赖替换

**移除：**

```
@remix-run/dev, @remix-run/node, @remix-run/react, @remix-run/serve,
@remix-run/testing, @refinedev/remix-router, @sentry/remix, @vercel/remix,
react-router-dom
```

**新增：**

```
@react-router/dev, @react-router/node, @react-router/serve, @react-router/fs-routes,
@refinedev/react-router, @sentry/react-router, @vercel/react-router, react-router
```

同步小版本升级 Refine 包（core 5.0.8 → 5.0.12 等）。

### 2. 配置文件

| 文件 | 变更 |
|------|------|
| `vite.config.ts` | `remix()` → `reactRouter()`；`vercelPreset` 改从 `@vercel/react-router/vite` 导入；移除 `future` flags 和 `declare module '@remix-run/node'` |
| `react-router.config.ts` | **新建**，迁出 `ssr: true` 等配置 |
| `app/routes.ts` | **新建**，`flatRoutes()` |
| `package.json` scripts | `react-router dev/build/typegen` |
| `tsconfig.json` | types 改为 `@react-router/node`；include `.react-router/types/**/*`；添加 `rootDirs` |
| `.gitignore` | 添加 `.react-router/` |

### 3. Codemod

运行官方 codemod 批量替换 import 与 package.json：

```bash
npx codemod remix/2/react-router/upgrade
pnpm install
```

约 90 个文件的 `@remix-run/*` → `react-router` / `@react-router/*`。

### 4. Refine 路由切换

`app/root.tsx`：

```tsx
import routerProvider, { UnsavedChangesNotifier } from '@refinedev/react-router';
```

### 5. parseTableParams 本地化

`@refinedev/react-router` 不导出 `parseTableParams`。在 `app/utils/parse-table-params.ts` vendored 实现（源自 `@refinedev/remix-router` 源码），更新 8 个列表页 import：

- `app/routes/system.account.user._index.tsx`
- `app/routes/system.account.role._index.tsx`
- `app/routes/system.admin.casbinRule._index.tsx`
- `app/routes/system.admin.log._index.tsx`
- `app/routes/system.admin.auditRecord._index.tsx`
- `app/routes/playground.article.post._index.tsx`
- `app/routes/playground.article.category._index.tsx`
- `app/routes/playground.dashboard.dynamicPage._index.tsx`

### 6. Entry 文件

| 文件 | 变更 |
|------|------|
| `app/entry.client.tsx` | `RemixBrowser` → `HydratedRouter`（from `react-router/dom`） |
| `app/entry.server.tsx` | `RemixServer` → `ServerRouter`；`EntryContext` 类型来源变更 |

### 7. Sentry 适配

- `@sentry/remix` → `@sentry/react-router`
- `withSentry` → RR v7 等价 API
- `captureRemixErrorBoundaryError` → `@sentry/react-router` 对应函数
- `Sentry.wrapHandleErrorWithSentry` → RR v7 等价 API
- Vite plugin（`@sentry/vite-plugin`）配置基本不变

### 8. Vercel 适配

- `@vercel/remix/vite` → `@vercel/react-router/vite`
- `@vercel/analytics/remix` → `@vercel/analytics/react`（或 RR v7 专用入口，以实际 exports 为准）
- `@vercel/speed-insights/remix` → `@vercel/speed-insights/react`

### 9. Docker 兼容

Dockerfile 本身无需结构性变更（仍 `pnpm run build` + `pnpm run start`），但 `package.json` 的 `start` script 需更新：

```json
"start": "cross-env NODE_ENV=production react-router-serve ./build/server/index.js"
```

构建产物目录保持 `build/server` + `build/client`，与现有 Dockerfile `COPY` 路径一致。

**注意：** Dockerfile 基础镜像为 `node:18`，`package.json` engines 要求 `node: 25.x`。迁移时不改 Docker 基础镜像（超出本 PR 范围），但应在 README 注明 Node 版本要求。

### 10. PR1 明确不做

- 不修改 `app/lib/` fork 包
- 不修改 `app/lib/remix-auth-oauth2`
- 不升级 Docker 基础镜像 Node 版本

## PR2：Fork 清理（后续 PR）

1. `refinedev-kbar` → 回归 `@refinedev/kbar`
2. `refinedev-ably` → 评估定制逻辑，回归或保留最小 wrapper
3. 删除 `refinedev-react-table` 死代码
4. 更新 TODO.md 对应条目

## 验证清单

### PR1

- [ ] `pnpm dev` 本地启动
- [ ] `pnpm typecheck` 通过
- [ ] `pnpm build` 生产构建成功
- [ ] `pnpm start` + Docker 构建可运行
- [ ] 登录 / OAuth 流程
- [ ] CRUD 列表页（分页、筛选、排序）
- [ ] Casbin 权限控制
- [ ] Sentry 错误上报与 source maps
- [ ] Vercel preview 部署
- [ ] 主题切换（remix-themes）

## 风险与缓解

| 风险 | 缓解 |
|------|------|
| Codemod 漏改 edge case | `pnpm typecheck` + 全路由冒烟测试 |
| `remix-auth` 与 RR v7 | peer dep 已支持 `react-router ^7`；OAuth callback 重点测试 |
| `parseTableParams` 行为差异 | vendored 源码保持一致，列表页回归 |
| Sentry source maps 路径 | 构建后验证上传路径（TODO 已有相关问题） |
| Vercel Analytics 导入路径 | 查 package exports，必要时改用 `/react` 入口 |
| Docker Node 18 vs engines 25 | PR1 不改镜像；文档标注 |

## 预估工时

| PR | 内容 | 预估 |
|----|------|------|
| PR1 | Remix 2 → RR v7 框架迁移 | 2–3 天 |
| PR2 | `app/lib/` fork 清理 | 1–2 天 |

## 参考

- [React Router: Upgrading from Remix](https://reactrouter.com/upgrading/remix)
- [Refine #6670](https://github.com/refinedev/refine/issues/6670)
- [Refine React Router 集成文档](https://refine.dev/docs/routing/integrations/react-router/)
