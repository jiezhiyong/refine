import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { Refine } from '@refinedev/core';
import routerProvider, { UnsavedChangesNotifier } from '@refinedev/remix-router';
import { captureRemixErrorBoundaryError, withSentry } from '@sentry/remix';
import nProgress from 'nprogress';
import { type PropsWithChildren } from 'react';
import type { ErrorResponse, HeadersFunction, LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import type { ShouldRevalidateFunctionArgs } from '@remix-run/react';
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  useNavigation,
  Outlet,
  data,
  useLoaderData,
} from '@remix-run/react';
import { useEffect } from 'react';
import { Toaster } from '~/components-shadcn/sonner';
import { PageError } from '~/components/500';
import { NotFound } from '~/components/404';
import { PreventFlashOnWrongTheme, Theme, ThemeProvider } from 'remix-themes';
import { cn } from '~/utils/cn';
import { Loader } from 'lucide-react';
import { User } from '@prisma/client';
import { getPreferencesCookie } from '~/services/cookie.server';
import { getUser } from '~/services/session.server';
import { fallbackLanguage, LocaleLanguage } from './config/i18n';
import { dataResources, dataProvider } from '~/providers/data';
import { authProvider } from '~/providers/auth';
import { accessControlProvider } from '~/providers/access-control';
// import { liveProvider } from '~/providers/live';
import { i18nProvider, syncServiceLocaleToClient } from '~/providers/i18n';
import { auditLogProvider } from '~/providers/audit-log';
import { notificationProvider } from '~/providers/notification';
import { TRole } from './constants/roles';
import { getPermissions } from './services/casbin-permission.server';

/** 全局样式、插件样式 */
import tailwindStyles from '~/styles/tailwind.css?url';
import baseStyles from '~/styles/base.css?url';
import nProgressStyles from 'nprogress/nprogress.css?url';
import { generateSignature } from './utils/signature';
import { PermissionRule } from './types/casbin';

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
    getPermissions(request),
    getPreferencesCookie(request),
  ]);

  const localeNext = locale || fallbackLanguage;
  await syncServiceLocaleToClient(localeNext);

  // 在服务端生成签名
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
    <h1 className="fixed inset-0 z-10 flex items-center justify-center bg-background">
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
  const { permissions, permissionsSignature } = useLoaderData<typeof loader>();

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
              title: {
                icon: undefined,
                text: 'Refine & Remix',
              },

              mutationMode: 'pessimistic',
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              liveMode: 'auto',

              reactQuery: {
                clientConfig: {
                  defaultOptions: { queries: { networkMode: 'always' }, mutations: { networkMode: 'always' } },
                },
              },

              projectId: 'v08e3x-vauZUB-n1Ntw2',
            }}
            onLiveEvent={(event) => {
              console.log('@onLiveEvent', event);
            }}
          >
            {children}
            <UnsavedChangesNotifier />
            <DevtoolsPanel />
          </Refine>
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
