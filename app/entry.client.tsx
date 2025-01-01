import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { initSentry } from './clients/sentry.client';

/** 初始化客户端 Sentry */
initSentry();

/** 初始化 Mock Service Worker */
async function prepareApp() {
  if (process.env.NODE_ENV !== 'development') {
    return Promise.resolve();
  }

  const { worker } = await import('../mock/browser');

  worker.events.on('request:match', ({ request }) => {
    console.log('[MSW] Request matched:', request.method, request.url);
  });

  return worker.start({
    onUnhandledRequest: 'bypass',
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
