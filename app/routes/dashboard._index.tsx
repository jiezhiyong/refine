import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { UIMatch, useNavigate, useSearchParams } from '@remix-run/react';
import {
  Settings2,
  FileText,
  Link,
  Copy,
  CornerUpRight,
  Trash2,
  CornerUpLeft,
  LineChart,
  GalleryVerticalEnd,
  Trash,
  Bell,
  ArrowUp,
  ArrowDown,
  Star,
  MoreHorizontal,
} from 'lucide-react';
import React from 'react';
import { Button } from '~/components-shadcn/button';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '~/components-shadcn/sidebar';
import { PlaceholderDemo1 } from '~/components/placeholder';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: (match: UIMatch, matchs: UIMatch[]) => {
    return <NavTools />;
  },
};

// 加载器 - 初始化 && 处理表单`GET`请求
export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const star = url.searchParams.get('star');
  return {};
}

// 处理器 - 处理表单`POST`请求
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData);
  return {};
}

// UI
export default function DashboardIndex() {
  return <PlaceholderDemo1 />;
}

const data = [
  [
    { label: 'Customize Page', icon: Settings2 },
    { label: 'Turn into wiki', icon: FileText },
  ],
  [
    { label: 'Copy Link', icon: Link },
    { label: 'Duplicate', icon: Copy },
    { label: 'Move to', icon: CornerUpRight },
    { label: 'Move to Trash', icon: Trash2 },
  ],
  [
    { label: 'Undo', icon: CornerUpLeft },
    { label: 'View analytics', icon: LineChart },
    { label: 'Version History', icon: GalleryVerticalEnd },
    { label: 'Show delete pages', icon: Trash },
    { label: 'Notifications', icon: Bell },
  ],
  [
    { label: 'Import', icon: ArrowUp },
    { label: 'Export', icon: ArrowDown },
  ],
];

function NavTools() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const newParams = new URLSearchParams(searchParams);

  function changeParams(key: string, value: boolean) {
    if (value) {
      newParams.set(key, '1');
    } else {
      newParams.delete(key);
    }

    navigate(`./?${newParams.toString()}`, { replace: true });
  }

  const isStarred = Boolean(searchParams.get('starred'));
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">Edit Oct 08</div>
      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => changeParams('starred', !isStarred)}>
        <Star className={isStarred ? 'fill-yellow-400' : ''} />
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-7 w-7 data-[state=open]:bg-accent">
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => {
                        const isActive = Boolean(searchParams.get(item.label));
                        return (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuButton onClick={() => changeParams(item.label, !isActive)} isActive={isActive}>
                              <item.icon /> <span>{item.label}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
