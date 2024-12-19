// import type { ActionFunctionArgs } from '@remix-run/node';
// import { data } from '@remix-run/node';
// import { prefs } from '~/prefs';
// import type { CookiePreferences } from '~/prefs';

// // 移除 loader，我们将使用 useFetcher 来管理状态
// export async function action({ request }: ActionFunctionArgs) {
//   const cookieHeader = request.headers.get('Cookie');
//   const cookie = ((await prefs.parse(cookieHeader)) as CookiePreferences) || {};
//   const formData = await request.formData();

//   const isOpen = formData.get('sidebar') === 'open';

//   cookie.sidebarIsOpen = isOpen;

//   return data(
//     { sidebarIsOpen: isOpen },
//     {
//       headers: {
//         'Set-Cookie': await prefs.serialize(cookie),
//       },
//     }
//   );
// }
