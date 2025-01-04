import { type LoaderFunctionArgs } from '@remix-run/node';
import { fallbackLanguage } from '~/config/i18n';
import { commitSession, getSession } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const session = await getSession(request.headers.get('Cookie'));

  const locale = url.searchParams.get('locale') || fallbackLanguage;
  session.set('locale', locale);

  const headers = new Headers();
  headers.append('Set-Cookie', await commitSession(session));

  return Response.json({ data: { locale } }, { headers });
}
