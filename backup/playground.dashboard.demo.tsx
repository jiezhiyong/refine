import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useNotification } from '@refinedev/core';
import { PageError } from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';
import { Button } from '~/components-shadcn/button';
import { H1, H2 } from '~/components-shadcn/typography';
import { requireUserSession } from '~/services/session.server';
import { getAllParams } from '~/utils/get-all-params';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 加载器
export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserSession(request);
  const mergedParams = await getAllParams<{ redirectTo?: string }>(request, params);
  return {};
}

// 处理 POST、PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  const mergedParams = await getAllParams<{ id?: string }>(request, params);
  return {};
}

// UI
export default function DashboardUI() {
  const { open, close } = useNotification();

  return (
    <div className="">
      <H1>UI Demo</H1>

      <H2>Notification</H2>

      <ul className="mt-6 flex gap-4">
        <Button
          onClick={() => {
            open?.({
              key: 'my-notification-abc',
              message: 'Test Notification',
              description: 'This is a test notification.',
              type: 'progress',
            });
          }}
        >
          progress
        </Button>

        <Button
          onClick={() => {
            open?.({
              key: 'my-notification-abc',
              message: 'Test Notification',
              description: 'This is a test notification.',
              type: 'success',
            });
          }}
        >
          success
        </Button>

        <Button
          onClick={() => {
            open?.({
              key: 'my-notification-abc',
              message: 'Test Notification',
              description: 'This is a test notification.',
              type: 'error',
            });
          }}
        >
          failed
        </Button>

        <Button
          onClick={() => {
            close?.('my-notification-abc');
          }}
        >
          close
        </Button>
      </ul>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
