import { Post } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { PageError } from '~/components';
import { EnumResource } from '~/constants';
import { dataService } from '~/services';
import { getDefaultTitle } from '~/utils';

import { PostForm } from './playground.article.post.edit.$id';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader({ params }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.getOne<Post>({
      resource: EnumResource.post,
      id: params?.id || '',
    }),
  ]);

  return { initialData };
}

// UI
export default function PostClone() {
  const { initialData } = useLoaderData<typeof loader>();
  return <PostForm initialData={initialData} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
