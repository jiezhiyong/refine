import { MetaFunction } from '@remix-run/node';
import { Button } from '~/components-shadcn/button';
import PageError from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function TechstackSentry() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl text-[#3defe9]">Sentry</h1>

      <div className="my-10 text-center text-3xl text-[#fecc1b]">
        <p>
          <span>Throw a sample error, and next, look for the error on the &nbsp;</span>
          <a className="underline" href="https://tcsk.sentry.io/issues/?project=4508533052801024">
            Issues Page
          </a>
          <span>.</span>
        </p>
        <p>
          <span>For more information, see &nbsp;</span>
          <a className="underline" href="https://docs.sentry.io/platforms/javascript/guides/remix">
            https://docs.sentry.io/platforms/javascript/guides/remix
          </a>
          <span>.</span>
        </p>
      </div>

      <Button
        id="fetch-movies-button"
        onClick={() => {
          throw new Error('Sentry Example Frontend Error');
        }}
      >
        Throw a sample error
      </Button>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
