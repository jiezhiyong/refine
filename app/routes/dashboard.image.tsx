import { MetaFunction } from '@remix-run/node';
import { PageError } from '~/components/500';
import { ImageResize } from '~/components/image-resize';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function DashboardImage() {
  return (
    <div className="flex flex-1 items-center justify-center gap-6">
      <ImageResize src="dog.jpg" width={600} height={600} />
      <ImageResize src="dog.jpg" width={400} height={400} />
      <ImageResize src="dog.jpg" width={200} height={200} />
      <ImageResize src="dog.jpg" width={100} height={100} />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
