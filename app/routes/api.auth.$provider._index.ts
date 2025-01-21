import { type ActionFunctionArgs } from '@remix-run/node';
import { EnumAuthProvider } from '~/constants';
import { authenticator, commitSession, getSession } from '~/services';
import { TAny } from '~/types';

export async function loader() {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { provider } = params as { provider: EnumAuthProvider };
    if (!provider || ![EnumAuthProvider.userpass, EnumAuthProvider.tcshuke].includes(provider)) {
      return Response.json({ message: 'Method not allowed' }, { status: 405 });
    }

    // 处理不同的认证提供者
    const user = await authenticator.authenticate(provider, request);

    // 处理 userpass 认证提供者成功回调 - 将用户信息存入session
    if (provider === EnumAuthProvider.userpass && user) {
      const session = await getSession(request.headers.get('Cookie'));
      session.set('user', user);

      const headers = new Headers();
      headers.append('Set-Cookie', await commitSession(session));

      return Response.json(user, { headers });
    }

    return Response.json({ message: 'Authentication failed, unable to get user.' }, { status: 401 });
  } catch (error: TAny) {
    // 处理 OAuth2.tcshuke 认证提供者 302 重定向
    if (error.status === 302) {
      return error;
    }

    console.error('@authenticator', error);
    return Response.json({ message: error?.message || 'Authentication failed, unknown error.' }, { status: 401 });
  }
};
