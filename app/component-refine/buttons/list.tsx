import { useListButton } from '@refinedev/core';
import { ListIcon } from 'lucide-react';
import type { FC } from 'react';
import { Button } from '~/components-shadcn/button';
import { cn } from '~/utils';
import { ListButtonProps } from '../types';

export const ListButton: FC<ListButtonProps> = ({
  resource: resourceNameFromProps,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useListButton({
    resource: resourceNameFromProps,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
      prefetch="intent"
      className={cn(disabledNew && 'pointer-events-none')}
      to={to}
      replace={false}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      <Button disabled={disabledNew} title={title} icon={<ListIcon />} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

ListButton.displayName = 'ListButton';
