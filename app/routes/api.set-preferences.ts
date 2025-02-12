import { ActionFunction } from '@remix-run/node';

import { getPreferencesNextCookie } from '~/services';
import { getRequestData } from '~/utils';

// 设置用户偏好
export const action: ActionFunction = async ({ request }) => {
  try {
    const data = await getRequestData(request);

    const headers = new Headers();
    headers.append('Set-Cookie', await getPreferencesNextCookie(request, data));

    return Response.json({ data }, { headers });
  } catch (error) {
    console.error('处理偏好设置请求时出错：', error);
    return Response.json({ error: '处理请求失败' }, { status: 400 });
  }
};

export default function UI() {
  return null;
}
