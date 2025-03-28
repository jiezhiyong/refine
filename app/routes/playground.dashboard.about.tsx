import { useTranslation } from '@refinedev/core';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form, UIMatch, useSearchParams } from '@remix-run/react';
import { t } from 'i18next';
import {
  ArrowDown,
  ArrowUp,
  Bell,
  ChevronRight,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  GalleryVerticalEnd,
  LineChart,
  Link,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Star,
  Trash,
  Trash2,
} from 'lucide-react';
import React from 'react';
import { DateRange } from 'react-day-picker';

import { PageError } from '~/components/500';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Checkbox } from '~/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import { Label } from '~/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '~/components/ui/sidebar';
import { useDebounceSubmit } from '~/hooks/use-debounce-submit';
import { useUpdateSearchParams } from '~/hooks/use-update-search-params';
import { syncServiceLocaleToClient } from '~/providers';
import { getPreferencesCookie } from '~/services/cookie.server';
import { HandleFunction } from '~/types/handle';
import { tryParse } from '~/utils/try-parse';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title }, { name: 'description', content: data?.description }];
};

export const handle: HandleFunction = {
  uiTools: (_match: UIMatch, _matchs: UIMatch[]) => {
    return <UiTools />;
  },
  uiFilter: (_match: UIMatch, _matchs: UIMatch[]) => {
    return <UiFilter />;
  },
};

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  // 注意：如果要使用 SSR 进行翻译，需要手动同步服务端与客户端的 locale
  await syncServiceLocaleToClient((await getPreferencesCookie(request)).locale);

  return { title: t('pages.about.title'), description: t('pages.about.description') };
}

// UI
export default function DashboardAbout() {
  const { translate: t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-6xl text-[#3defe9]">{t('pages.about.title')}</h1>
      <p className="my-10 text-3xl text-[#fecc1b]">{t('pages.about.description')}</p>

      <div className="space-y-2 space-x-2 *:py-1 *:text-sm">
        <Badge>{t('pages.about.features1')}</Badge>
        <Badge>{t('pages.about.features2')}</Badge>
        <Badge>{t('pages.about.features3')}</Badge>
        <Badge>{t('pages.about.features4')}</Badge>
        <Badge>{t('pages.about.features5')}</Badge>
        <br />
        <Badge>{t('pages.about.features6')}</Badge>
        <Badge>{t('pages.about.features7')}</Badge>
        <Badge>{t('pages.about.features8')}</Badge>
        <Badge>{t('pages.about.features9')}</Badge>
        <Badge>{t('pages.about.features10')}</Badge>
        <Badge>{t('pages.about.features11')}</Badge>
      </div>

      {/* <PrefetchPageLinks page="/playground/article/post" /> */}
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// UI - 导航工具
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
  const updateSearchParams = useUpdateSearchParams();

  const starred = Boolean(searchParams.get('starred'));
  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="text-muted-foreground ml-2 hidden font-medium md:inline-block">Edit Oct 08</div>

      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateSearchParams({ starred: !starred })}>
        <Star className={starred ? 'fill-yellow-400' : ''} />
      </Button>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="data-[state=open]:bg-accent h-7 w-7">
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
                            <SidebarMenuButton
                              onClick={() => updateSearchParams({ [item.label]: !isActive })}
                              isActive={isActive}
                            >
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

// UI - 右侧过滤器
const dataFilter = {
  checkbox: [
    {
      title: 'Calendars Type',
      name: 'calendarsType',
      items: [
        { label: 'Personal', id: 'personal' },
        { label: 'Work', id: 'work' },
        { label: 'Family', id: 'family' },
      ],
    },
    {
      title: 'Calendars Favorites',
      name: 'calendarsFavorites',
      items: [
        { label: 'Holidays', id: 'holidays' },
        { label: 'Birthdays', id: 'birthdays' },
      ],
    },
  ],
};

function UiFilter() {
  const [searchParams] = useSearchParams();
  const dateRange = tryParse(searchParams.get('dateRange')) as unknown as DateRange;
  const updateSearchParams = useUpdateSearchParams();
  const debounceSubmit = useDebounceSubmit();

  return (
    <Form className="flex flex-1 flex-col overflow-x-hidden" onChange={(event) => debounceSubmit(event)}>
      <SidebarContent>
        <SidebarGroup className="p-0">
          <Calendar
            className="[&_[role=gridcell]]:w-[33px]"
            mode="range"
            selected={dateRange}
            onSelect={(res) => {
              updateSearchParams({ dateRange: JSON.stringify(res) });
            }}
          />
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        <SidebarGroup>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
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

        {dataFilter.checkbox.map((group, index) => (
          <React.Fragment key={group.name}>
            <SidebarSeparator className="mx-0" />
            <SidebarGroup className="py-0">
              <Collapsible defaultOpen={index === 0} className="group/collapsible">
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-sm"
                >
                  <CollapsibleTrigger>
                    {group.title}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent className="space-y-2 px-2 py-2">
                  {group.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        name={group.name}
                        id={item.id}
                        value={item.id}
                        defaultChecked={Boolean(searchParams.getAll(group.name).includes(item.id))}
                      />
                      <Label htmlFor={item.id} className="text-sm font-normal">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton type="button">
              <Plus />
              <span>New</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Form>
  );
}
