import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

/**
 * 浏览器的入口点 - 初始化客户端库、添加仅限客户端的提供程序等
 * https://remix.run/docs/en/main/file-conventions/entry.client
 */
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
