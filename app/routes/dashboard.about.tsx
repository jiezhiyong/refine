import { Clock } from 'lucide-react';
import { PlaceholderDemo6 } from '~/components/placeholder';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: (
    <p className="flex items-center gap-2 pr-1 text-sm text-muted-foreground">
      <Clock size={16} />
      <span>Updated at 10s ago</span>
    </p>
  ),
};

// UI
export default function DashboardAbout() {
  return <PlaceholderDemo6 />;
}
