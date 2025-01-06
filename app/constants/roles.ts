import { BicepsFlexed, AudioLines, Baby } from 'lucide-react';

export const EnumRole = {
  administrator: 'administrator',
  operations: 'operations',
  guest: 'guest',
} as const;

export type Role = (typeof EnumRole)[keyof typeof EnumRole];

export const roles = [
  { label: 'Administrator', value: EnumRole.administrator, icon: BicepsFlexed },
  { label: 'Operations User', value: EnumRole.operations, icon: AudioLines },
  { label: 'Guest', value: EnumRole.guest, icon: Baby },
];
