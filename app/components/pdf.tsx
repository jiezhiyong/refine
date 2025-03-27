import { lazy, Suspense } from 'react';

import { Loader } from '~/components/refine/loader';
import { TAny } from '~/types/any';

// 使用动态导入隔离PDF渲染器的加载，确保PDF渲染器的代码只在需要时才加载和执行
// 解决从使用 @monaco-editor/react 的页面导航到使用 @react-pdf/renderer 的页面时的冲突问题（同一个脚本文件中有多个匿名define调用）
const PDFRenderer = lazy(() => import('./pdf-renderer'));

type PdfProps = {
  record: TAny;
};

/**
 * PDF Layout 示例 - 实际使用时请根据需要修改，在业务路由中使用
 * 使用React的lazy和Suspense来动态导入PDF渲染器组件，这确保了PDF渲染器组件在Monaco编辑器完全卸载后才加载
 */
export const PdfLayout = ({ record }: PdfProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          <div className="flex min-h-40 w-20">
            <Loader />
          </div>
        </div>
      }
    >
      <PDFRenderer record={record} />
    </Suspense>
  );
};
