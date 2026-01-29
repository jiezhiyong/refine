import {
  AccessControlContext,
  CanReturnType,
  useCan,
  useDelete,
  useMutationMode,
  useResourceParams,
  useTranslate,
  useWarnAboutChange,
} from '@refinedev/core';
import { MutateOptions } from '@tanstack/react-query';
import { useContext } from 'react';

import { EnumAction } from '@/constants/action';
import { TAny } from '@/types/any';

type DeleteHelperReturnType = CanReturnType & {
  isPending: boolean;
  mutate: (e?: MutateOptions<unknown, unknown, unknown, unknown>) => DeleteHelperReturnType;
};

export const useDeleteHelper = (resourceName: string, recordItemId: string, meta?: TAny): DeleteHelperReturnType => {
  const accessControlContext = useContext(AccessControlContext);

  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;

  const translate = useTranslate();

  const { id, resource, identifier } = useResourceParams({ resource: resourceName });

  const { mutationMode } = useMutationMode();

  const {
    mutate,
    mutation: { isPending },
  } = useDelete();

  const { data } = useCan({
    resource: resource?.name,
    action: EnumAction.delete,
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled,
    },
  });

  const reason = () => {
    if (data?.can) return '';
    else if (data?.reason) return data.reason;
    else return translate("You don't have permission to access");
  };

  const { setWarnWhen } = useWarnAboutChange();

  const onDeleteMutate = (options?: MutateOptions<unknown, unknown, unknown, unknown>): TAny => {
    if (accessControlEnabled && !data?.can) {
      return;
    }
    if ((recordItemId ?? id) && identifier) {
      setWarnWhen(false);
      return mutate(
        {
          id: recordItemId ?? id ?? '',
          resource: identifier,
          mutationMode,
          meta,
        },
        options
      );
    }

    return undefined;
  };

  return {
    can: !(accessControlEnabled && !data?.can),
    reason: reason(),
    mutate: onDeleteMutate,
    isPending,
  };
};
