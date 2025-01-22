import { Category, Post } from '@prisma/client';
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
  const [initialData, categoriesRes] = await Promise.all([
    dataService.getOne<Post>({
      resource: EnumResource.post,
      id: params?.id || '',
    }),
    dataService.getList<Category>({
      resource: EnumResource.category,
    }),
  ]);

  return { initialData, categoriesRes };
}

// UI
export default function PostClone() {
  const { initialData, categoriesRes } = useLoaderData<typeof loader>();
  return <PostForm initialData={initialData} categoriesRes={categoriesRes} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
