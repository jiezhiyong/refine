// import { type LoaderFunctionArgs } from '@remix-run/node';
// import { fallbackLanguage, LocaleLanguage } from '~/config/i18n';
// import { getPreferencesNextCookie } from '~/services/cookie.server';

// export async function loader({ request }: LoaderFunctionArgs) {
//   const url = new URL(request.url);
//   const locale = (url.searchParams.get('locale') || fallbackLanguage) as LocaleLanguage;

//   const headers = new Headers();

//   headers.append('Set-Cookie', await getPreferencesNextCookie(request, { locale }));

//   return Response.json({ data: { locale } }, { headers });
// }
