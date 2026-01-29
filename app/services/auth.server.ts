/**
 * auth.server.ts
 * https://sergiodxa.github.io/remix-auth/
 */

// 确保 crypto 在全局对象上可用
import * as nodeCrypto from 'crypto';
if (!globalThis.crypto) {
  // @ts-expect-error 将 Node.js 的 crypto 模块赋值给全局对象
  globalThis.crypto = nodeCrypto;
}

import { User } from '@prisma/client';
import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { OAuth2Strategy } from 'remix-auth-oauth2';
import invariant from 'tiny-invariant';

import { EnumAuthProvider } from '@/constants/user';
import { verifyUserpassLogin } from '@/services/user.server';

invariant(process.env.GITHUB_CLIENT_ID, 'GITHUB_CLIENT_ID must be set.');
invariant(process.env.GITHUB_CLIENT_SECRET, 'GITHUB_CLIENT_SECRET must be set.');
invariant(process.env.GITHUB_AUTHORIZE, 'GITHUB_AUTHORIZE must be set.');
invariant(process.env.GITHUB_TOKEN, 'GITHUB_TOKEN must be set.');
invariant(process.env.GITHUB_REDIRECT, 'GITHUB_REDIRECT must be set.');
invariant(process.env.GITHUB_PROFILE, 'GITHUB_PROFILE must be set.');

// 创建认证器实例
export const authenticator = new Authenticator<User>();

// GitHub OAuth2 策略
const githubStrategy = new OAuth2Strategy<User>(
  {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    authorizationEndpoint: process.env.GITHUB_AUTHORIZE,
    tokenEndpoint: process.env.GITHUB_TOKEN,
    redirectURI: process.env.GITHUB_REDIRECT,
    scopes: ['profile'],
  },
  async ({ tokens }) => {
    const { access_token } = (tokens?.data || {}) as Record<string, string>;
    try {
      const response = await fetch(process.env.GITHUB_PROFILE!, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      const { email, name } = data || {};

      return {
        email,
        name,
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
authenticator.use(strategyForm, EnumAuthProvider.USER_PASS);
authenticator.use(githubStrategy, EnumAuthProvider.GITHUB);
