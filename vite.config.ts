// import * as fs from 'fs';

import { vitePlugin as remix } from '@remix-run/dev';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { vercelPreset } from '@vercel/remix/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import lucideIconsPlugin from './vite-plugin-lucide-icons';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

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

      // 可选配置: 本地使用自定义 https 域名
      // https: {
      //   key: fs.readFileSync('./me.ly.com+3-key.pem'),
      //   cert: fs.readFileSync('./me.ly.com+3.pem'),
      // },
      // proxy: {
      //   '/*': {
      //     target: `https://me.ly.com:5173`,
      //     secure: false,
      //     changeOrigin: true,
      //     headers: {
      //       'X-Forwarded-Proto': 'https',
      //     },
      //   },
      // },
    },
    plugins: [
      // lucideIconsPlugin(), // 添加 lucide 图标优化插件
      tailwindcss(),
      remix({
        presets: [vercelPreset()],
        ssr: true, // false: 禁用服务端渲染、启用SPA模式
        manifest: true,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
      visualizer({ emitFile: true }), // 生成构建产物的可视化分析报告 stats.html

      // sentryVitePlugin({
      //   debug: false,
      //   org: env.SENTRY_ORG,
      //   project: env.SENTRY_PROJECT,
      //   authToken: env.SENTRY_AUTH_TOKEN,
      //   url: env.SENTRY_URL,
      //   sourcemaps: {
      //     filesToDeleteAfterUpload: ['**/*.map'],
      //   },
      //   release: {
      //     name: 'oss@' + process.env.npm_package_version,
      //     uploadLegacySourcemaps: {
      //       paths: ['.'],
      //     },
      //   },
      // }),
    ],
    build: {
      sourcemap: false,
    },
  };
});
