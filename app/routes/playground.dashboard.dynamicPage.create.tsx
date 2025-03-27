import { MetaFunction } from '@remix-run/node';

import { PageError } from '~/components/500';
import { DynamicPageForm } from '~/routes/playground.dashboard.dynamicPage.edit.$id';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function DynamicPageCreate() {
  return <DynamicPageForm />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
