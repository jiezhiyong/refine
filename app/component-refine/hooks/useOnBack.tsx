import { BackFunction, useBack, useResourceParams } from '@refinedev/core';

export const useOnBack = (): BackFunction | undefined => {
  const back = useBack();
  const { action } = useResourceParams();

  const onBack = action !== 'list' || typeof action !== 'undefined' ? back : undefined;

  return onBack;
};
