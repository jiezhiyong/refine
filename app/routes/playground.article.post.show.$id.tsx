import { Category, Post, User } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, LeafyGreen, MailIcon } from 'lucide-react';
import { CloneButton, DeleteButton, EditButton } from '~/component-refine';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { H1, Image, P } from '~/components-shadcn/typography';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { HandleFunction } from '~/types/handle';
import { POST_STATUS_MAP, PostStatus } from '~/types/post';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader({ params }: LoaderFunctionArgs) {
  const [postRes] = await Promise.all([
    dataService.getOne<Post & { category?: Category; user?: User }>({
      resource: 'post',
      id: params?.id || '',
      meta: {
        include: {
          user: true,
          category: true,
        },
      },
    }),
  ]);

  return { postRes };
}

// UI
export default function PostShow() {
  const { postRes } = useLoaderData<typeof loader>();
  const { data: post } = postRes;

  return (
    <article className="mx-auto px-8 pb-4 pt-8">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span>{post.title}</span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={POST_STATUS_MAP[post.status as PostStatus]?.badge as TAny}>
              Status: {post.status?.charAt(0)?.toUpperCase() + post.status?.slice(1)?.toLowerCase()}
            </Badge>
          </div>
        </H1>

        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <LeafyGreen className="mr-2 h-4 w-4" />
            <span>Category: {post.category?.title}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>Updated: {dayjs(post.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={post.user?.avatar || ''} alt={post.user?.name || ''} />
            <AvatarFallback>{post.user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.user?.name}</p>
            <p className="flex items-center text-sm text-muted-foreground">
              <MailIcon className="mr-2 h-4 w-4" />
              {post.user?.email}
            </p>
          </div>
        </div>
      </header>

      <div className="prose mb-8 max-w-none">
        <P>{post.content}</P>
      </div>

      <Image src={''} alt={post.title} className="h-[700px]" />
    </article>
  );
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <EditButton variant="ghost" size="icon" />
      <DeleteButton variant="ghost" size="icon" />
      <CloneButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
