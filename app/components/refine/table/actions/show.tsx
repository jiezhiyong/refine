import { t } from 'i18next';
import { Eye } from 'lucide-react';

import { useGetShowUrl } from '~/components/refine/hooks/useGetShowUrl';
import { TAny } from '~/types/any';

import type { RowActionProps } from '.';
import { RowAction } from '.';

type ShowActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function ShowAction({ row, resource, title, disabled, ...props }: ShowActionProps) {
  const { can, url } = useGetShowUrl(resource!, row.id);

  return (
    <RowAction
      icon={<Eye size={16} />}
      disabled={!can || disabled}
      title={title || t('buttons.show')}
      to={url}
      {...props}
    />
  );
}

ShowAction.displayName = 'ShowAction';
