import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { TenantsPage } from './components/TenantsPage';
import { TenantDetailPage } from './components/TenantDetailPage';
import { SettingsPage } from './components/SettingsPage';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarHeader,
} from './components/ui/sidebar';
import { Separator } from './components/ui/separator';
import { Home, Users, Settings } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'main' | 'tenantDetail'>('main');

  const handleViewApplication = (id: string) => {
    setSelectedTenantId(id);
    setViewMode('tenantDetail');
  };

  const handleViewTenant = (id: string) => {
    setSelectedTenantId(id);
    setViewMode('tenantDetail');
  };

  const handleBackToTenants = () => {
    setSelectedTenantId(null);
    setViewMode('main');
    setActivePage('tenants');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'tenants', label: 'Tenants', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    if (viewMode === 'tenantDetail' && selectedTenantId) {
      return (
        <TenantDetailPage
          tenantId={selectedTenantId}
          onBack={handleBackToTenants}
        />
      );
    }

    switch (activePage) {
      case 'dashboard':
        return <Dashboard onViewApplication={handleViewApplication} />;
      case 'tenants':
        return <TenantsPage onViewTenant={handleViewTenant} />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard onViewApplication={handleViewApplication} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-4">
            <div>
              <h1>RentScreenPro</h1>
              <p className="text-sm text-muted-foreground">Tenant Screening Platform</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => {
                          setActivePage(item.id);
                          setViewMode('main');
                        }}
                        isActive={activePage === item.id && viewMode === 'main'}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center justify-between flex-1">
              <div>
                <span className="text-sm text-muted-foreground">Welcome, Property Manager</span>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            {renderContent()}
          </main>

          <footer className="border-t">
            <div className="px-6 py-4">
              <p className="text-sm text-muted-foreground text-center">
                © 2025 RentScreenPro. All rights reserved.
              </p>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
