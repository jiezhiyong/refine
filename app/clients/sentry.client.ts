/* eslint-disable import/namespace */
import { useLocation, useMatches } from '@remix-run/react';
import * as Sentry from '@sentry/remix';
import { useEffect } from 'react';

import { baseUrl } from '~/config/base-url';
import { TAny } from '~/types/any';

let isInitialized = false;

// 初始化客户端 Sentry
// https://docs.sentry.io/platforms/javascript/guides/remix/
export function initSentry() {
  if (isInitialized) {
    return;
  }

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: 'oss@' + import.meta.env.npm_package_version,

    integrations: [
      Sentry.browserSessionIntegration(),
      Sentry.browserTracingIntegration({ useEffect, useLocation, useMatches }),
      Sentry.browserProfilingIntegration(),
      Sentry.contextLinesIntegration(),
      Sentry.replayIntegration({ maskAllText: false, blockAllMedia: false }),
      Sentry.extraErrorDataIntegration(),
      Sentry.httpClientIntegration({
        failedRequestTargets: [baseUrl], // 站内请求错误已在服务端捕获
      }),
      Sentry.reportingObserverIntegration(),
    ],

    sendDefaultPii: false,
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^\/api/, baseUrl],
    profilesSampleRate: 1.0,
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    normalizeDepth: 4,

    beforeBreadcrumb(breadcrumb) {
      return breadcrumb;
    },
    beforeSend(event) {
      // 过滤掉手动取消的操作错误
      const serialized = event.extra?.__serialized__ as Record<string, TAny>;
      if (serialized?.type === 'cancelation' && serialized?.msg === 'operation is manually canceled') {
        return null;
      }

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
