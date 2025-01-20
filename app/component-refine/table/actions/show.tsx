import { TAny } from '~/types/any';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetShowUrl } from '../../hooks';
import { Eye } from 'lucide-react';

type ShowActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function ShowAction({ row, resource, title, disabled, ...props }: ShowActionProps) {
  const { can, reason, url } = useGetShowUrl(resource!, row.id);

  return (
    <RowAction
      {...props}
      icon={<Eye size={16} />}
      disabled={!can || disabled}
      title={title || 'View Detail'}
      to={url}
    />
  );
}

ShowAction.displayName = 'ShowAction';
