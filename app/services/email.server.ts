import nodemailer from 'nodemailer';

// 创建邮件传输器
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// 发送验证码邮件
export async function sendVerificationEmail(to: string, code: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: '验证码 - 您的注册验证码',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; text-align: center;">您的验证码</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
          <h1 style="color: #4F46E5; font-size: 32px; letter-spacing: 5px;">${code}</h1>
        </div>
        <p style="color: #666; text-align: center;">此验证码将在5分钟后过期</p>
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
          如果您没有请求此验证码，请忽略此邮件
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('发送邮件失败:', error);
    throw error;
  }
}
