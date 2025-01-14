import { useDeleteHelper } from '../../hooks';
import { DeleteContext } from '../../providers';
import { useContext } from 'react';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { TAny } from '~/types/any';
import { Trash2 } from 'lucide-react';

type DeleteActionProps = RowActionProps & {
  row: TAny;
  resource: string;
  title?: string;
  onAfterHandle?: () => void;
};

export function DeleteAction({ row, resource, title, disabled, onAfterHandle, ...props }: DeleteActionProps) {
  const { can, reason } = useDeleteHelper(resource, row.id);
  const deleteContext = useContext(DeleteContext);

  return (
    <RowAction
      {...props}
      icon={<Trash2 size={16} />}
      disabled={!can || disabled}
      title={!can ? reason : title || 'Delete'}
      onClick={() =>
        deleteContext?.updateData({
          row,
          resource,
          toogle: true,
          onAfterHandle,
        })
      }
    />
  );
}

DeleteAction.displayName = 'DeleteAction';
