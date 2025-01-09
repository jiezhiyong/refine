import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { TAny } from '~/types/any';
import { getSession, commitSession } from '~/services/session.server';
import { EnumAuthProvider } from '~/constants/auth';

export async function loader() {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { provider } = params as { provider: EnumAuthProvider };
    if (!provider || ![EnumAuthProvider.userpass, EnumAuthProvider.tcshuke].includes(provider)) {
      return Response.json({ message: 'Method not allowed' }, { status: 405 });
    }

    const user = await authenticator.authenticate(provider, request);
    console.log('authenticator', provider, user);

    if (user) {
      const session = await getSession(request.headers.get('Cookie'));
      session.set('user', user);

      const headers = new Headers();

      headers.append('Set-Cookie', await commitSession(session));

      return Response.json(user, { headers });
    }

    return Response.json({ message: 'Authentication failed, unable to get user.' }, { status: 401 });
  } catch (error: TAny) {
    // 处理 302 重定向
    if (error.status === 302) {
      const redirectUrl = error.headers.get('Location');
      if (redirectUrl) {
        return redirect(redirectUrl, { status: 302 });
      }
    }

    console.error('@authenticator', error.status, error);

    return Response.json({ message: error?.message || 'Authentication failed, unknown error.' }, { status: 401 });
  }
};
