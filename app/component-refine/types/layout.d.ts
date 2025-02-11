import { LucideIcon } from 'lucide-react';

export type LayoutResource = {
  title: string;
  label?: string;
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  icon: LucideIcon;
  variant: 'default' | 'ghost';
};
