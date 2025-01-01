/**
 * auth.server.ts
 * https://sergiodxa.github.io/remix-auth/
 */
import { User } from '@prisma/client';
import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { verifyLogin } from '~/models/user.server';

// 创建认证器实例
export const authenticator = new Authenticator<User>();

// 表单登录策略
const strategyForm = new FormStrategy(async ({ form }) => {
  console.log('strategyForm form', form);

  const email = form.get('email') as string;
  const password = form.get('password') as string;

  const user = await verifyLogin(email, password);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  return user;
});

authenticator.use(strategyForm, 'user-pass');
