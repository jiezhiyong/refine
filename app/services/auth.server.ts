/**
 * auth.server.ts
 * https://sergiodxa.github.io/remix-auth/
 */
import { User } from '@prisma/client';
import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { OAuth2Strategy } from 'remix-auth-oauth2';
import { verifyLogin } from '~/models/user.server';
import { EnumAuthProvider } from '~/constants/auth';

// 创建认证器实例
export const authenticator = new Authenticator<User>();

// 表单登录策略
const strategyForm = new FormStrategy(async ({ form }) => {
  const email = form.get('email') as string;
  const password = form.get('password') as string;

  const user = await verifyLogin(email, password);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  return user;
});

// TCSK OAuth2 策略
const tcskStrategy = new OAuth2Strategy(
  {
    cookie: 'oauth2',

    clientId: process.env.TCSK_CLIENT_ID!,
    clientSecret: process.env.TCSK_CLIENT_SECRET!,

    authorizationEndpoint: process.env.TCSK_AUTHORIZE!,
    tokenEndpoint: process.env.TCSK_TOKEN!,
    redirectURI: process.env.TCSK_REDIRECT!,

    scopes: ['profile'],
  },
  async ({ tokens, request }) => {
    console.log('tcskStrategy', tokens, request);
    // const response = await fetch(process.env.TCSK_PROFILE!, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // const data = await response.json();

    return {
      id: '1',
      email: 'test@test.com',
      name: 'Test',
    } as User;
  }
);

// 注册认证策略
authenticator.use(strategyForm, EnumAuthProvider.userpass);
authenticator.use(tcskStrategy, EnumAuthProvider.tcshuke);
