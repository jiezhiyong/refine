import { useNavigation } from '@remix-run/react';
import { Loader } from 'lucide-react';

export function Spinner() {
  const navigation = useNavigation();

  if (navigation.state !== 'loading') {
    return null;
  }
  return <Loader className="animate-spin" />;
}
