import type { User } from '@prisma/client';
import { useMatchesData } from './use-matches-data';

function isUser(user: any): user is User {
  return user && typeof user === 'object' && typeof user.email === 'string';
}

/** 获取当前用户(可选) */
export function useOptionalUser(): User | undefined {
  const data = useMatchesData('root');
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

/** 获取当前用户 */
export function useUser(): User {
  const user = useOptionalUser();
  if (!user) {
    throw new Error('No user found in root loader.');
  }
  return user;
}
