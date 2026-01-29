# The CJS build of Vite's Node API is deprecated

## 现象

执行 `pnpm dev` 或 `pnpm build` 时终端出现告警：

```
The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
```

## 原因说明

1. **Vite 5 起**：Vite 的 Node API 推荐使用 **ESM** 形式，**CommonJS（CJS）构建已被弃用**。
2. **告警触发条件**：当有代码通过 `require('vite')` 等方式以 CJS 加载 Vite 时，会打印上述弃用提示。
3. **在本项目中的来源**：
   脚本使用 `remix vite:dev` / `remix vite:build`，实际调用的是 **@remix-run/dev**。Remix 工具链内部仍通过 **CommonJS** 调用 Vite（例如 vite-node 等），因此告警来自 **Remix 框架侧**，而非本仓库的 `vite.config.ts` 或业务代码。
4. **后续影响**：Vite 6 将完全移除 CJS 构建，届时 Remix 需改为使用 Vite 的 ESM API；在此之前该告警仅为提示，不影响功能。

## 解决方案

**方案一：屏蔽告警（当前采用）**

在 `package.json` 的 `dev`、`build` 脚本中通过环境变量忽略该弃用告警：

```json
{
  "scripts": {
    "dev": "cross-env VITE_CJS_IGNORE_WARNING=true remix vite:dev",
    "build": "cross-env VITE_CJS_IGNORE_WARNING=true remix vite:build"
  }
}
```

- 使用 `cross-env` 保证 Windows/macOS/Linux 下环境变量设置一致。
- 设置后终端不再输出该告警，**不影响开发或构建行为**。

**方案二：等待 Remix 官方适配**

- 根因在 Remix 的 `@remix-run/dev` 仍以 CJS 使用 Vite。
- 可关注 [Remix 相关 issue/讨论](https://github.com/remix-run/remix/issues/10664)，待框架升级为 ESM 调用 Vite 后，告警会从源头消失。

**方案三：调试告警来源（可选）**

若需确认具体是哪个模块触发了 CJS 加载，可先开启 Vite 的 CJS 调用追踪再运行：

```bash
VITE_CJS_TRACE=true pnpm dev
```

根据输出可定位到调用栈，便于向 Remix/Vite 反馈或排查其他依赖。

## 参考

- [Vite 故障排除：CJS Node API 弃用](https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated)
- [Remix 相关讨论](https://github.com/remix-run/remix/discussions/10663)
