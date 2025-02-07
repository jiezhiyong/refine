import { useShowButton } from '@refinedev/core';
import { EyeIcon } from 'lucide-react';
import type { FC } from 'react';
import { Button } from '~/components-shadcn/button';
import { cn } from '~/utils';
import { ShowButtonProps } from '../types';

export const ShowButton: FC<ShowButtonProps> = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { to, label, title, hidden, disabled, LinkComponent, canAccess } = useShowButton({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
      prefetch="intent"
      className={cn('visited:!text-blue-700', disabledNew && 'pointer-events-none')}
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
      <Button icon={!props.asChild ? <EyeIcon /> : undefined} title={title} disabled={disabledNew} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

ShowButton.displayName = 'ShowButton';
