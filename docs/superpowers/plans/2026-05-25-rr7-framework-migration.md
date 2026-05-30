# PR1: Remix 2 → React Router v7 框架迁移 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将项目从 Remix 2.17 + `@refinedev/remix-router` 迁移到 React Router v7 Framework Mode + `@refinedev/react-router`，保留 Vercel 部署与 Docker 构建兼容。

**Architecture:** 使用官方 `npx codemod remix/2/react-router/upgrade` 批量替换依赖与 import，手动处理 Refine router 切换、`parseTableParams` 本地化、Sentry/Vercel 适配。路由文件结构不变，通过 `app/routes.ts` + `flatRoutes()` 适配。PR1 不触碰 `app/lib/` fork。

**Tech Stack:** React Router v7, `@react-router/dev`, `@refinedev/react-router`, `@sentry/react-router`, `@vercel/react-router`, Vite 5, pnpm

**Design Spec:** `docs/superpowers/specs/2026-05-25-refine-remix-rr7-upgrade-design.md`

---

## 文件变更地图

| 文件 | 职责 |
|------|------|
| `package.json` | 依赖与 scripts 切换 |
| `vite.config.ts` | Vite 插件从 remix → reactRouter |
| `react-router.config.ts` | **新建** — SSR 等框架配置 |
| `app/routes.ts` | **新建** — flat routes 注册 |
| `app/utils/parse-table-params.ts` | **新建** — vendored parseTableParams |
| `app/root.tsx` | Refine router + Sentry + Vercel 导入 |
| `app/entry.client.tsx` | HydratedRouter |
| `app/entry.server.tsx` | ServerRouter + Sentry handleError |
| `tsconfig.json` | RR v7 类型配置 |
| `.gitignore` | 忽略 `.react-router/` |
| `Dockerfile` | 无需改结构（start script 在 package.json） |
| `app/routes/*._index.tsx` (×8) | parseTableParams import 路径 |
| ~90 个 route/service/component 文件 | codemod 自动改 import |

---

### Task 1: 创建迁移分支并记录基线

**Files:**
- Modify: 无（仅 git 操作）

- [ ] **Step 1: 创建功能分支**

```bash
git checkout -b feat/rr7-migration
```

- [ ] **Step 2: 确认当前构建基线**

```bash
pnpm typecheck
pnpm build
```

Expected: 当前 main 分支构建成功（若失败，记录 pre-existing 错误，迁移后对比）

- [ ] **Step 3: Commit 设计文档**

```bash
git add docs/superpowers/specs/2026-05-25-refine-remix-rr7-upgrade-design.md \
        docs/superpowers/plans/2026-05-25-rr7-framework-migration.md
git commit -m "$(cat <<'EOF'
docs: 添加 Remix 2 → React Router v7 升级设计与实施计划

EOF
)"
```

---

### Task 2: 运行官方 Codemod

**Files:**
- Modify: `package.json`, `vite.config.ts`, `tsconfig.json`, ~90 个源文件（codemod 自动）

- [ ] **Step 1: 运行 codemod**

```bash
npx codemod remix/2/react-router/upgrade
```

Expected: 自动更新 package.json dependencies/scripts、批量替换 `@remix-run/*` import、更新 entry 文件组件名

- [ ] **Step 2: 安装新依赖**

```bash
pnpm install
```

- [ ] **Step 3: 检查 codemod 输出**

```bash
git diff --stat
```

Expected: 大量文件变更；确认无意外删除

---

### Task 3: 补充 codemod 未覆盖的依赖

**Files:**
- Modify: `package.json`

- [ ] **Step 1: 添加 Refine router 与生态包**

codemod 不会处理 Refine/Vercel/Sentry 特有包，手动更新 `package.json`：

```bash
pnpm remove @refinedev/remix-router @sentry/remix @vercel/remix react-router-dom
pnpm add @refinedev/react-router @sentry/react-router @vercel/react-router @react-router/fs-routes react-router
pnpm add -D @react-router/dev @react-router/node @react-router/serve
```

- [ ] **Step 2: 小版本升级 Refine 包**

```bash
pnpm update @refinedev/core @refinedev/cli @refinedev/devtools @refinedev/inferencer \
  @refinedev/kbar @refinedev/react-hook-form @refinedev/react-table @refinedev/ui-types @refinedev/ably
```

- [ ] **Step 3: 确认 package.json scripts**

确保 scripts 为：

