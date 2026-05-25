import { AuthProvider } from '@prisma/client';

export enum EnumAuthProvider {
  USER_PASS = 'USER_PASS',
  GITHUB = 'GITHUB',
}

export type TAuthProvider = `${AuthProvider}`;

export const PROVIDER_LIST = Object.values(EnumAuthProvider);
