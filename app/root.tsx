import * as Sentry from '@sentry/remix';
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
import { getUser, themeSessionResolver } from '~/services/session.server';
import { useEffect } from 'react';
import { Toaster } from '~/components-shadcn/sonner';
import { ModalProvider } from '~/hooks/use-modal';
import PageError from '~/components/500';
import NotFound from '~/components/404';
import { PreventFlashOnWrongTheme, Theme, ThemeProvider } from 'remix-themes';
import { cn } from '~/utils/cn';
import { Loader } from 'lucide-react';
import i18nServer from '~/services/i18n.server';
import { useChangeLanguage } from 'remix-i18next/react';

/** 全局样式、插件样式 */
import tailwindStyles from '~/styles/tailwind.css?url';
import baseStyles from '~/styles/base.css?url';
import nProgressStyles from 'nprogress/nprogress.css?url';
import { User } from '@prisma/client';
import { getCookie, preferencesCookie } from '~/services/cookie.server';
import { TypeLocaleLanguage } from '~/config/i18n';

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
  user: User;
  theme: Theme | null;
  sidebarIsClose?: string;
  locale: TypeLocaleLanguage;
};

/** 加载器 */
export async function loader({ request }: LoaderFunctionArgs) {
  const [cookie, user, themeResolver, locale] = await Promise.all([
    getCookie(request),
    getUser(request),
    themeSessionResolver(request),
    i18nServer.getLocale(request),
  ]);

  if (user?.id) {
    Sentry.setUser({ email: user?.email, username: user?.username || '?', id: user?.id });
  }

  return data(
    {
      user: user || ({} as User),
      theme: themeResolver.getTheme(),
      sidebarIsClose: cookie?.sidebarIsClose,
      locale,
    },
    {
      headers: {
        'Set-Cookie': await preferencesCookie.serialize({ ...cookie, lng: locale }),
      },
    }
  );
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
}: PropsWithChildren<{ title?: string; specifiedTheme: Theme | null; script?: boolean; locale?: string }>) {
  return (
    <html lang={locale ?? 'en'} className={cn(specifiedTheme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <PreventFlashOnWrongTheme ssrTheme={Boolean(specifiedTheme)} />
        <Links />
      </head>
      <body>
        <ModalProvider>{children}</ModalProvider>
        <Toaster richColors position="top-center" />
        <ScrollRestoration />
        {script && <Scripts crossOrigin="anonymous" />}
      </body>
    </html>
  );
}

function WithThemeProviders({
  children,
  title,
  script = true,
}: PropsWithChildren<{ title?: string; script?: boolean }>) {
  const { theme, locale } = useLoaderData<typeof loader>() || {};

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/api/set-theme">
      <Document title={title} specifiedTheme={theme} script={script} locale={locale}>
        {children}
      </Document>
    </ThemeProvider>
  );
}

function App() {
  const navigation = useNavigation();
  const { locale } = useLoaderData<typeof loader>();
  useChangeLanguage(locale);

  useEffect(() => {
    if (navigation.state === 'idle') nProgress.done();
    else nProgress.start();
  }, [navigation.state]);

  // TODO: 实时更新
  // useRealtimeRevalidation({ url: '/issues-events' });
  return (
    <WithThemeProviders>
      <Outlet />
    </WithThemeProviders>
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
      <WithThemeProviders title={`${error.status} ${error.statusText}`} script={false}>
        {error.status === 404 ? <NotFound /> : <PageError error={{ message: error.data }} />}
      </WithThemeProviders>
    );
  }

  return (
    <WithThemeProviders title="Oh no!" script={false}>
      <PageError error={error as Error} />
    </WithThemeProviders>
  );
}

/** 重新验证处理 */
export function shouldRevalidate({ defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}
