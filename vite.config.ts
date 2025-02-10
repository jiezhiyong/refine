import { vitePlugin as remix } from '@remix-run/dev';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import * as fs from 'fs';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import { envOnlyMacros } from 'vite-env-only';
import tsconfigPaths from 'vite-tsconfig-paths';

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
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      ...(process.env.NODE_ENV === 'development' && {
        https: {
          key: fs.readFileSync('./oss.tcshuke.com+3-key.pem'),
          cert: fs.readFileSync('./oss.tcshuke.com+3.pem'),
        },
        proxy: {
          '/*': {
            target: 'https://oss.tcshuke.com:5173',
            secure: false,
            changeOrigin: true,
            headers: {
              'X-Forwarded-Proto': 'https',
            },
          },
        },
      }),
    },
    plugins: [
      tailwindcss(),
      envOnlyMacros(),
      remix({
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
          name: 'oss@' + process.env.npm_package_version,
          uploadLegacySourcemaps: {
            paths: ['.'],
          },
        },
      }),
    ],
    build: {
      sourcemap: true,
    },
  };
});
