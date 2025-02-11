import { PassThrough } from 'node:stream';

import type { EntryContext } from '@remix-run/node';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import * as Sentry from '@sentry/remix';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';

import { initSentry } from '~/services/sentry.server';
import { TAny } from '~/types';

/** 初始化服务端 Sentry */
initSentry();

const ABORT_DELAY = 5_000;

/** 初始化 Socket.IO 服务器 */
// let httpServer: ReturnType<typeof createServer>;
// if (typeof process !== 'undefined') {
//   httpServer = createServer();
//   initSocketIO(httpServer);

//   const port = process.env.SOCKET_PORT || 3001;
//   httpServer.listen(port, () => {
//     console.log(`[Socket.IO] server listening on port ${port}`);
//   });
// }

// if (process.env.NODE_ENV === 'development') {
//   server.listen({
//     onUnhandledRequest: ({ url }) => {
//       if (url.includes('sentry')) {
//         return 'bypass';
//       }
//       return 'warn';
//     },
//   });

//   server.events.on('request:match', ({ request }) => {
//     console.log('[MSW] Intercepted match:', `(${request.method}) ${request.url}`);
//   });
// }

/** 处理请求 */
export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}

/** 处理 Bot 请求 */
function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />,
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

/** 处理浏览器请求 */
function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />,
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
export const handleError = Sentry.wrapHandleErrorWithSentry((_error, { request }: TAny) => {
  if (!request.signal.aborted) {
    // console.error('@entry.server.handleError', error);
  }
});
