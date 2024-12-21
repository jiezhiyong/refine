import nProgress from 'nprogress';
import { type PropsWithChildren } from 'react';
import type {
  ActionFunction,
  ErrorResponse,
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import type { ShouldRevalidateFunctionArgs } from '@remix-run/react';
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  useRouteLoaderData,
  useOutlet,
  useLocation,
  useNavigation,
  useMatches,
} from '@remix-run/react';
import { redirect } from '@remix-run/node';
import type { CookiePreferences } from '~/services/cookie.server';
import { getCookie, signedCookie } from '~/services/cookie.server';
import { getUser } from '~/services/session.server';
import { useRealtimeRevalidation } from '~/hooks/use-realtime-revalidation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Toaster } from '~/components-shadcn/sonner';
import { ModalProvider } from '~/hooks/use-modal';

/** 全局样式、插件样式 */
import '~/styles/tailwind.css';
import styles from '~/styles/base.css?url';
import nProgressStyles from 'nprogress/nprogress.css?url';
import PageError from './components/500';
import NotFound from './components/404';

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

// 加载器
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await getCookie(request);

  return {
    user: await getUser(request),
    theme: cookie?.theme,
    sidebarIsOpen: cookie?.sidebarIsOpen,
  };
};

/** 操作函数 */
export const action: ActionFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await signedCookie.parse(cookieHeader)) as CookiePreferences;
  const bodyParams = await request.formData();

  if (bodyParams.get('sidebarIsOpen') === 'false') {
    cookie.sidebarIsOpen = false;
  }

  return redirect('/', {
    headers: {
      'Set-Cookie': await signedCookie.serialize(cookie),
    },
  });
};

/** 回退处理 */
export function HydrateFallback() {
  return <h1>Loading(root.HydrateFallback)...</h1>;
}

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  const routeLoaderData = useRouteLoaderData<typeof loader>('root');
  const matches = useMatches();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {title && <title>{title}</title>}
        <Links />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --theme: ${routeLoaderData?.theme || 'light'} }`,
          }}
        />
      </head>
      <body>
        <header>
          <ol>
            {matches
              .filter((match) => match.handle && match.handle.breadcrumb)
              .map((match, index) => (
                <li key={index}>{match.handle.breadcrumb(match)}</li>
              ))}
          </ol>
        </header>
        <ModalProvider>{children}</ModalProvider>
        <Toaster richColors position="top-center" />
        <ScrollRestoration />
        <Scripts crossOrigin="anonymous" />
      </body>
    </html>
  );
}

/** 根组件 */
export default function App() {
  const outlet = useOutlet();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') nProgress.done();
    else nProgress.start();
  }, [navigation.state]);

  useRealtimeRevalidation({ url: '/issues-events' });
  return (
    <Document>
      <AnimatePresence mode="wait" initial={false}>
        <motion.main key={useLocation().pathname} initial={{ x: '10%', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
          {outlet}
        </motion.main>
      </AnimatePresence>
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
