import type { ActionFunction, HeadersFunction, LinksFunction, LoaderFunction } from '@remix-run/node';
import type { MetaFunction, ShouldRevalidateFunctionArgs } from '@remix-run/react';
import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  useRouteLoaderData,
  useParams,
  useFetcher,
  useSubmit,
  useNavigation,
  json,
  useSearchParams,
} from '@remix-run/react';
import type { CookiePreferences } from './cookies.server';
import appStylesHref from './app.css?url';
import { signedCookie } from './cookies.server';
import { getSession } from './session';

/** 全局样式 */
import './tailwind.css';

/** 元数据 */
export const meta: MetaFunction = () => [
  { title: 'Very cool app | Remix' },
  { property: 'og:title', content: 'Very cool app' },
  { name: 'description', content: 'This app is the best' },
];

/** 链接 */
export const links: LinksFunction = () => [
  { rel: 'icon', href: '/favicon.png', type: 'image/png' },
  { rel: 'stylesheet', href: appStylesHref },
];

/** 自定义 HTTP 标头 */
export const headers: HeadersFunction = () => ({
  'X-Powered-By': 'Hugs',
});

/** 加载器 */
export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  const session = await getSession(cookieHeader);
  const cookie = (await signedCookie.parse(cookieHeader)) as CookiePreferences;

  if (!session.has('userId')) {
    throw redirect('/login', 302);
  }

  const url = new URL(request.url);
  const query = url.searchParams.get('query'); // .getAll('brand')

  // const USER = await prisma.user.findMany();

  return {
    theme: cookie?.theme,
    sidebarIsOpen: cookie?.sidebarIsOpen,
    ENV: {
      CLOUDINARY_ACCT: process.env.CLOUDINARY_ACCT,
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    },
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

/** 根组件 */
export default function App() {
  return <Outlet />;
}

/** 布局 */
export function Layout({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const routeLoaderData = useRouteLoaderData('root');
  const routeError = useRouteError() as ErrorResponse | Error;
  const navigation = useNavigation();
  const submit = useSubmit();
  const sidebarFetcher = useFetcher();
  const params = useParams();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --theme: ${routeLoaderData?.theme || 'light'} }`,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts crossOrigin="anonymous" />
        <LiveReload />
      </body>
    </html>
  );
}

/** 回退处理 */
export function HydrateFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />
        <p className="mt-4 text-gray-600">页面加载中...</p>
      </div>
    </div>
  );
}

/** 全局错误边界处理 */
export function ErrorBoundary() {
  const error = useRouteError() as ErrorResponse | Error;

  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {isRouteErrorResponse(error) && (
          <>
            <h1>
              {error.status} {error.statusText}
            </h1>
            <p>{error.data}</p>
          </>
        )}

        {error instanceof Error && (
          <>
            <h1>Error!</h1>
            <p>{error.message}</p>
          </>
        )}

        {!isRouteErrorResponse(error) && !(error instanceof Error) && <h1>Unknown Error</h1>}

        <Scripts />
      </body>
    </html>
  );
}

/** 重新验证处理 */
export function shouldRevalidate({ defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}

// export default function App() {
//   const { contacts, q, sidebarIsOpen: initialSidebarState } = useLoaderData<typeof loader>();
//   const [sidebarIsOpen, setSidebarIsOpen] = useState(initialSidebarState);
//   const navigation = useNavigation();
//   const submit = useSubmit();
//   const sidebarFetcher = useFetcher();
//   const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');
//   const params = useParams();

//   useEffect(() => {
//     const searchField = document.getElementById('q');

//     if (searchField instanceof HTMLInputElement) {
//       searchField.value = q || '';
//     }
//   }, [q]);

//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta content="width=device-width, initial-scale=1" name="viewport" />
//         <Meta />
//         <Links />
//       </head>
//       <body className={`bg-background text-foreground`}>
//         <div className="flex h-screen flex-col">
//           <div className="flex flex-1">
//             <Sidebar
//               isOpen={sidebarIsOpen}
//               onToggle={(isOpen) => {
//                 setSidebarIsOpen(isOpen);
//                 sidebarFetcher.submit({ sidebar: isOpen ? 'open' : 'closed' }, { method: 'post', action: '/sidebar' });
//               }}
//             >
//               <div id="sidebar">
//                 <h1>Remix Contacts</h1>
//                 <div>
//                   <Form
//                     id="search-form"
//                     role="search"
//                     onChange={(event) => {
//                       const isFirstSearch = q === null;

//                       submit(event.currentTarget, {
//                         replace: !isFirstSearch,
//                       });
//                     }}
//                   >
//                     <input
//                       aria-label="Search contacts"
//                       className={searching ? 'loading' : ''}
//                       defaultValue={q || ''}
//                       id="q"
//                       name="q"
//                       placeholder="Search"
//                       type="search"
//                     />
//                     <div aria-hidden hidden={!searching} id="search-spinner" />
//                   </Form>
//                   <Form method="post">
//                     <Button type="submit">New</Button>
//                   </Form>
//                 </div>
//                 <nav>
//                   {contacts.length ? (
//                     <ul>
//                       {contacts.map((contact) => (
//                         <li key={contact.id}>
//                           <NavLink
//                             className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
//                             to={`contacts/${contact.id}`}
//                           >
//                             {contact.first || contact.last ? (
//                               <>
//                                 {contact.first} {contact.last}
//                               </>
//                             ) : (
//                               <i>No Name</i>
//                             )}
//                             {contact.favorite ? <span>★</span> : null}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>
//                       <i>No contacts</i>
//                     </p>
//                   )}
//                 </nav>
//               </div>
//             </Sidebar>

//             <div className={navigation.state === 'loading' && !searching ? 'loading' : ''} id="detail">
//               <PendingNavigation />
//               <Outlet />
//             </div>
//           </div>
//         </div>
//         <ScrollRestoration />
//         <Scripts />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }
