import * as Sentry from '@sentry/remix';
import { RemixBrowser, useLocation, useMatches } from '@remix-run/react';
import { startTransition, StrictMode, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';

/**
 * 初始化 Sentry
 */
Sentry.init({
  dsn: 'https://75b9ac913e289a295b7265065fd2a1cf@o62860.ingest.us.sentry.io/4508533052801024',
  tracesSampleRate: 1,

  integrations: [
    Sentry.browserTracingIntegration({
      useEffect,
      useLocation,
      useMatches,
    }),
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});

/**
 * 浏览器的入口点 - 初始化客户端库、添加仅限客户端的提供程序等
 * https://remix.run/docs/en/main/file-conventions/entry.client
 */
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
