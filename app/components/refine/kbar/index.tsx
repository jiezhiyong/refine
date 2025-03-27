import { useBackToHomeKbarActions } from '~/components/refine/hooks/useBackToHomeKbarActions';
import { RefineKbar as RefineKbarCore } from '~/lib/refinedev-kbar';

export const RefineKbarCustom = () => {
  useBackToHomeKbarActions();

  return <RefineKbarCore />;
};
