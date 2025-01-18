import { CloneButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { useCloneButton } from '@refinedev/core';
import { CopyCheck } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '~/utils/cn';

export const CloneButton: FC<CloneButtonProps> = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}) => {
  const { to, LinkComponent, label, disabled, hidden, title, canAccess } = useCloneButton({
    id: recordItemId,
    resource: resource,
    accessControl: accessControl,
    meta: meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
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
      <Button disabled={disabledNew} title={title} icon={<CopyCheck />} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

CloneButton.displayName = 'CloneButton';
