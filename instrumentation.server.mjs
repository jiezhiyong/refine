import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://75b9ac913e289a295b7265065fd2a1cf@o62860.ingest.us.sentry.io/4508533052801024",
    tracesSampleRate: 1,
    autoInstrumentRemix: true
})