import { Category } from '@prisma/client';
import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { PostForm } from './playground.article.post.edit.$id';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader() {
  const [categoriesRes] = await Promise.all([
    dataService.getList<Category>({
      resource: 'category',
    }),
  ]);

  return { categoriesRes };
}

// UI
export default function PostCreate() {
  const { categoriesRes } = useLoaderData<typeof loader>();
  return <PostForm categoriesRes={categoriesRes} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
