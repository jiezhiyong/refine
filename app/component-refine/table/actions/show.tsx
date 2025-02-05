import { Eye } from 'lucide-react';
import { TAny } from '~/types';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetShowUrl } from '../../hooks';

type ShowActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function ShowAction({ row, resource, title, disabled, ...props }: ShowActionProps) {
  const { can, reason, url } = useGetShowUrl(resource!, row.id);

  return (
    <RowAction
      icon={<Eye size={16} />}
      disabled={!can || disabled}
      title={title || 'View Detail'}
      to={url}
      {...props}
    />
  );
}

ShowAction.displayName = 'ShowAction';
