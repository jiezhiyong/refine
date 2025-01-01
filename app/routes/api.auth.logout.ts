import * as Sentry from '@sentry/remix';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { destroySession, getSession } from '~/services/session.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  Sentry.setUser(null);

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};
