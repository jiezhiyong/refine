import * as Sentry from '@sentry/remix';
import * as SentryProfiling from '@sentry/profiling-node';
import type { EntryContext } from '@remix-run/node';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { TAny } from './types/any';
import { isbot } from 'isbot';
import { server } from './mocks/node';

const ABORT_DELAY = 5_000;

if (process.env.NODE_ENV === 'development') {
  server.listen({
    onUnhandledRequest: 'bypass',
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

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer abortDelay={ABORT_DELAY} context={remixContext} url={request.url} />,
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
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer abortDelay={ABORT_DELAY} context={remixContext} url={request.url} />,
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
    console.error('@handleError', error);
  }
});
