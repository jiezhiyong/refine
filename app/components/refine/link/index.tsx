import { Slot } from '@radix-ui/react-slot';
import { useLink, useRouterContext, useRouterType } from '@refinedev/core';

import { LayoutResource } from '~/components/refine/types/layout';
import { cn } from '~/lib/utils';

type LinkProps = LayoutResource['link'] & {
  asChild?: boolean;
};

export const Link = ({ children, href, title, className, asChild }: LinkProps) => {
  const { Link: LegacyLink } = useRouterContext();
  const routerType = useRouterType();
  const Link = useLink();

  const ActiveLink = routerType === 'legacy' ? LegacyLink : Link;
  const Comp = asChild ? Slot : ActiveLink;

  return (
    <Comp prefetch="intent" viewTransition to={href} className={cn('hover:bg-accent', className)} title={title}>
      {children}
    </Comp>
  );
};

Link.displayName = 'Link';
