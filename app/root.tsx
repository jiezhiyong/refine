import { User } from '@prisma/client';
import { Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import routerProvider, { UnsavedChangesNotifier } from '@refinedev/remix-router';
import type { ErrorResponse, HeadersFunction, LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import type { ShouldRevalidateFunctionArgs } from '@remix-run/react';
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
import { Loader } from 'lucide-react';
import nProgress from 'nprogress';
import nProgressStyles from 'nprogress/nprogress.css?url';
import { type PropsWithChildren, useEffect } from 'react';
import { PreventFlashOnWrongTheme, Theme, ThemeProvider } from 'remix-themes';

import { RefineKbar } from '~/component-refine';
import { NotFound, PageError } from '~/components';
import { Toaster } from '~/components-shadcn/sonner';
import { fallbackLanguage, LocaleLanguage } from '~/config/i18n';
import { dataResources } from '~/config/resources';
import { TRole } from '~/constants/roles';
import { RefineKbarProvider } from '~/lib/refinedev-kbar';
import {
  accessControlProvider,
  auditLogProvider,
  authProvider,
  dataProvider,
  i18nProvider,
  notificationProvider,
  syncServiceLocaleToClient,
} from '~/providers';
import { getPreferencesCookie, getUser } from '~/services';
import { getPermissions } from '~/services/casbin-permission.server';
import baseStyles from '~/styles/base.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import { PermissionRule } from '~/types/casbin';
import { cn } from '~/utils';
import { generateSignature } from '~/utils/signature';

/** 全局样式、插件样式 */

/** 元数据 */
export const meta: MetaFunction = () => [
  { property: 'og:title', content: 'This app is the best.' },
  { name: 'description', content: 'Welcome to Remix!' },
];

/** 链接 */
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: baseStyles },
  { rel: 'stylesheet', href: nProgressStyles },
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
  sidebarIsClose?: string;
  locale: LocaleLanguage;
  permissions: PermissionRule[];
  permissionsSignature: string;
};

/** 加载器 */
export async function loader({ request }: LoaderFunctionArgs) {
  const [user, permissions, { locale, sidebarIsClose, theme }] = await Promise.all([
    getUser(request),
    getPermissions({ request }),
    getPreferencesCookie(request),
  ]);

  const localeNext = locale || fallbackLanguage;
  await syncServiceLocaleToClient(localeNext);

  // 在服务端为权限数据生成签名
  const permissionsSignature = await generateSignature(permissions);

  return data({
    user,
    theme: theme || Theme.LIGHT,
    locale: localeNext,
    sidebarIsClose,
    permissions,
    permissionsSignature,
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
}: PropsWithChildren<{ title?: string; specifiedTheme: Theme | null; script?: boolean; locale: LocaleLanguage }>) {
  const { permissions, permissionsSignature, user } = useLoaderData<typeof loader>();

  // 设置 Sentry 用户信息
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
        <DevtoolsProvider>
          <RefineKbarProvider>
            <Refine
              resources={dataResources}
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              authProvider={authProvider}
              accessControlProvider={accessControlProvider}
              notificationProvider={notificationProvider}
              i18nProvider={i18nProvider}
              auditLogProvider={auditLogProvider}
              // liveProvider={liveProvider}
              options={{
                disableTelemetry: true,
                title: { icon: undefined, text: 'Refine & Remix' },
                mutationMode: 'pessimistic',
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: 'auto',
                reactQuery: {
                  clientConfig: {
                    defaultOptions: { queries: { networkMode: 'always' }, mutations: { networkMode: 'always' } },
                  },
                },
              }}
              onLiveEvent={(event) => {
                console.log('@onLiveEvent', event);
              }}
            >
              {children}
              <UnsavedChangesNotifier />
              <RefineKbar />
              <DevtoolsPanel />
            </Refine>
          </RefineKbarProvider>
        </DevtoolsProvider>
        <ScrollRestoration />
        {script && <Scripts crossOrigin="anonymous" />}

        {/* 注入权限数据和签名到全局变量 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__PERMISSIONS_DATA__ = {
                permissions: ${JSON.stringify(permissions)},
                signature: "${permissionsSignature}"
              };
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

/** 重新验证处理 */
export function shouldRevalidate({ defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}
