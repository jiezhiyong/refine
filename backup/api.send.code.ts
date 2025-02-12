// import type { ActionFunction } from '@remix-run/node';
// import { data } from '@remix-run/node';

// import { sendVerificationEmail } from '~/services';

// export const action: ActionFunction = async ({ request }) => {
//   if (request.method !== 'POST') {
//     return data({ error: 'Method not allowed' }, { status: 405 });
//   }

//   try {
//     const { email } = await request.json();

//     if (!email) {
//       return Response.json({ error: '请提供邮箱地址' }, { status: 400 });
//     }

//     // 生成6位随机验证码
//     const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

//     // 发送验证码邮件
//     await sendVerificationEmail(email, verificationCode);

//     // 在实际应用中,应该将验证码保存到数据库或缓存中,并设置过期时间
//     // 这里为了演示,我们将验证码存在 cookie 中
//     const response = Response.json({ success: true }, { status: 200 });

//     response.cookies.set('verification-code', verificationCode, {
//       httpOnly: true,
//       maxAge: 300, // 5分钟有效期
//     });

//     return response;
//   } catch (error) {
//     console.error('发送验证码失败:', error);
//     return Response.json({ error: '发送验证码失败' }, { status: 500 });
//   }
// };
