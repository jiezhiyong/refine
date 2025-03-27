import { BackFunction, useBack, useResourceParams } from '@refinedev/core';

import { EnumAction } from '~/constants/action';

export const useOnBack = (): BackFunction | undefined => {
  const back = useBack();
  const { action } = useResourceParams();

  const onBack = action !== EnumAction.list || typeof action !== 'undefined' ? back : undefined;

  return onBack;
};
