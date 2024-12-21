import { useFetcher } from '@remix-run/react';
import { Button } from '~/components-shadcn/button1';

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export function Sidebar({ children, isOpen, onToggle }: SidebarProps) {
  const fetcher = useFetcher();

  // 使用乐观 UI 立即更新界面状态
  const sidebarIsOpen = fetcher.formData?.has('sidebar') ? fetcher.formData.get('sidebar') === 'open' : isOpen;

  return (
    <>
      <fetcher.Form action="/sidebar" method="post">
        <Button name="sidebar" value={sidebarIsOpen ? 'closed' : 'open'} onClick={() => onToggle(!sidebarIsOpen)}>
          {sidebarIsOpen ? '关闭侧边栏' : '打开侧边栏'}
        </Button>
      </fetcher.Form>
      <aside hidden={!sidebarIsOpen}>{children}</aside>
    </>
  );
}
