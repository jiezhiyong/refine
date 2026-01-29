import {
  AccessControlContext,
  CanReturnType,
  useCan,
  useNavigation,
  useResourceParams,
  useTranslate,
} from '@refinedev/core';
import { useContext } from 'react';

import { EnumAction } from '@/constants/action';
import { TAny } from '@/types/any';

type GetEditUrlReturnType = CanReturnType & {
  url: string;
};

export const useGetEditUrl = (resourceName: string, recordItemId: string, meta?: TAny): GetEditUrlReturnType => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;

  const { editUrl: generateEditUrl } = useNavigation();

  const { id, resource } = useResourceParams({ resource: resourceName });

  const { data } = useCan({
    resource: resourceName,
    action: EnumAction.edit,
    params: { id: recordItemId, resource },
    queryOptions: {
      enabled: accessControlEnabled,
    },
  });

  const translate = useTranslate();

  const reason = () => {
    if (data?.can) return '';
    else if (data?.reason) return data.reason;
    else return translate('buttons.notAccessTitle', "You don't have permission to access");
  };

  const editUrl = resourceName && (recordItemId ?? id) ? generateEditUrl(resourceName, recordItemId! ?? id!, meta) : '';

  return {
    can: !(accessControlEnabled && !data?.can),
    reason: reason(),
    url: editUrl,
  };
};
