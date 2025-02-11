import { CopyCheck } from 'lucide-react';

import { TAny } from '~/types';

import { useGetCloneUrl } from '../../hooks';

import type { RowActionProps } from '.';
import { RowAction } from '.';

type CloneActionProps = RowActionProps & {
  row?: TAny;
  resource?: string;
  title?: string;
};

export function CloneAction({ row, resource, title, disabled, ...props }: CloneActionProps) {
  const { can, url } = useGetCloneUrl(resource!, row.id);

  return (
    <RowAction
      icon={<CopyCheck size={16} />}
      disabled={!can || disabled}
      title={title || 'Clone'}
      to={url}
      {...props}
    />
  );
}

CloneAction.displayName = 'CloneAction';
