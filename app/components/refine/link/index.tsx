import { Slot } from '@radix-ui/react-slot';
import { useLink } from '@refinedev/core';

import { LayoutResource } from '@/components/refine/types/layout';
import { cn } from '@/lib/utils';

type LinkProps = LayoutResource['link'] & {
  asChild?: boolean;
};

export const Link = ({ children, href, title, className, asChild }: LinkProps) => {
  const Link = useLink();

  const Comp = asChild ? Slot : Link;

  return (
    <Comp prefetch="intent" viewTransition to={href ?? ''} className={cn('hover:bg-accent', className)} title={title}>
      {children}
    </Comp>
  );
};

Link.displayName = 'Link';
