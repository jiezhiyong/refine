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

type GetShowUrlReturnType = CanReturnType & {
  url: string;
};

export const useGetShowUrl = (resourceName: string, recordItemId: string, meta?: TAny): GetShowUrlReturnType => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;

  const { showUrl: generateShowUrl } = useNavigation();

  const { id, resource } = useResourceParams({ resource: resourceName });

  const { data } = useCan({
    resource: resourceName,
    action: EnumAction.show,
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

  const showUrl = resourceName && (recordItemId || id) ? generateShowUrl(resourceName, recordItemId! ?? id!, meta) : '';

  return {
    can: !(accessControlEnabled && !data?.can),
    reason: reason(),
    url: showUrl,
  };
};
