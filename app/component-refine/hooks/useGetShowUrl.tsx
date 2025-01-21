import {
  AccessControlContext,
  CanReturnType,
  useCan,
  useNavigation,
  useResource,
  useResourceParams,
  useTranslate,
} from '@refinedev/core';
import { useContext } from 'react';
import { TAny } from '~/types';

type GetShowUrlReturnType = CanReturnType & {
  url: string;
};

export const useGetShowUrl = (resource: string, recordItemId: string, meta?: TAny): GetShowUrlReturnType => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;

  const { showUrl: generateShowUrl } = useNavigation();

  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();

  const { data } = useCan({
    resource: resource,
    action: 'show',
    params: { id: recordItemId, resource: _resource },
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

  const showUrl = resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId! ?? id!, meta) : '';

  return {
    can: !(accessControlEnabled && !data?.can),
    reason: reason(),
    url: showUrl,
  };
};
