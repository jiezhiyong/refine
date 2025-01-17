import { Pencil } from 'lucide-react';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetEditUrl } from '../../hooks';
import { TAny } from '~/types/any';

type EditActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function EditAction({ row, resource, title, disabled, ...props }: EditActionProps) {
  const { can, reason, url } = useGetEditUrl(resource!, row.id);

  return (
    <RowAction {...props} icon={<Pencil size={16} />} disabled={!can || disabled} title={title || 'Edit'} to={url} />
  );
}

EditAction.displayName = 'EditAction';
