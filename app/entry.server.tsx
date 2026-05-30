import { PassThrough } from 'node:stream';

import { createReadableStreamFromReadable } from '@react-router/node';
import * as Sentry from '@sentry/react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { ServerRouter } from 'react-router';
import type { EntryContext } from 'react-router';

import { initSentry } from '@/services/sentry.server';

/** 初始化服务端 Sentry */
// 使用立即执行的异步函数来处理可选的 profiling 集成加载
(async () => {
  try {
    await initSentry();
  } catch (error) {
    console.error('Sentry 初始化失败:', error);
  }
})();

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
  reactRouterContext: EntryContext
) {
  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(request, responseStatusCode, responseHeaders, reactRouterContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, reactRouterContext);
}

/** 处理 Bot 请求 */
function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(<ServerRouter context={reactRouterContext} url={request.url} />, {
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
    });

    setTimeout(abort, ABORT_DELAY);
  });
}

/** 处理浏览器请求 */
function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(<ServerRouter context={reactRouterContext} url={request.url} />, {
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
    });

    setTimeout(abort, ABORT_DELAY);
  });
}

/** 错误处理 */
export const handleError = Sentry.createSentryHandleError({ logErrors: false });
