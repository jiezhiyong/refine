import { User } from '@prisma/client';
import { Refine, ResourceProps } from '@refinedev/core';
import routerProvider, { UnsavedChangesNotifier } from '@refinedev/remix-router';
import type { ErrorResponse, HeadersFunction, LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import {
  data,
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useRouteError,
} from '@remix-run/react';
import * as Sentry from '@sentry/remix';
import { captureRemixErrorBoundaryError, withSentry } from '@sentry/remix';
import { Analytics } from '@vercel/analytics/remix';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { Loader } from 'lucide-react';
import nProgress from 'nprogress';
import nProgressStyles from 'nprogress/nprogress.css?url';
import { type PropsWithChildren, useEffect } from 'react';
import { PreventFlashOnWrongTheme, Theme, ThemeProvider } from 'remix-themes';

import { NotFound } from '~/components/404';
import { PageError } from '~/components/500';
import { RefineKbarCustom } from '~/components/refine/kbar';
import { Toaster } from '~/components/ui/sonner';
import { fallbackLanguage, LocaleLanguage } from '~/config/i18n';
import { setDataResources } from '~/config/resources';
import { TRole } from '~/constants/roles';
import { liveProvider } from '~/lib/refinedev-ably';
import { RefineKbarProvider } from '~/lib/refinedev-kbar';
import { cn } from '~/lib/utils';
import {
  ablyClient,
  accessControlProvider,
  auditLogProvider,
  authProvider,
  dataProvider,
  i18nProvider,
  notificationProvider,
  syncServiceLocaleToClient,
} from '~/providers';
import { getPermissions } from '~/services/casbin-permission.server';
import { getPreferencesCookie } from '~/services/cookie.server';
import { getRefineMenusResources } from '~/services/menu';
import { getUser } from '~/services/session.server';
import baseStyles from '~/styles/base.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import { PermissionRule } from '~/types/casbin';
import { generateSignature } from '~/utils/signature';

/** 元数据 */
export const meta: MetaFunction = () => [
  { property: 'og:title', content: 'This app is the best.' },
  { name: 'description', content: 'Welcome to Remix!' },
];

/** 链接 */
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles, id: 'tailwind-styles' },
  { rel: 'stylesheet', href: baseStyles, id: 'base-styles' },
  { rel: 'stylesheet', href: nProgressStyles, id: 'nprogress-styles' },
];

/** 自定义 HTTP 标头 */
export const headers: HeadersFunction = () => ({
  'Document-Policy': 'js-profiling',
});

/** 创建应用程序约定 */
export const handle = { i18n: ['translation'] };

/** 加载器返回数据类型定义 */
export type RootLoaderData = {
  user: (User & { role: TRole; roles: TRole[] }) | null;
  theme: Theme | null;
  sidebarClose?: string;
  locale: LocaleLanguage;
  permissions: PermissionRule[];
  permissionsSignature: string;
};

/** 加载器 */
export async function loader({ request }: LoaderFunctionArgs) {
  const [user, permissions, { locale, sidebarClose, theme }, menus] = await Promise.all([
    getUser(request),
    getPermissions({ request }),
    getPreferencesCookie(request),
    getRefineMenusResources(),
  ]);

  const localeNext = (locale || fallbackLanguage) as LocaleLanguage;
  await syncServiceLocaleToClient(localeNext);

  // 在服务端为权限数据生成签名
  const permissionsSignature = await generateSignature(permissions);

  // 设置服务端 Sentry 用户信息
  Sentry.setUser({ email: user?.email, username: user?.name || '?', id: user?.id });

  setDataResources(menus);
  const dashboardResource = (menus.find((r) => r.list)?.list as string) || '/404';

  return data({
    user,
    theme: theme || Theme.LIGHT,
    locale: localeNext,
    sidebarClose,
    permissions,
    permissionsSignature,
    menus,
    dashboardResource,
  });
}

/** 水和回退处理 */
export function HydrateFallback() {
  return (
    <h1 className="bg-background fixed inset-0 z-10 flex items-center justify-center">
      <Loader className="animate-spin" />
    </h1>
  );
}

