'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from './ui/sidebar';
import { Home, Users, Settings } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
    { id: 'tenants', label: 'Tenants', icon: Users, href: '/tenants' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  ];

  const isActive = (href: string) => {
    return pathname?.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-4">
        <Link href="/" className="block hover:opacity-80 transition-opacity">
          <h1>RentScreenPro</h1>
          <p className="text-sm text-muted-foreground">Tenant Screening Platform</p>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
