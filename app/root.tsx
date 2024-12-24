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
  useRouteLoaderData,
  useNavigation,
  Outlet,
  useLoaderData,
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
import '~/styles/tailwind.css';
import styles from '~/styles/base.css?url';
import nProgressStyles from 'nprogress/nprogress.css?url';

/** 元数据 */
export const meta: MetaFunction = () => [
  { title: 'Remix' },
  { property: 'og:title', content: 'This app is the best.' },
  { name: 'description', content: 'Welcome to Remix!' },
];

/** 链接 */
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: nProgressStyles },
];

/** 自定义 HTTP 标头 */
export const headers: HeadersFunction = () => ({
  'X-Powered-By': 'Hugs',
});

/** 加载器 */
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookie(request);
  const { getTheme } = await themeSessionResolver(request);

  return {
    user: await getUser(request),
    theme: getTheme(),
    sidebarIsOpen: cookie?.sidebarIsOpen,
  };
};

/** 回退处理 */
export function HydrateFallback() {
  return <h1>Loading(root.HydrateFallback)...</h1>;
}

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  const routeLoaderData = useRouteLoaderData<typeof loader>('root');
  const [theme] = useTheme();

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <PreventFlashOnWrongTheme ssrTheme={Boolean(routeLoaderData.theme)} />
        <Links />
      </head>
      <body>
        <ModalProvider>{children}</ModalProvider>
        <Toaster richColors position="top-center" />
        <ScrollRestoration />
        <Scripts crossOrigin="anonymous" />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/api/set-theme">
      <App />
    </ThemeProvider>
  );
}

/** 根组件 */
export function App() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') nProgress.done();
    else nProgress.start();
  }, [navigation.state]);

  // TODO: 应用实时更新
  // useRealtimeRevalidation({ url: '/issues-events' });
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

/** 全局错误边界处理 */
export function ErrorBoundary() {
  const error = useRouteError() as ErrorResponse | Error;

  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText}`}>
        {error.status === 404 ? <NotFound /> : <PageError error={{ message: error.data }} />}
      </Document>
    );
  }

  return (
    <Document title="Oh no!">
      <PageError error={error as Error} />
    </Document>
  );
}

/** 重新验证处理 */
export function shouldRevalidate({ defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}
