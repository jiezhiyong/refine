import { MetaFunction } from '@remix-run/node';
import { PageError } from '~/components/500';
import { ComingSoon } from '~/components/coming-soon';
import { getDefaultTitle } from '~/utils/get-default-title';

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
