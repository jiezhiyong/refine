export const frontRouteProjects = [
  {
    id: '1',
    title: 'ykcz',
    description: '利分期 ...',
    global: {
      sentryDsn: 'https://42ec2621ba4e4f2bbc7d883501447862@sentry.lylend.com/110',
      sentryTracesSampleRate: 1,
      sentryReplaysSessionSampleRate: 0.5,
      sentryReplaysOnErrorSampleRate: 0.5,
      platform: 'yk_h5',
      project: 'LFQ',
      apiBase: '',
      apiProxy: '/proxy',
    },
  },
  {
    id: '2',
    title: 'cxx',
    description: '程先享 ...',
    global: {
      sentryDsn: 'https://42ec2621ba4e4f2bbc7d883501447862@sentry.lylend.com/120',
      sentryTracesSampleRate: 1,
      sentryReplaysSessionSampleRate: 0.5,
      sentryReplaysOnErrorSampleRate: 0.5,
      platform: 'cxx_h5',
      project: 'CXX',
      apiBase: '',
      apiProxy: '/proxy',
    },
  },
];

export const frontRouteModules = [
  { projectId: '1', title: 'home' },
  { projectId: '2', title: 'setting' },
];