```json
{
  "dev": "cross-env VITE_CJS_IGNORE_WARNING=true react-router dev",
  "build": "cross-env VITE_CJS_IGNORE_WARNING=true react-router build",
  "start": "cross-env NODE_ENV=production react-router-serve ./build/server/index.js",
  "typecheck": "react-router typegen && tsc --debug"
}
```

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "$(cat <<'EOF'
chore: 切换至 React Router v7 与 @refinedev/react-router 依赖

EOF
)"
```

---

### Task 4: 新建 react-router.config.ts 与 app/routes.ts

**Files:**
- Create: `react-router.config.ts`
- Create: `app/routes.ts`
- Modify: `vite.config.ts`

- [ ] **Step 1: 创建 react-router.config.ts**

```typescript
import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
} satisfies Config;
```

- [ ] **Step 2: 创建 app/routes.ts**

```typescript
import { type RouteConfig } from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default flatRoutes() satisfies RouteConfig;
```

- [ ] **Step 3: 更新 vite.config.ts**

将 codemod 后的配置调整为最终形态：

```typescript
import path from 'path';

import { reactRouter } from '@react-router/dev/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { vercelPreset } from '@vercel/react-router/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'import.meta.env.npm_package_version': JSON.stringify(process.env.npm_package_version),
    },
    server: {
      port: Number(env.VITE_CLIENT_PORT),
      strictPort: true,
      host: '0.0.0.0',
    },
    plugins: [
      tailwindcss(),
      reactRouter({
        presets: [vercelPreset()],
      }),
      tsconfigPaths(),
      visualizer({ emitFile: true }),
      sentryVitePlugin({
        debug: false,
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
        url: env.SENTRY_URL,
        sourcemaps: {
          filesToDeleteAfterUpload: ['**/*.map'],
        },
        release: {
          name: 'remix@' + process.env.npm_package_version,
          uploadLegacySourcemaps: {
            paths: ['.'],
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'),
        lodash: 'lodash-es',
      },
    },
    ssr: {
      noExternal: ['@refinedev/react-table', 'lodash', 'lodash-es'],
    },
    build: {
      sourcemap: false,
    },
  };
});
```

注意：移除原 `declare module '@remix-run/node'` 和 `future` flags（已迁移至 react-router.config.ts 或不再需要）。

- [ ] **Step 4: Commit**

```bash
git add react-router.config.ts app/routes.ts vite.config.ts
git commit -m "$(cat <<'EOF'
chore: 添加 React Router v7 配置与 flat routes

EOF
)"
```

---

### Task 5: 更新 TypeScript 与 gitignore

**Files:**
- Modify: `tsconfig.json`
- Modify: `.gitignore`

- [ ] **Step 1: 更新 tsconfig.json**

```json
{
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/.server/**/*.ts",
    "**/.server/**/*.tsx",
    "**/.client/**/*.ts",
    "**/.client/**/*.tsx",
    ".react-router/types/**/*"
  ],
  "compilerOptions": {
    "types": ["@react-router/node", "vite/client", "jest"],
    "rootDirs": [".", "./.react-router/types"],
    "...其余保持不变..."
  }
}
```

- [ ] **Step 2: 更新 .gitignore**

```
.react-router/
```

- [ ] **Step 3: 生成类型并 typecheck**

```bash
pnpm exec react-router typegen
pnpm typecheck
```

Expected: 可能有类型错误待后续 task 修复

- [ ] **Step 4: Commit**

```bash
git add tsconfig.json .gitignore
git commit -m "$(cat <<'EOF'
chore: 配置 React Router v7 TypeScript 类型生成

EOF
)"
```

---

### Task 6: Refine router 切换

**Files:**
- Modify: `app/root.tsx`

- [ ] **Step 1: 更新 import**

```typescript
import routerProvider, { UnsavedChangesNotifier } from '@refinedev/react-router';
```

- [ ] **Step 2: 更新类型 import**

```typescript
import type { ErrorResponse, HeadersFunction, LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router';
import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useRouteError,
} from 'react-router';
```

（codemod 可能已部分完成，确认最终 import 来源为 `react-router`）

- [ ] **Step 3: Commit**

```bash
git add app/root.tsx
git commit -m "$(cat <<'EOF'
refactor: 切换 Refine routerProvider 至 @refinedev/react-router

