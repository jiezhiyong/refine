import { Pencil } from 'lucide-react';
import { TAny } from '~/types';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetEditUrl } from '../../hooks';

type EditActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
  useModalForm?: boolean;
  show?: () => void;
};

export function EditAction({ row, resource, title, disabled, useModalForm, show, onClick, ...props }: EditActionProps) {
  const { can, reason, url } = useGetEditUrl(resource!, row.id);

  return (
    <RowAction
      {...props}
      icon={<Pencil size={16} />}
      disabled={!can || disabled}
      title={title || 'Edit'}
      to={useModalForm ? undefined : url}
      onClick={useModalForm ? () => show(row.id) : onClick}
    />
  );
}

EditAction.displayName = 'EditAction';
