import { t } from 'i18next';
import { CopyCheck } from 'lucide-react';

import { useGetCloneUrl } from '~/components/refine/hooks/useGetCloneUrl';
import { TAny } from '~/types/any';

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
      title={title || t('buttons.clone')}
      to={url}
      {...props}
    />
  );
}

CloneAction.displayName = 'CloneAction';
