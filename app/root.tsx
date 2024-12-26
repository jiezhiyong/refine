import * as Sentry from '@sentry/remix';
import { captureRemixErrorBoundaryError, withSentry } from '@sentry/remix';
import nProgress from 'nprogress';
import { type PropsWithChildren } from 'react';
import type { ErrorResponse, HeadersFunction, LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
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
  useRouteLoaderData,
} from '@remix-run/react';
import { getCookie } from '~/services/cookie.server';
import { getUser, themeSessionResolver } from '~/services/session.server';
import { useEffect } from 'react';
import { Toaster } from '~/components-shadcn/sonner';
import { ModalProvider } from '~/hooks/use-modal';
import PageError from '~/components/500';
import NotFound from '~/components/404';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';
import { cn } from '~/utils/cn';

/** 全局样式、插件样式 */
import tailwindStyles from '~/styles/tailwind.css?url';
import baseStyles from '~/styles/base.css?url';
import nProgressStyles from 'nprogress/nprogress.css?url';
import { Loader } from 'lucide-react';

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
  'X-Powered-By': 'GoodMan',
});

/** 加载器 */
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookie(request);
  const user = await getUser(request);
  const { getTheme } = await themeSessionResolver(request);

  Sentry.setUser({ email: user?.email, username: user?.username, id: user?.id });
  return {
    user,
    theme: getTheme(),
    sidebarIsOpen: cookie?.sidebarIsOpen,
  };
};

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
  sessionTheme,
  script = true,
}: PropsWithChildren<{ title?: string; sessionTheme?: string; script?: boolean }>) {
  const [theme] = useTheme();

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <PreventFlashOnWrongTheme ssrTheme={Boolean(sessionTheme)} />
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

function UiThemeProviders({ children, title, script = true }: PropsWithChildren<{ title?: string; script?: boolean }>) {
  const data = useRouteLoaderData<typeof loader>('root');
  const theme = data?.theme;

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/api/set-theme">
      <Document title={title} sessionTheme={theme} script={script}>
        {children}
      </Document>
    </ThemeProvider>
  );
}

function App() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') nProgress.done();
    else nProgress.start();
  }, [navigation.state]);

  // TODO: 实时更新
  // useRealtimeRevalidation({ url: '/issues-events' });
  return (
    <UiThemeProviders>
      <Outlet />
    </UiThemeProviders>
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
      <UiThemeProviders title={`${error.status} ${error.statusText}`} script={false}>
        {error.status === 404 ? <NotFound /> : <PageError error={{ message: error.data }} />}
      </UiThemeProviders>
    );
  }

  return (
    <UiThemeProviders title="Oh no!" script={false}>
      <PageError error={error as Error} />
    </UiThemeProviders>
  );
}

/** 重新验证处理 */
export function shouldRevalidate({ defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}
