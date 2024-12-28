import { MetaFunction } from '@remix-run/node';
import { Clock } from 'lucide-react';
import PageError from '~/components/500';
import { PlaceholderDemo6 } from '~/components/placeholder';
import { HandleFunction } from '~/types/handle';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

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

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
