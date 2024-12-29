import * as Sentry from '@sentry/remix';
import * as SentryProfiling from '@sentry/profiling-node';
import type { EntryContext } from '@remix-run/node';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { TAny } from './types/any';
import { isbot } from 'isbot';
import { server } from '../mock/node';
import { createInstance, i18n as i18next } from 'i18next';
import i18nServer from './services/i18n.server';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import * as i18n from './config/i18n';

const ABORT_DELAY = 5_000;

if (process.env.NODE_ENV === 'development') {
  server.listen({
    onUnhandledRequest: ({ url }) => {
      if (url.includes('sentry')) {
        return 'bypass';
      }
      return 'warn';
    },
  });

  server.events.on('request:match', ({ request }) => {
    console.log('[MSW] Intercepted match:', `(${request.method}) ${request.url}`);
  });
}

/** 初始化服务端的 Sentry */
Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  release: 'remix-oss@' + process.env.npm_package_version,
  tracesSampleRate: 1,
  autoInstrumentRemix: true,
  integrations: [
    Sentry.prismaIntegration(),
    Sentry.anrIntegration({ captureStackTrace: true }),
    Sentry.extraErrorDataIntegration(),
    SentryProfiling.nodeProfilingIntegration(),
  ],
});

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const instance = createInstance();
  const lng = await i18nServer.getLocale(request);
  const ns = i18nServer.getRouteNamespaces(remixContext);

  await instance.use(initReactI18next).init({ ...i18n, lng, ns });

  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext, instance)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext, instance);
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  i18next: i18next
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={i18next}>
        <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      </I18nextProvider>,
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error('@handleBotRequest', error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  i18next: i18next
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={i18next}>
        <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      </I18nextProvider>,
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error('@handleBrowserRequest', error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

/** 错误处理 */
export const handleError = Sentry.wrapHandleErrorWithSentry((error, { request }: TAny) => {
  if (!request.signal.aborted) {
    console.error('@entry.server.handleError', error);
  }
});
