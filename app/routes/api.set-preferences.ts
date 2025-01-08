import { ActionFunction } from '@remix-run/node';
import { getPreferencesNextCookie } from '~/services/cookie.server';

// 设置用户偏好
export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();

  const headers = new Headers();
  headers.append('Set-Cookie', await getPreferencesNextCookie(request, data));

  return Response.json({ data }, { headers });
};
