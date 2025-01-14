import { TAny } from '~/types/any';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetShowUrl } from '../../hooks';
import { Eye } from 'lucide-react';

type ShowActionProps = RowActionProps & {
  row: TAny;
  resource: string;
  title?: string;
};

export function ShowAction({ row, resource, title, disabled, ...props }: ShowActionProps) {
  const detail = useGetShowUrl(resource, row.id);

  return (
    <RowAction
      {...props}
      icon={<Eye size={16} />}
      disabled={!detail.can || disabled}
      title={!detail?.can ? detail?.reason : title || 'Detail'}
      to={detail.url}
    />
  );
}

ShowAction.displayName = 'ShowAction';
