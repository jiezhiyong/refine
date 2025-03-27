import { t } from 'i18next';
import { Trash2 } from 'lucide-react';
import { useContext } from 'react';

import { useDeleteHelper } from '~/components/refine/hooks/useDeleteHelper';
import { DeleteContext } from '~/components/refine/providers/deleteProvider';
import { cn } from '~/lib/utils';
import { TAny } from '~/types/any';

import type { RowActionProps } from '.';
import { RowAction } from '.';

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
  const { can } = useDeleteHelper(resource!, row.id);
  const deleteContext = useContext(DeleteContext);

  return (
    <RowAction
      icon={<Trash2 size={16} />}
      disabled={!can || disabled}
      title={title || t('buttons.delete')}
      className={cn('text-destructive!', className)}
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
