import type { ActionFunction } from '@remix-run/node';
import { data } from '@remix-run/node';

import { sendVerificationEmail } from '~/services/email.server';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return data({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json({ error: '请提供邮箱地址' }, { status: 400 });
    }

    // 生成6位随机验证码
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 发送验证码邮件
    await sendVerificationEmail(email, verificationCode);

    // 将验证码保存到数据库或缓存中, 并设置过期时间
    // ...

    return Response.json({ success: true, verificationCode }, { status: 200 });
  } catch (error) {
    return Response.json({ error: '发送验证码失败' }, { status: 500 });
  }
};
