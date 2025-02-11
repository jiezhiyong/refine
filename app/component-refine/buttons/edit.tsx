import { useEditButton } from '@refinedev/core';
import { Pencil } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '~/components-shadcn/button';
import { cn } from '~/utils';

import { EditButtonProps } from '../types';

export const EditButton: FC<EditButtonProps> = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useEditButton({
    resource,
    id: recordItemId,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
      prefetch="intent"
      viewTransition
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
      <Button disabled={disabledNew} title={title} icon={<Pencil />} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

EditButton.displayName = 'EditButton';
