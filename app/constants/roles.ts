import { AudioLines, Baby, BicepsFlexed } from 'lucide-react';

export enum EnumRole {
  administrator = 'administrator',
  editor = 'editor',
  guest = 'guest',
}

export type TRole = string | null;

export const ROLE_LIST = Object.values(EnumRole);

export const rolesAll = [
  { label: 'Administrator', value: EnumRole.administrator, icon: BicepsFlexed },
  { label: 'Editor', value: EnumRole.editor, icon: AudioLines },
  { label: 'Guest', value: EnumRole.guest, icon: Baby },
];

// 定义角色优先级映射
export const rolePriority: { [key: string]: number } = {
  administrator: 1,
  editor: 2,
  guest: 3,
};
