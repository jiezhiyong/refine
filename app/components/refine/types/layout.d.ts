export type LayoutResource = {
  title: string;
  label?: string;
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  variant: 'default' | 'ghost';
};
