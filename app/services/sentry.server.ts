import * as SentryProfiling from '@sentry/profiling-node';
import * as Sentry from '@sentry/remix';

let isInitialized = false;

export function initSentry() {
  if (isInitialized) {
    return;
  }

  Sentry.init({
    dsn: process.env.VITE_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: 'oss@' + process.env.npm_package_version,
    tracesSampleRate: 1,
    autoInstrumentRemix: true,
    integrations: [
      Sentry.prismaIntegration(),
      Sentry.anrIntegration({ captureStackTrace: true }),
      Sentry.extraErrorDataIntegration(),
      SentryProfiling.nodeProfilingIntegration(),
    ],
  });

  isInitialized = true;
}
