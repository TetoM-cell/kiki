import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Filter, ArrowRight } from 'lucide-react';

interface TenantsPageProps {
  onViewTenant: (id: string) => void;
}

export function TenantsPage({ onViewTenant }: TenantsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const tenants = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      property: '123 Main St, Apt 4B',
      appliedDate: '2025-11-01',
      status: 'approved',
      creditScore: 750,
      backgroundStatus: 'clear',
      monthlyIncome: 5500,
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      property: '456 Oak Ave, Unit 2A',
      appliedDate: '2025-10-30',
      status: 'reviewing',
      creditScore: 680,
      backgroundStatus: 'pending',
      monthlyIncome: 4200,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 345-6789',
      property: '789 Pine Rd, Suite 3C',
      appliedDate: '2025-10-28',
      status: 'approved',
      creditScore: 720,
      backgroundStatus: 'clear',
      monthlyIncome: 6200,
    },
    {
      id: '4',
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 456-7890',
      property: '321 Elm St, Apt 1A',
      appliedDate: '2025-10-25',
      status: 'rejected',
      creditScore: 580,
      backgroundStatus: 'clear',
      monthlyIncome: 3200,
    },
    {
      id: '5',
      name: 'Jessica Martinez',
      email: 'jessica.martinez@email.com',
      phone: '(555) 567-8901',
      property: '654 Maple Dr, Unit 5B',
      appliedDate: '2025-10-22',
      status: 'approved',
      creditScore: 740,
      backgroundStatus: 'clear',
      monthlyIncome: 5800,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Approved</Badge>;
      case 'rejected':
        return <Badge style={{ backgroundColor: '#d01f1f', color: 'white' }}>Rejected</Badge>;
      case 'reviewing':
        return <Badge variant="secondary">Reviewing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getBackgroundBadge = (status: string) => {
    switch (status) {
      case 'clear':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Clear</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'review':
        return <Badge style={{ backgroundColor: '#d01f1f', color: 'white' }}>Review</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredTenants = tenants.filter(tenant =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tenant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tenant.property.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const approvedCount = tenants.filter(t => t.status === 'approved').length;
  const reviewingCount = tenants.filter(t => t.status === 'reviewing').length;
  const rejectedCount = tenants.filter(t => t.status === 'rejected').length;

  return (
    <div className="space-y-6">
      <div>
        <h2>Tenants</h2>
        <p className="text-muted-foreground">Manage and review all tenant applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{tenants.length}</p>
            <p className="text-sm text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>{approvedCount}</p>
            <p className="text-sm text-muted-foreground">Accepted tenants</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Under Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{reviewingCount}</p>
            <p className="text-sm text-muted-foreground">Pending decision</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#d01f1f' }}>{rejectedCount}</p>
            <p className="text-sm text-muted-foreground">Declined</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Tenants</CardTitle>
              <CardDescription>Click on a tenant to view detailed screening report</CardDescription>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or property..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Credit Score</TableHead>
                  <TableHead>Background</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTenants.map((tenant) => (
                  <TableRow key={tenant.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell onClick={() => onViewTenant(tenant.id)}>{tenant.name}</TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>
                      <div className="text-sm">
                        <p>{tenant.email}</p>
                        <p className="text-muted-foreground">{tenant.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>{tenant.property}</TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>
                      {new Date(tenant.appliedDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>
                      <span className="text-xl">{tenant.creditScore}</span>
                    </TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>
                      {getBackgroundBadge(tenant.backgroundStatus)}
                    </TableCell>
                    <TableCell onClick={() => onViewTenant(tenant.id)}>
                      {getStatusBadge(tenant.status)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onViewTenant(tenant.id)}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
