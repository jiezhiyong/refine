import { MetaFunction } from '@remix-run/node';

import { PageError } from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function DashboardViewTransition() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <img
        alt=""
        width={400}
        height={400}
        className="border-secondary rounded-lg border shadow-lg"
        src="/logo.png"
        style={{
          viewTransitionName: 'image-expand',
        }}
      />
    </div>
  );
}

// 错误边界
export function ErrorBoundary() {
  return <PageError />;
}
