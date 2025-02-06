// import { type ActionFunctionArgs } from '@remix-run/node';
// import { Theme } from 'remix-themes';
// import { themeSessionResolver } from '~/services/theme.server';

// export async function action({ request }: ActionFunctionArgs) {
//   const session = await themeSessionResolver(request);
//   const { theme } = await request.json();

//   if (!theme || ![Theme.LIGHT, Theme.DARK].includes(theme)) {
//     return Response.json({ success: false, message: 'Invalid theme' }, { status: 400 });
//   }

//   session.setTheme(theme);

//   return Response.json({ success: true }, { headers: { 'Set-Cookie': await session.commit() } });
// }
