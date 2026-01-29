import { MetaFunction } from '@remix-run/node';

import { PageError } from '@/components/500';
import { FrontRouteProjectForm } from '@/routes/playground.frontRoute.frontRouteProject.edit.$id';
import { getDefaultTitle } from '@/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function FrontRouteProjectCreate() {
  return <FrontRouteProjectForm />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
