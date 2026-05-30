import { captureException, isNodeEnv } from '@sentry/core';
import { isRouteErrorResponse } from 'react-router';

/**
 * 捕获 React Router ErrorBoundary 中的客户端运行时错误。
 * 服务端错误由 entry.server 的 handleError 处理；Route Error Response 不在此上报。
 */
export function captureReactRouterErrorBoundaryError(error: unknown): void {
  if (isNodeEnv() || isRouteErrorResponse(error) || !(error instanceof Error)) {
    return;
  }

  captureException(error, {
    mechanism: {
      type: 'instrument',
      handled: false,
      data: {
        function: 'ReactError',
      },
    },
  });
}
