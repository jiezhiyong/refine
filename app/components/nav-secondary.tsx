/* eslint-disable import/namespace */
import * as Sentry from '@sentry/remix';
import { Activity, Bug } from 'lucide-react';
import { useRef } from 'react';
import { useTheme } from 'remix-themes';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components-shadcn/sidebar';
import { useMountEffect } from '~/hooks';
import { cn } from '~/utils';
import { ThemeSwitcher } from './switcher-theme';

// 次要菜单
const items = [{ title: 'Service Health Check', url: '/playground/dashboard/health', icon: Activity }];

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
                <Bug className="text-yellow-500" />
                <span>Report a Bug</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem key="theme-switch">
            <SidebarMenuButton asChild size="sm">
              <div className="cursor-pointer">
                <ThemeSwitcher theme={theme} setTheme={setTheme} />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
