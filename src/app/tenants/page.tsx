'use client';

import { TenantsPage } from '../../components/TenantsPage';
import { useRouter } from 'next/navigation';

export default function TenantsListPage() {
  const router = useRouter();

  const handleViewTenant = (id: string) => {
    router.push(`/tenants/${id}`);
  };

  return <TenantsPage onViewTenant={handleViewTenant} />;
}
