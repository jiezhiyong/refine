import { ActionFunction } from '@remix-run/node';
import { setCookie } from '~/services/cookie.server';

// 设置用户偏好
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const preferences = Object.fromEntries(formData);

  return setCookie(request, preferences);
};
