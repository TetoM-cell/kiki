import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '../components/ui/sidebar';
import { Separator } from '../components/ui/separator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RentScreenPro - Tenant Screening Platform',
  description: 'Comprehensive tenant screening and background check platform for landlords',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            
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
                {children}
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
      </body>
    </html>
  );
}
