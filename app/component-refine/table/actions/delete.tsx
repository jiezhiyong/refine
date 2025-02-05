import { Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { TAny } from '~/types';
import { cn } from '~/utils';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useDeleteHelper } from '../../hooks';
import { DeleteContext } from '../../providers';

type DeleteActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
  onAfterHandle?: () => void;
};

export function DeleteAction({
  row,
  resource,
  title,
  disabled,
  onAfterHandle,
  className,
  ...props
}: DeleteActionProps) {
  const { can, reason } = useDeleteHelper(resource!, row.id);
  const deleteContext = useContext(DeleteContext);

  return (
    <RowAction
      icon={<Trash2 size={16} />}
      disabled={!can || disabled}
      title={title || 'Delete'}
      className={cn('!text-destructive', className)}
      onClick={() =>
        deleteContext?.updateData({
          row,
          resource: resource!,
          toogle: true,
          onAfterHandle,
        })
      }
      {...props}
    />
  );
}

DeleteAction.displayName = 'DeleteAction';
