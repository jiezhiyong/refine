import { ActionFunction } from '@remix-run/node';

import { getPreferencesNextCookie } from '~/services/cookie.server';
import { getRequestData } from '~/utils/get-request-data';

// 设置用户偏好
export const action: ActionFunction = async ({ request }) => {
  try {
    const data = await getRequestData(request);

    return Response.json(
      { data },
      {
        headers: {
          'Set-Cookie': await getPreferencesNextCookie(request, data),
        },
      }
    );
  } catch (error) {
    console.error('处理偏好设置请求时出错：', error);
    return Response.json({ error: '处理请求失败' }, { status: 400 });
  }
};
