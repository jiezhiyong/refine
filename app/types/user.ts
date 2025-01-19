import { User } from '@prisma/client';
import { TRole } from '~/constants/roles';

export type SessionUser = User & { role: TRole; roles: TRole[] };

export const USER_PROVIDER = {
  userpass: 'userpass',
  tcshuke: 'tcshuke',
} as const;
