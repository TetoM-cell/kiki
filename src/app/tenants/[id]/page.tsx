'use client';

import { TenantDetailPage } from '../../../components/TenantDetailPage';
import { useRouter } from 'next/navigation';

export default function TenantDetailRoute({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/tenants');
  };

  return <TenantDetailPage tenantId={params.id} onBack={handleBack} />;
}
