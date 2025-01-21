import { MetaFunction } from '@remix-run/node';
import { ComingSoon, PageError } from '~/components';
import { getDefaultTitle } from '~/utils';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function DashboardIndex() {
  return <ComingSoon />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
