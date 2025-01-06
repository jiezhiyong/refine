import { User } from '@prisma/client';
import { Role } from '~/constants/roles';

export type SessionUser = User & { role: Role; roles: Role[] };
