import { Pencil } from 'lucide-react';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetEditUrl } from '../../hooks';
import { TAny } from '~/types/any';

type EditActionProps = RowActionProps & {
  row: TAny;
  resource: string;
  title?: string;
};

export function EditAction({ row, resource, title, disabled, ...props }: EditActionProps) {
  const edit = useGetEditUrl(resource, row.id);

  console.log(edit);

  return (
    <RowAction
      {...props}
      icon={<Pencil size={16} />}
      disabled={!edit.can || disabled}
      title={!edit?.can ? edit?.reason : title || 'Edit'}
      to={edit.url}
    />
  );
}

EditAction.displayName = 'EditAction';
