import { BicepsFlexed, AudioLines, Baby } from 'lucide-react';

export enum EnumRole {
  administrator = 'administrator',
  editor = 'editor',
  guest = 'guest',
}

export type TRole = `${EnumRole}`;

export const rolesAll = [
  { label: 'Administrator', value: EnumRole.administrator, icon: BicepsFlexed },
  { label: 'Editor', value: EnumRole.editor, icon: AudioLines },
  { label: 'Guest', value: EnumRole.guest, icon: Baby },
];

export enum EnumRoleId {
  administrator = '1',
  editor = '2',
  guest = '3',
}
