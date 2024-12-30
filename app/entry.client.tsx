/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/namespace */
import * as Sentry from '@sentry/remix';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';
import { RemixBrowser, useLocation, useMatches } from '@remix-run/react';
import { startTransition, StrictMode, useEffect } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { defaultNS, fallbackLng, supportedLngs } from '~/config/i18n';

/** 初始化客户端 Sentry */
// const isProduction = import.meta.env.MODE === 'production';
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
  await i18next
    .use(initReactI18next) // Tell i18next to use the react-i18next plugin
    .use(Fetch) // Tell i18next to use the Fetch backend
    .use(I18nextBrowserLanguageDetector) // Setup a client-side language detector
    .init({
      defaultNS,
      fallbackLng,
      supportedLngs,
      ns: [defaultNS],
      detection: {
        // Here only enable htmlTag detection, we'll detect the language only
        // server-side with remix-i18next, by using the `<html lang>` attribute
        // we can communicate to the client the language detected server-side
        order: ['htmlTag'],
        // Because we only use htmlTag, there's no reason to cache the language
        // on the browser, so we disable it
        caches: [],
      },
      backend: {
        // We will configure the backend to fetch the translations from the
        // resource route /api/set-locales and pass the lng and ns as search params
        loadPath: '/api/set-locales?lng={{lng}}&ns={{ns}}',
      },
    });

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
// prepareApp().then(() => {
startTransition(() => {
  hydrateRoot(
    document,
    <I18nextProvider i18n={i18next}>
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    </I18nextProvider>
  );
});
// });
