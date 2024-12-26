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
import { useEffect, useRef } from 'react';

// 次要菜单
const items = [{ title: 'Service Health Check', url: '#', icon: Activity }];

// 主题切换
function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className="w-full cursor-pointer"
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
  const buttonRef = useRef(null);
  const feedbackAttachedRef = useRef(false);

  useEffect(() => {
    if (feedbackAttachedRef.current) {
      return;
    }

    if (buttonRef.current) {
      const feedback = Sentry.feedbackIntegration({
        autoInject: false,
      });
      feedback.attachTo(buttonRef.current);

      feedbackAttachedRef.current = true;
    }
  }, []);

  return (
    <SidebarGroup className="mt-auto opacity-60">
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
              <div className="curpointer">
                <ThemeSwitcher />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
