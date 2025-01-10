/**
 * auth.server.ts
 * https://sergiodxa.github.io/remix-auth/
 */
import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { OAuth2Strategy } from '~/utils/remix-auth-oauth2';
import { User } from '@prisma/client';
import { verifyLogin } from '~/models/user.server';
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
    clientId: process.env.TCSK_CLIENT_ID,
    clientSecret: process.env.TCSK_CLIENT_SECRET,
    authorizationEndpoint: process.env.TCSK_AUTHORIZE,
    tokenEndpoint: process.env.TCSK_TOKEN,
    redirectURI: process.env.TCSK_REDIRECT,
    scopes: ['profile'],
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    console.log('OAuth2 callback', { accessToken, refreshToken, extraParams, profile });

    try {
      const response = await fetch(process.env.TCSK_PROFILE!, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();

      return {
        id: data.id,
        email: data.email,
        name: data.name,
      } as User;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
);

// 注册认证策略
authenticator.use(strategyForm, EnumAuthProvider.userpass);
authenticator.use(tcskStrategy, EnumAuthProvider.tcshuke);
