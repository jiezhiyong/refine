import { CopyCheck } from 'lucide-react';
import { TAny } from '~/types';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetCloneUrl } from '../../hooks';

type CloneActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function CloneAction({ row, resource, title, disabled, ...props }: CloneActionProps) {
  const { can, reason, url } = useGetCloneUrl(resource!, row.id);

  return (
    <RowAction
      {...props}
      icon={<CopyCheck size={16} />}
      disabled={!can || disabled}
      title={title || 'Clone'}
      to={url}
    />
  );
}

CloneAction.displayName = 'CloneAction';
