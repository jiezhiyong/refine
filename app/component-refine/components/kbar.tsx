import { useBackToHomeKbarActions } from '~/component-refine/hooks';
import { RefineKbar as RefineKbarCore } from '~/lib/refinedev-kbar';

export const RefineKbar = () => {
  useBackToHomeKbarActions();

  return <RefineKbarCore />;
};
