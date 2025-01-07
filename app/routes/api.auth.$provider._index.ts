import { type ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { TAny } from '~/types/any';
import { getSession, commitSession } from '~/services/session.server';

export async function loader() {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { provider } = params;
    const user = await authenticator.authenticate(provider || 'unknown', request);

    if (user) {
      const session = await getSession(request.headers.get('Cookie'));
      session.set('user', user);

      const headers = new Headers();
      headers.append('Set-Cookie', await commitSession(session));

      return Response.json(user, { headers });
    }

    return Response.json({ message: 'Authentication failed' }, { status: 401 });
  } catch (error: TAny) {
    return Response.json({ message: error?.message || 'Authentication failed' }, { status: 401 });
  }
};
