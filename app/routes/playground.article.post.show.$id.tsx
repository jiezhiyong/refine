import { Category, Post, User } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, MailIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { H1, Image, P } from '~/components-shadcn/typography';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { POST_STATUS_MAP, PostStatus } from '~/types/post';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
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
    <article className="mx-auto px-4 pb-4 pt-8">
      <header className="mb-8">
        <H1 className="mb-4 flex items-center gap-3 text-4xl font-bold">
          <p className="grow">{post.title}</p>
          <Badge className="shrink-0" variant={POST_STATUS_MAP[post.status as PostStatus]?.badge as TAny}>
            {post.status?.charAt(0)?.toUpperCase() + post.status?.slice(1)?.toLowerCase()}
          </Badge>
        </H1>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Badge variant="outline">{post.category?.title}</Badge>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Created: {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            Updated: {dayjs(post.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
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

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
