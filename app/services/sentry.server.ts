import * as Sentry from '@sentry/react-router';

let isInitialized = true; // 暂时关闭

export function initSentry() {
  if (isInitialized) {
    return;
  }

  Sentry.init({
    dsn: process.env.VITE_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: 'refine@' + process.env.npm_package_version,
    tracesSampleRate: 1,
    integrations: [Sentry.prismaIntegration(), Sentry.extraErrorDataIntegration()],
  });

  isInitialized = true;
}