EOF
)"
```

---

### Task 7: parseTableParams 本地化

**Files:**
- Create: `app/utils/parse-table-params.ts`
- Modify: 8 个 `*._index.tsx` 列表页

- [ ] **Step 1: 创建 app/utils/parse-table-params.ts**

从 `@refinedev/remix-router@4.0.4` 源码 vendored（安装前从 unpkg 或 node_modules 复制 `parse-table-params` 实现）：

```typescript
import type { CrudFilter, CrudSort } from '@refinedev/core';
import qs from 'query-string';

export const parseTableParams = (search: string) => {
  const { currentPage, pageSize, sorters, filters } = qs.parse(search, {
    arrayFormat: 'index',
    parseNumbers: true,
    parseBooleans: true,
  });

  return {
    pagination: {
      currentPage: currentPage ? Number(currentPage) : undefined,
      pageSize: pageSize ? Number(pageSize) : undefined,
    },
    filters: filters as CrudFilter[] | undefined,
    sorters: sorters as CrudSort[] | undefined,
    currentPage: currentPage ? Number(currentPage) : undefined,
    pageSize: pageSize ? Number(pageSize) : undefined,
  };
};
```

**注意：** 实施时从 `node_modules/@refinedev/remix-router/dist/parse-table-params.mjs` 复制精确实现，上述为结构参考，不可直接套用若源码不同。

- [ ] **Step 2: 更新 8 个列表页 import**

每个文件：

```diff
-import { parseTableParams } from '@refinedev/remix-router';
+import { parseTableParams } from '@/utils/parse-table-params';
```

文件列表：
- `app/routes/system.account.user._index.tsx`
- `app/routes/system.account.role._index.tsx`
- `app/routes/system.admin.casbinRule._index.tsx`
- `app/routes/system.admin.log._index.tsx`
- `app/routes/system.admin.auditRecord._index.tsx`
- `app/routes/playground.article.post._index.tsx`
- `app/routes/playground.article.category._index.tsx`
- `app/routes/playground.dashboard.dynamicPage._index.tsx`

- [ ] **Step 3: Commit**

```bash
git add app/utils/parse-table-params.ts app/routes/*._index.tsx
git commit -m "$(cat <<'EOF'
refactor: 本地化 parseTableParams 以脱离 @refinedev/remix-router

EOF
)"
```

---

### Task 8: Sentry 适配

**Files:**
- Modify: `app/root.tsx`
- Modify: `app/entry.server.tsx`
- Modify: `app/clients/sentry.client.ts`（如需更新 import 来源）

- [ ] **Step 1: 更新 app/root.tsx Sentry import**

```typescript
import * as Sentry from '@sentry/react-router';
import { captureReactRouterErrorBoundaryError, withSentry } from '@sentry/react-router';
```

ErrorBoundary 中：

```diff
-captureRemixErrorBoundaryError(error);
+captureReactRouterErrorBoundaryError(error);
```

- [ ] **Step 2: 更新 app/entry.server.tsx**

```typescript
import * as Sentry from '@sentry/react-router';
// EntryContext 类型从 react-router 导入
import type { EntryContext } from 'react-router';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter } from 'react-router';

// RemixServer → ServerRouter
// Sentry.wrapHandleErrorWithSentry → @sentry/react-router 等价 API
```

- [ ] **Step 3: 更新 app/clients/sentry.client.ts**

确认 `useEffect`, `useLocation`, `useMatches` 从 `react-router` 导入（非 `@remix-run/react`）。

- [ ] **Step 4: Commit**

```bash
git add app/root.tsx app/entry.server.tsx app/clients/sentry.client.ts
git commit -m "$(cat <<'EOF'
refactor: 迁移 Sentry 集成至 @sentry/react-router

EOF
)"
```

---

### Task 9: Vercel Analytics 适配

**Files:**
- Modify: `app/root.tsx`

- [ ] **Step 1: 更新 Vercel 导入**

```typescript
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
```

若 package exports 不支持 `/react`，查 `@vercel/analytics` 最新文档确认 RR v7 入口。

- [ ] **Step 2: Commit**

```bash
git add app/root.tsx
git commit -m "$(cat <<'EOF'
refactor: 更新 Vercel Analytics 导入路径适配 React Router v7

EOF
)"
```

---

### Task 10: Entry 文件确认

**Files:**
- Modify: `app/entry.client.tsx`
- Modify: `app/entry.server.tsx`

- [ ] **Step 1: 确认 entry.client.tsx**

```typescript
import { HydratedRouter } from 'react-router/dom';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import { initSentry } from '@/clients/sentry.client';

initSentry();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
```

- [ ] **Step 2: 确认 entry.server.tsx 使用 ServerRouter**

codemod 应已处理，人工确认 `renderToPipeableStream` 包裹 `<ServerRouter context={...} url={...} />`。

- [ ] **Step 3: Commit（若有手动修正）**

```bash
git add app/entry.client.tsx app/entry.server.tsx
git commit -m "$(cat <<'EOF'
refactor: 确认 entry 文件使用 React Router v7 组件

EOF
)"
```

---

### Task 11: 修复 codemod 遗漏

**Files:**
- Modify: 任何仍引用 `@remix-run/*` 的文件

- [ ] **Step 1: 搜索残留引用**

```bash
rg '@remix-run/' app/ --glob '!*.md'
rg '@sentry/remix' app/
rg '@refinedev/remix-router' app/
rg '@vercel/remix' app/
```

Expected: 零匹配

- [ ] **Step 2: 手动修复每个残留**

常见遗漏位置：
- `app/services/session.server.ts`
- `app/hooks/use-update-search-params.ts`
- `tests/unit/example.spec.tsx`
- `env.d.ts`

- [ ] **Step 3: 更新 env.d.ts**

```typescript
/// <reference types="@react-router/node" />
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
fix: 清理迁移后残留的 @remix-run 引用

EOF
)"
```

---

### Task 12: 类型检查与构建验证

**Files:**
- Modify: 类型错误涉及的文件

- [ ] **Step 1: 生成路由类型**

```bash
pnpm exec react-router typegen
```

- [ ] **Step 2: 类型检查**

```bash
pnpm typecheck
```

Expected: PASS（逐个修复错误）

- [ ] **Step 3: 生产构建**

```bash
pnpm build
```

Expected: 产出 `build/client` + `build/server`

- [ ] **Step 4: 本地生产服务（Docker 兼容验证）**

```bash
pnpm start
```

Expected: 服务在配置端口启动，首页可访问

- [ ] **Step 5: Commit 修复**

```bash
git add -A
git commit -m "$(cat <<'EOF'
fix: 修复 React Router v7 迁移后的类型与构建错误

EOF
)"
```

---

### Task 13: 功能回归测试

**Files:**
- 无代码变更（手动测试）

- [ ] **Step 1: 开发模式冒烟**

```bash
pnpm dev
```

测试路径：
1. `/login` — 登录表单渲染
2. OAuth 回调 — GitHub 登录流程
3. `/system/account/user` — 列表分页/筛选/排序
4. 任意 edit 页 — 表单提交
5. 403/404 页面
6. 主题切换
7. KBar 快捷键（`app/lib/refinedev-kbar` 仍可用）

- [ ] **Step 2: Sentry 验证**

触发一个测试错误，确认 Sentry dashboard 收到事件。

- [ ] **Step 3: Docker 构建验证**

```bash
docker build -t refine-rr7 -f Dockerfile .
docker run -p 3000:3000 --env-file .env refine-rr7
```

Expected: 容器启动，应用可访问

- [ ] **Step 4: 更新 TODO.md**

```markdown
[x] 升级 Remix v3 / React Router v7 — PR1 完成，PR2 fork 清理待做
```

- [ ] **Step 5: Commit**

```bash
git add TODO.md
git commit -m "$(cat <<'EOF'
chore: 标记 React Router v7 框架迁移 PR1 完成

EOF
)"
```

---

## 计划自检

### Spec 覆盖

| Spec 要求 | 对应 Task |
|-----------|-----------|
| 官方 Codemod | Task 2 |
| Refine router 切换 | Task 6 |
| parseTableParams 本地化 | Task 7 |
| Sentry 适配 | Task 8 |
| Vercel 适配 | Task 9 |
| Docker 兼容 | Task 3 (start script) + Task 13 (docker build) |
| PR1 不动 app/lib | 全 plan 无 app/lib 修改 |
| tsconfig / routes.ts | Task 4, Task 5 |
| 验证清单 | Task 12, Task 13 |

### 无占位符

所有 task 包含具体文件路径、命令和代码片段。

---

## 执行选项

Plan 已保存至 `docs/superpowers/plans/2026-05-25-rr7-framework-migration.md`。

**1. Subagent-Driven（推荐）** — 每个 Task 派发独立 subagent，任务间 review，快速迭代

**2. Inline Execution** — 在本 session 中按 Task 顺序逐步执行，checkpoint 处暂停确认

请选择执行方式。