function Document({
  children,
  title,
  specifiedTheme,
  script = true,
  locale,
}: PropsWithChildren<{
  title?: string;
  specifiedTheme: Theme | null | string;
  script?: boolean;
  locale: LocaleLanguage;
}>) {
  const { permissions, permissionsSignature, user, menus } = useLoaderData<typeof loader>();

  // 设置客户端 Sentry 用户信息
  Sentry.setUser({ email: user?.email, username: user?.name || '?', id: user?.id });

  // 重新登录后因为 window.__PERMISSIONS_DATA__ 设置成功时机不能确保早于客户端内层路由调用 useCan 的时机
  // 所以这里手动设置一下
  authProvider.setPermissions(permissions);

  return (
    <html lang={locale} className={cn(specifiedTheme ?? 'light')} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <PreventFlashOnWrongTheme ssrTheme={Boolean(specifiedTheme)} />
        <Links />
      </head>
      <body>
        {/* <DevtoolsProvider url="http://localhost:5173"> */}
        <RefineKbarProvider>
          <Refine
            resources={menus as ResourceProps[]}
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            authProvider={authProvider}
            accessControlProvider={accessControlProvider}
            notificationProvider={notificationProvider}
            i18nProvider={i18nProvider}
            auditLogProvider={auditLogProvider}
            liveProvider={liveProvider(ablyClient)}
            options={{
              disableTelemetry: true,
              mutationMode: 'pessimistic',
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              liveMode: 'auto',

              reactQuery: {
                clientConfig: {
                  defaultOptions: { queries: { networkMode: 'always' }, mutations: { networkMode: 'always' } },
                },
              },

              projectId: 'WYVW2v-jZ8p3m-yjM2Ba',
            }}
            onLiveEvent={(event) => {
              console.log('@root.onLiveEvent', event);
            }}
          >
            {children}
            <UnsavedChangesNotifier />
            <RefineKbarCustom />
            {/* <DevtoolsPanel /> */}
          </Refine>
        </RefineKbarProvider>
        {/* </DevtoolsProvider> */}
        <ScrollRestoration />
        <Analytics />
        <SpeedInsights />
        {script && <Scripts crossOrigin="anonymous" />}

        {/* 注入权限数据和签名、菜单资源到全局变量 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__PERMISSIONS_DATA__ = {
                permissions: ${JSON.stringify(permissions)},
                signature: "${permissionsSignature}"
              };
              window.__MENUS__ = ${JSON.stringify(menus)};
            `,
          }}
        />
      </body>
    </html>
  );
}

function DocumentWithThemeProviders({
  children,
  title,
  script = true,
}: PropsWithChildren<{ title?: string; script?: boolean }>) {
  const { theme, locale } = useLoaderData<typeof loader>() || {};

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/api/set-preferences">
      <Document title={title} specifiedTheme={theme} script={script} locale={locale}>
        {children}
        <Toaster richColors position="top-right" />
      </Document>
    </ThemeProvider>
  );
}

function App() {
  const navigation = useNavigation();

  nProgress.configure({ showSpinner: false });
  useEffect(() => {
    if (navigation.state === 'idle') nProgress.done();
    else nProgress.start();
  }, [navigation.state]);

  return (
    <DocumentWithThemeProviders>
      <Outlet />
    </DocumentWithThemeProviders>
  );
}

/** 根组件 */
export default withSentry(App);

/** 全局错误边界处理 */
export function ErrorBoundary() {
  const error = useRouteError() as ErrorResponse | Error;
  captureRemixErrorBoundaryError(error);

  if (isRouteErrorResponse(error)) {
    return (
      <DocumentWithThemeProviders title={`${error.status} ${error.statusText}`} script={false}>
        {error.status === 404 ? <NotFound /> : <PageError error={{ message: error.data }} />}
      </DocumentWithThemeProviders>
    );
  }

  return (
    <DocumentWithThemeProviders title="Oh no!" script={false}>
      <PageError error={error as Error} />
    </DocumentWithThemeProviders>
  );
}
