import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetEditUrl } from '../../hooks';
import { TAny } from '~/types/any';

type EditActionProps = RowActionProps & {
  row: TAny;
  resource: string;
  title: string;
};

export function EditAction({ row, resource, title, disabled, ...props }: EditActionProps) {
  const edit = useGetEditUrl(resource, row.id);

  return (
    <RowAction {...props} disabled={!edit.can || disabled} title={!edit?.can ? edit?.reason : title} to={edit.url} />
  );
}

EditAction.displayName = 'EditAction';
