'use client';

import { Dashboard } from '../../components/Dashboard';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleViewApplication = (id: string) => {
    router.push(`/tenants/${id}`);
  };

  return <Dashboard onViewApplication={handleViewApplication} />;
}
