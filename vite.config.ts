import path from 'path';

import { reactRouter } from '@react-router/dev/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
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
      tailwindcss(),
      reactRouter(),
      tsconfigPaths(),
      visualizer({ emitFile: true }), // 生成构建产物的可视化分析报告 stats.html

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
          name: 'refine@' + process.env.npm_package_version,
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
