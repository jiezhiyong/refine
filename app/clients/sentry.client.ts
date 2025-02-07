/* eslint-disable import/namespace */
import { useLocation, useMatches } from '@remix-run/react';
import * as Sentry from '@sentry/remix';
import { useEffect } from 'react';

let isInitialized = false;

// 初始化客户端 Sentry
// https://docs.sentry.io/platforms/javascript/guides/remix/
export function initSentry() {
  if (isInitialized) {
    return;
  }

  const isProduction = import.meta.env.MODE === 'production';

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: 'oss@' + import.meta.env.npm_package_version,

    integrations: [
      Sentry.browserTracingIntegration({ useEffect, useLocation, useMatches }),
      Sentry.browserProfilingIntegration(),
      Sentry.replayIntegration({ maskAllText: isProduction, blockAllMedia: isProduction }),
      Sentry.extraErrorDataIntegration(),
      Sentry.httpClientIntegration(),
    ],

    sendDefaultPii: true,
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^\/api/, 'https://oss.tcshuke.com.com'],
    profilesSampleRate: 1.0,
    replaysSessionSampleRate: isProduction ? 0.1 : 1.0,
    replaysOnErrorSampleRate: 1.0,
    normalizeDepth: 4,

    beforeBreadcrumb(breadcrumb) {
      return breadcrumb;
    },
    beforeSend(event) {
      // 出现错误时自动弹窗、引导用户反馈
      // if (event.exception && event.event_id && !window?._isRenderedReortDialog) {
      //   window._isRenderedReortDialog = true;
      //   Sentry.showReportDialog({ eventId: event.event_id });
      // }
      return event;
    },
  });

  isInitialized = true;
}
