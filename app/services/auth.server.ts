/**
 * auth.server.ts
 * https://sergiodxa.github.io/remix-auth/
 */
import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { OAuth2Strategy } from '~/lib/remix-auth-oauth2';
import { User } from '@prisma/client';
import { verifyUserpassLogin } from '~/models/user.server';
import { EnumAuthProvider } from '~/constants/auth';
import invariant from 'tiny-invariant';

invariant(process.env.TCSK_CLIENT_ID, 'TCSK_CLIENT_ID must be set.');
invariant(process.env.TCSK_CLIENT_SECRET, 'TCSK_CLIENT_SECRET must be set.');
invariant(process.env.TCSK_AUTHORIZE, 'TCSK_AUTHORIZE must be set.');
invariant(process.env.TCSK_TOKEN, 'TCSK_TOKEN must be set.');
invariant(process.env.TCSK_REDIRECT, 'TCSK_REDIRECT must be set.');
invariant(process.env.TCSK_PROFILE, 'TCSK_PROFILE must be set.');

// 创建认证器实例
export const authenticator = new Authenticator<User>();

// TCSK OAuth2 策略
const tcskStrategy = new OAuth2Strategy<User>(
  {
    clientId: process.env.TCSK_CLIENT_ID,
    clientSecret: process.env.TCSK_CLIENT_SECRET,
    authorizationEndpoint: process.env.TCSK_AUTHORIZE,
    tokenEndpoint: process.env.TCSK_TOKEN,
    redirectURI: process.env.TCSK_REDIRECT,
    scopes: ['profile'],
  },
  async ({ tokens }) => {
    const { access_token } = (tokens?.data || {}) as Record<string, string>;
    try {
      const response = await fetch(process.env.TCSK_PROFILE!, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      const { email, realName } = data || {};

      return {
        email,
        name: realName,
      } as User;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
);

// 表单登录策略
const strategyForm = new FormStrategy(async ({ form }) => {
  const email = form.get('email') as string;
  const password = form.get('password') as string;

  const user = await verifyUserpassLogin(email, password);
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  return user;
});

// 注册认证策略
authenticator.use(strategyForm, EnumAuthProvider.userpass);
authenticator.use(tcskStrategy, EnumAuthProvider.tcshuke);
