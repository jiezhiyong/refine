import { RefineKbar as RefineKbarCore } from '@refinedev/kbar';
import { useBackToHomeKbarActions } from '~/component-refine/hooks';

export const RefineKbar = () => {
  useBackToHomeKbarActions();

  return <RefineKbarCore />;
};
