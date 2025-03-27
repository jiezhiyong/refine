import { MetaFunction } from '@remix-run/node';

import { PageError } from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';

import { CategoryForm } from './playground.article.category.edit.$id';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function RoleCreate() {
  return <CategoryForm />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
