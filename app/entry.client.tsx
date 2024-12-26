import * as Sentry from '@sentry/remix';
import { RemixBrowser, useLocation, useMatches } from '@remix-run/react';
import { startTransition, StrictMode, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';

/** 初始化客户端 Sentry */
Sentry.init({
  dsn: 'https://75b9ac913e289a295b7265065fd2a1cf@o62860.ingest.us.sentry.io/4508533052801024',
  integrations: [
    Sentry.browserTracingIntegration({ useEffect, useLocation, useMatches }),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true }),
    Sentry.feedbackIntegration({
      colorScheme: 'system',
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^\/api/, 'https://external-api.com'],
  profilesSampleRate: 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysOnErrorSampleRate: 1.0,
  beforeSend(event) {
    if (event.exception && event.event_id) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});

/** 浏览器的入口点 - 初始化客户端库、添加仅限客户端的提供程序等 */
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
