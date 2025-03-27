/* eslint-disable import/namespace */
import * as Sentry from '@sentry/remix';
import { t } from 'i18next';
import { Activity, Bookmark, Bug } from 'lucide-react';
import { useRef } from 'react';
import { useTheme } from 'remix-themes';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';
import { useMountEffect } from '~/hooks/use-mount-effect';
import { cn } from '~/lib/utils';

import { ThemeSwitcher } from './switcher-theme';

// 次要菜单
const items = [
  { title: 'API Docs', url: '/api-docs', icon: Bookmark },
  { title: 'Service Health Check', url: 'https://stats.uptimerobot.com/XtZEMRaY1Y', icon: Activity },
];

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
          {items.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <item.icon className={cn(item.title === 'Service Health Check' && 'animate-pulse text-green-500')} />
                  <span>{t(`menusSecondary.${item.title}`, item.title)}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <SidebarMenuItem key="sentry-feedback">
            <SidebarMenuButton asChild size="sm">
              <div ref={buttonRef} className="cursor-pointer">
                <Bug className="text-yellow-500" />
                <span>{t('menusSecondary.Report a Bug', 'Report a Bug')}</span>
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
