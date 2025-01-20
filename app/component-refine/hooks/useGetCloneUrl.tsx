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
import { TAny } from '~/types/any';

type GetEditUrlReturnType = CanReturnType & {
  url: string;
};

export const useGetCloneUrl = (resource: string, recordItemId: string, meta?: TAny): GetEditUrlReturnType => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;

  const { cloneUrl: generateCloneUrl } = useNavigation();

  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();

  const { data } = useCan({
    resource: resource,
    action: 'clone',
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

  const editUrl = resource && (recordItemId ?? id) ? generateCloneUrl(resource, recordItemId! ?? id!, meta) : '';

  return {
    can: !(accessControlEnabled && !data?.can),
    reason: reason(),
    url: editUrl,
  };
};
