/* eslint-disable import/namespace */
import * as Sentry from '@sentry/remix';
import { RemixBrowser, useLocation, useMatches } from '@remix-run/react';
import { startTransition, StrictMode, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';

/** 初始化客户端 Sentry */
const isProduction = import.meta.env.MODE === 'production';
// Sentry.init({
//   dsn: import.meta.env.VITE_SENTRY_DSN,
//   environment: import.meta.env.MODE,
//   release: 'remix-oss@' + import.meta.env.npm_package_version,
//   integrations: [
//     Sentry.browserTracingIntegration({ useEffect, useLocation, useMatches }),
//     Sentry.browserProfilingIntegration(),
//     Sentry.replayIntegration({ maskAllText: isProduction, blockAllMedia: isProduction }),
//     Sentry.captureConsoleIntegration(),
//     Sentry.extraErrorDataIntegration(),
//     Sentry.httpClientIntegration(),
//   ],
//   sendDefaultPii: true,
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ['localhost', /^\/api/, 'https://external-api.com'],
//   profilesSampleRate: 1.0,
//   replaysSessionSampleRate: isProduction ? 0.1 : 1.0,
//   replaysOnErrorSampleRate: 1.0,
//   beforeSend(event) {
//     if (event.exception && event.event_id && !window?._isRenderedReortDialog) {
//       window._isRenderedReortDialog = true;
//       Sentry.showReportDialog({ eventId: event.event_id });
//     }
//     return event;
//   },
// });

async function prepareApp() {
  if (process.env.NODE_ENV !== 'development') {
    return Promise.resolve();
  }

  const { worker } = await import('./mocks/browser');

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (
        request.url.includes('node_modules') ||
        request.url.includes('.vite') ||
        request.url.includes('.js') ||
        request.url.includes('.css') ||
        request.url.includes('.ico') ||
        request.url.includes('.png') ||
        request.url.includes('.svg')
      ) {
        return;
      }
      print.warning();
    },
  });
}

/** 浏览器的入口点 - 初始化客户端库、添加仅限客户端的提供程序等 */
prepareApp().then(() => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
});
