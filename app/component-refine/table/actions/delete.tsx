import { useDeleteHelper } from '../../hooks';
import { DeleteContext } from '../../providers';
import { useContext } from 'react';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { TAny } from '~/types/any';
import { Trash2 } from 'lucide-react';
import { cn } from '~/utils/cn';

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
      {...props}
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
    />
  );
}

DeleteAction.displayName = 'DeleteAction';
