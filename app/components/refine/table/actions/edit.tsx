import { t } from 'i18next';
import { Pencil } from 'lucide-react';

import { useGetEditUrl } from '~/components/refine/hooks/useGetEditUrl';
import { TAny } from '~/types/any';

import type { RowActionProps } from '.';
import { RowAction } from '.';

type EditActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function EditAction({ row, resource, title, disabled, ...props }: EditActionProps) {
  const { can, url } = useGetEditUrl(resource!, row.id);

  return (
    <RowAction
      icon={<Pencil size={16} />}
      disabled={!can || disabled}
      title={title || t('buttons.edit')}
      to={url}
      {...props}
    />
  );
}

EditAction.displayName = 'EditAction';
