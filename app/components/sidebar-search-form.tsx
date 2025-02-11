import { Search } from 'lucide-react';

import { Label } from '~/components-shadcn/label';
import { SidebarGroup, SidebarGroupContent, SidebarInput } from '~/components-shadcn/sidebar';

export function SidebarSearchForm({ ...props }: React.ComponentProps<'form'>) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput id="search" placeholder="Search ..." className="pl-8" />
          <Search className="absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
