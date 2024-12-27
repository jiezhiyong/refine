/* eslint-disable import/namespace */
import { Activity, Bug, Moon, Sun } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components-shadcn/sidebar';
import { cn } from '~/utils/cn';
import { Theme, useTheme } from 'remix-themes';
import * as Sentry from '@sentry/remix';
import { useRef } from 'react';
import { useMountEffect } from '~/hooks/use-mount-effect';

// 次要菜单
const items = [{ title: 'Service Health Check', url: '#', icon: Activity }];

// 主题切换
function ThemeSwitcher({
  theme,
  setTheme,
}: {
  theme: Theme | null;
  setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
}) {
  return (
    <div
      className="w-full cursor-pointer p-2"
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
  const [theme, setTheme] = useTheme();
  const buttonRef = useRef(null);

  useMountEffect(() => {
    if (!buttonRef.current) {
      return;
    }
    const feedback = Sentry.feedbackIntegration({ autoInject: false, colorScheme: theme });
    feedback.attachTo(buttonRef.current);
  });

  return (
    <SidebarGroup className="mt-auto opacity-80">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon className={cn(item.title === 'Service Health Check' && 'animate-pulse text-green-500')} />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <SidebarMenuItem key="sentry-feedback">
            <SidebarMenuButton asChild size="sm">
              <div ref={buttonRef} className="cursor-pointer">
                <Bug className="text-destructive" />
                <span>Report a Bug</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem key="theme-switch">
            <SidebarMenuButton asChild size="sm">
              <div className="cursor-pointer" style={{ padding: '0 !important' }}>
                <ThemeSwitcher theme={theme} setTheme={setTheme} />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
