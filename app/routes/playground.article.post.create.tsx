import { MetaFunction } from '@remix-run/node';

import { PageError } from '~/components';
import { getDefaultTitle } from '~/utils';

import { PostForm } from './playground.article.post.edit.$id';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function PostCreate() {
  return <PostForm />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
