import { BicepsFlexed, AudioLines, Baby } from 'lucide-react';

export const EnumRole = {
  administrator: 'administrator',
  editor: 'editor',
  guest: 'guest',
} as const;

export type Role = (typeof EnumRole)[keyof typeof EnumRole];

export const rolesAll = [
  { label: 'Administrator', value: EnumRole.administrator, icon: BicepsFlexed },
  { label: 'Editor', value: EnumRole.editor, icon: AudioLines },
  { label: 'Guest', value: EnumRole.guest, icon: Baby },
];
