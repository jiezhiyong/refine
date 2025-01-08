import { EditButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { useEditButton } from '@refinedev/core';
import { SquarePenIcon } from 'lucide-react';
import type { FC } from 'react';

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
      <Button disabled={disabledNew} title={title} icon={<SquarePenIcon className="mr-2 h-4 w-4" />} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

EditButton.displayName = 'EditButton';
