import { LoaderFunctionArgs, redirect } from '@remix-run/node';

import { dashboardResource } from '~/config/resources';
import { EnumAuthProvider } from '~/constants/user';
import { authenticator } from '~/services/auth.server';
import { commitSession, getSession } from '~/services/session.server';
import { createUser, getUserByEmail } from '~/services/user.server';
import { TAny } from '~/types/any';

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
      const userNew = await createUser({ email, name, provider: EnumAuthProvider.TC_SHUKE });
      session.set('user', userNew);
    }

    return redirect(dashboardResource, {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  } catch (error: TAny) {
    console.error('@authenticator.OAuth2.callback', error);
    return Response.json({ message: error?.message || 'Authentication failed, unknown error.' }, { status: 401 });
  }
};
