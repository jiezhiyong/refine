# lodash ESM Resolution Error in Vite SSR

## 错误信息

```
[vite] Error when evaluating SSR module /app/components/refine/table/index.tsx: failed to import "@refinedev/react-table"
|- Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../node_modules/lodash/isEqual' imported from .../node_modules/@refinedev/react-table/dist/index.mjs
Did you mean to import "lodash/isEqual.js"?
```

## 根本原因

| 层级             | 说明                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| 项目配置         | `package.json` 中 `"type": "module"` → Node.js 使用严格 ESM 解析                                        |
| Vite SSR         | SSR 模块在 Node.js 环境运行，使用 Node.js 原生模块解析                                                  |
| 问题包           | `@refinedev/react-table` 的 ESM 输出 (`dist/index.mjs`) 中写的是 `import isEqual from "lodash/isEqual"` |
| lodash           | CJS-only 包，无 ESM `exports` 映射                                                                      |
| Node.js ESM 规则 | 从 CJS 包导入子路径时需要完整扩展名：`lodash/isEqual.js` 而非 `lodash/isEqual`                          |

### 错误链条

```
Vite SSR
  → 外部化 @refinedev/react-table (默认行为)
  → Node.js 直接加载 dist/index.mjs
  → import "lodash/isEqual" (无 .js 扩展名)
  → ERR_MODULE_NOT_FOUND
```

### 为什么 lodash-es 也需要处理？

虽然 `lodash-es` 是 ESM 包 (`"type": "module"`)，但它没有 `exports` 字段，Node.js ESM 同样无法解析子路径：

```bash
$ node --input-type=module -e "import isEqual from 'lodash-es/isEqual'"
# Error: Cannot find module 'lodash-es/isEqual'
# Did you mean to import "lodash-es/isEqual.js"?
```

## 解决方案

在 `vite.config.ts` 中添加配置：

```ts
export default defineConfig({
  // ...
  resolve: {
    alias: {
      lodash: 'lodash-es', // 将 lodash 重定向到 lodash-es
    },
  },
  ssr: {
    // 强制 Vite 打包这些模块，而非外部化给 Node.js 解析
    // Vite bundler 不要求 .js 扩展名，可以正确处理
    noExternal: ['@refinedev/react-table', 'lodash', 'lodash-es'],
  },
});
```

### 为什么需要两个配置？

1. **`resolve.alias`**: 将 `lodash` 重定向到 `lodash-es`（tree-shakeable ESM 版本）
2. **`ssr.noExternal`**: 强制 Vite 打包而非外部化，这样：
   - Vite bundler 处理模块解析（不要求 `.js` 扩展名）
   - `resolve.alias` 才会生效（外部化的模块不经过 Vite 解析）

### 为什么单独 alias 不够？

Vite SSR 默认外部化 node_modules 中的包，外部化发生在 alias 解析之前：

```
请求 @refinedev/react-table
  → Vite 判断: node_modules 包，外部化 ✓
  → 直接交给 Node.js 解析 (跳过 Vite resolver)
  → alias 不生效
```

## 受影响的包

任何 ESM 输出中使用 `import from "lodash/xxx"` (无扩展名) 的包都会有此问题：

- `@refinedev/react-table`
- 可能还有其他 refine 包或第三方包

## 相关链接

- [Vite SSR Externals](https://vite.dev/guide/ssr.html#ssr-externals)
- [Node.js ESM Resolution](https://nodejs.org/api/esm.html#resolution-algorithm)
- [lodash ESM issue](https://github.com/lodash/lodash/issues/5525)
