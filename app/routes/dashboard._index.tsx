import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, UIMatch, useNavigate, useSearchParams, useSubmit } from '@remix-run/react';
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
  Filter,
  FilterX,
  Plus,
  Search,
  ChevronRight,
} from 'lucide-react';
import React from 'react';
import { Button } from '~/components-shadcn/button';
import { Calendar } from '~/components-shadcn/calendar';
import { Label } from '~/components-shadcn/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInput,
  SidebarSeparator,
  SidebarGroupLabel,
} from '~/components-shadcn/sidebar';
import { PlaceholderDemo1 } from '~/components/placeholder';
import { HandleFunction } from '~/types/handle';
import { useDebounceFn } from 'ahooks';
import { Checkbox } from '~/components-shadcn/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components-shadcn/collapsible';
import { FormItem } from '~/components-shadcn/form';

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: (match: UIMatch, matchs: UIMatch[]) => {
    return <UiTools />;
  },
  uiFilter: (match: UIMatch, matchs: UIMatch[]) => {
    return <UiFilter />;
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

const dataTools = [
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

function UiTools() {
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

  const starred = Boolean(searchParams.get('starred'));
  const filter = Boolean(searchParams.get('filter'));
  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">Edit Oct 08</div>

      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => changeParams('starred', !starred)}>
        <Star className={starred ? 'fill-yellow-400' : ''} />
      </Button>

      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => changeParams('filter', !filter)}>
        {filter ? <FilterX /> : <Filter />}
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
              {dataTools.map((group, index) => (
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

const dataFilter = {
  checkbox: [
    {
      name: 'Calendars Type',
      items: ['Personal', 'Work', 'Family'],
    },
    {
      name: 'Favorites',
      items: ['Holidays', 'Birthdays'],
    },
  ],
};

function UiFilter() {
  const [searchParams] = useSearchParams();

  const submit = useSubmit();
  const navigate = useNavigate();
  const newParams = new URLSearchParams(searchParams);

  const { run: debounceSubmit } = useDebounceFn((formData: FormData) => submit(formData, { replace: true }), {
    wait: 300,
  });

  function changeParams(key: string, value: boolean) {
    if (value) {
      newParams.set(key, '1');
    } else {
      newParams.delete(key);
    }

    navigate(`./?${newParams.toString()}`, { replace: true });
  }

  return (
    <Form
      className="flex flex-1 flex-col"
      onChange={(event) => {
        const formData = new FormData(event.currentTarget);
        searchParams.forEach((value, key) => {
          if (!formData.has(key)) {
            formData.append(key, value);
          }
        });
        debounceSubmit(formData);
      }}
    >
      <SidebarContent>
        <SidebarGroup>
          <div className="relative">
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            <Label htmlFor="desc" className="sr-only">
              Search
            </Label>
            <SidebarInput
              type="search"
              id="desc"
              name="desc"
              defaultValue={searchParams.get('desc') || ''}
              placeholder="Search ..."
              className="pl-8"
            />
          </div>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <Calendar className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]" />
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        {dataFilter.checkbox.map((group, index) => (
          <React.Fragment key={group.name}>
            <SidebarGroup key={group.name} className="py-0">
              <Collapsible defaultOpen={index === 0} className="group/collapsible">
                <SidebarGroupLabel
                  asChild
                  className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger>
                    {group.name}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent className="space-y-2 px-2 py-2">
                  {group.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox name={item} id={item} />
                      <Label htmlFor={item} className="text-sm font-normal">
                        {item}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarSeparator className="mx-0" />
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Form>
  );
}
