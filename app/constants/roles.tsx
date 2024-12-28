import { BicepsFlexed, AudioLines, Baby } from 'lucide-react';

/**
 * enum of user roles
 */
export enum Role {
  ADMIN = 'admin', // has all permissions
  OPERATIONS = 'operations', // has limited permissions
  GUEST = 'guest', // has no permissions
}

/**
 * List of user roles
 */
export const roles = [
  { label: 'Administrator', value: Role.ADMIN, icon: BicepsFlexed },
  { label: 'Operations User', value: Role.OPERATIONS, icon: AudioLines },
  { label: 'Guest', value: Role.GUEST, icon: Baby },
];

/**
 * Map of user roles
 */
export const rolesMap = roles.reduce(
  (acc, role) => {
    acc[role.value] = role;
    return acc;
  },
  {} as Record<Role, (typeof roles)[number]>
);
