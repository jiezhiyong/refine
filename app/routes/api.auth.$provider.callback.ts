import { LoaderFunctionArgs, redirect } from '@remix-run/node';

import { EnumAuthProvider } from '~/constants';
import { createUser, getUserByEmail } from '~/models/user.server';
import { authenticator, commitSession, getSession } from '~/services';
import { TAny } from '~/types';

// OAuth2 认证回调 - 处理重定向触发的 GET 请求
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { provider } = params;
  if (!provider) {
    return Response.json({ message: 'provider is required' }, { status: 405 });
  }

  // 确保使用 HTTPS URL、创建新的请求对象，使用 HTTPS URL
  const url = new URL(request.url);
  url.protocol = 'https:';
  const secureRequest = new Request(url, request);

  try {
    const user = await authenticator.authenticate(provider, secureRequest);
    const { email, name } = user;
    if (!email || !name) {
      return Response.json({ message: 'Authentication failed, unable to get user.' }, { status: 401 });
    }

    const session = await getSession(secureRequest.headers.get('Cookie'));
    const existingUser = await getUserByEmail(email);

    if (existingUser?.id) {
      session.set('user', existingUser);
    } else {
      const userNew = await createUser({ email, name, provider: EnumAuthProvider.tcshuke });
      session.set('user', userNew);
    }

    const headers = new Headers();
    headers.append('Set-Cookie', await commitSession(session));

    return redirect('/', {
      headers,
    });
  } catch (error: TAny) {
    console.error('@authenticator.OAuth2.callback', error);
    return Response.json({ message: error?.message || 'Authentication failed, unknown error.' }, { status: 401 });
  }
};
