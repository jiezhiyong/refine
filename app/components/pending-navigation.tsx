import { useNavigation } from '@remix-run/react';
import { Loader } from 'lucide-react';

export function PendingNavigation() {
  const navigation = useNavigation();

  return navigation.state === 'loading' ? <Loader className="animate-spin" /> : null;
}
