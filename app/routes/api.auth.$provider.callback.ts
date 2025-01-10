import { LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { commitSession, getSession } from '~/services/session.server';
import { TAny } from '~/types/any';

// OAuth2 认证回调 - 处理重定向触发的 GET 请求
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { provider } = params;
  if (!provider) {
    return Response.json({ message: 'provider is required' }, { status: 405 });
  }

  // 确保使用 HTTPS URL
  const url = new URL(request.url);
  url.protocol = 'https:';
  console.log('request0', url.toString());

  // 创建新的请求对象，使用 HTTPS URL
  const secureRequest = new Request(url, request);

  try {
    const user = await authenticator.authenticate(provider, secureRequest);
    console.log('OAuth2 user', user); // TODO: remove

    const session = await getSession(secureRequest.headers.get('Cookie'));
    session.set('user', user);

    const headers = new Headers();
    headers.append('Set-Cookie', await commitSession(session));

    return Response.json(user, { headers });
  } catch (error: TAny) {
    console.error('@authenticator.OAuth2.callback', error);
    return Response.json({ message: error?.message || 'Authentication failed, unknown error.' }, { status: 401 });
  }
};
