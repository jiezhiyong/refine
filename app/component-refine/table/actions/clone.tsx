import { CopyCheck } from 'lucide-react';
import type { RowActionProps } from '.';
import { RowAction } from '.';
import { useGetCloneUrl } from '../../hooks';
import { TAny } from '~/types/any';

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
      title={`${title || 'Clone'}${!can ? `（${reason}）` : ''}`}
      to={url}
    />
  );
}

CloneAction.displayName = 'CloneAction';
