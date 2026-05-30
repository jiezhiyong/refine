import { Loader } from 'lucide-react';
import { useNavigation } from 'react-router';

export function Spinner() {
  const navigation = useNavigation();

  if (navigation.state !== 'loading') {
    return null;
  }
  return <Loader className="animate-spin" />;
}
