import { Activity, BadgeHelp, Moon, Sun } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components-shadcn/sidebar';
import { cn } from '~/utils/cn';
import { Theme, useTheme } from 'remix-themes';

const items = [
  { title: 'Service Health Check', url: '#', icon: Activity },
  { title: 'Help Center', url: '#', icon: BadgeHelp },
];

// 主题切换
function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className="w-full"
      onClick={() => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
      }}
    >
      <Sun size={16} className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon size={16} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span>&nbsp;</span>
    </div>
  );
}

export function NavSecondary() {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon className={cn(item.title === 'Health Check' && 'animate-pulse text-green-500')} />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <SidebarMenuItem key="theme-switch">
            <SidebarMenuButton asChild size="sm">
              <a href="void:(0)">
                <ThemeSwitcher />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
