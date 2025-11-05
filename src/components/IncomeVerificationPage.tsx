import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Download, CheckCircle2, Clock, AlertCircle, FileText, Building2, DollarSign, TrendingUp } from 'lucide-react';

export function IncomeVerificationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const verifications = [
    {
      id: '1',
      name: 'Sarah Johnson',
      status: 'verified',
      verificationDate: '2025-11-02',
      employer: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      employmentType: 'Full-time',
      employmentLength: '3 years',
      monthlyIncome: 5500,
      annualIncome: 66000,
      payStubsProvided: 3,
      employmentVerified: true,
      incomeVerified: true,
      contactVerified: true,
      verificationMethod: 'Direct Employer Contact',
    },
    {
      id: '2',
      name: 'Michael Chen',
      status: 'verified',
      verificationDate: '2025-11-04',
      employer: 'Design Studio LLC',
      position: 'Graphic Designer',
      employmentType: 'Full-time',
      employmentLength: '1.5 years',
      monthlyIncome: 4200,
      annualIncome: 50400,
      payStubsProvided: 2,
      employmentVerified: true,
      incomeVerified: true,
      contactVerified: true,
      verificationMethod: 'Pay Stub Analysis',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      status: 'pending',
      verificationDate: '2025-11-05',
      employer: 'Healthcare Partners',
      position: 'Registered Nurse',
      employmentType: 'Full-time',
      employmentLength: '5 years',
      monthlyIncome: 6200,
      annualIncome: 74400,
      payStubsProvided: 2,
      employmentVerified: false,
      incomeVerified: false,
      contactVerified: false,
      verificationMethod: 'Pending',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Verified</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'failed':
        return <Badge style={{ backgroundColor: '#d01f1f', color: 'white' }}>Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (verified: boolean | null) => {
    if (verified === true) {
      return <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />;
    } else if (verified === false) {
      return <AlertCircle className="h-5 w-5" style={{ color: '#d01f1f' }} />;
    }
    return <Clock className="h-5 w-5 text-yellow-600" />;
  };

  const filteredVerifications = verifications.filter(verification =>
    verification.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verification.employer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const verifiedCount = verifications.filter(v => v.status === 'verified').length;
  const pendingCount = verifications.filter(v => v.status === 'pending').length;
  const avgIncome = Math.round(verifications.reduce((sum, v) => sum + v.monthlyIncome, 0) / verifications.length);

  return (
    <div className="space-y-6">
      <div>
        <h2>Income Verification</h2>
        <p className="text-muted-foreground">Employment and income verification management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{verifications.length}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>{verifiedCount}</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{pendingCount}</p>
            <p className="text-sm text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">${avgIncome.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Across applicants</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Verification Results</CardTitle>
              <CardDescription>Employment and income verification status</CardDescription>
            </div>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or employer..."
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
                  <TableHead>Applicant</TableHead>
                  <TableHead>Employer</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Monthly Income</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVerifications.map((verification) => (
                  <TableRow key={verification.id}>
                    <TableCell>{verification.name}</TableCell>
                    <TableCell>{verification.employer}</TableCell>
                    <TableCell>{verification.position}</TableCell>
                    <TableCell>
                      <span className="text-xl">${verification.monthlyIncome.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>{getStatusBadge(verification.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVerifications.map((verification) => (
          <Card key={verification.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{verification.name}</CardTitle>
                  <CardDescription>Income & Employment Verification</CardDescription>
                </div>
                {getStatusBadge(verification.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Employment Status</p>
                    {getStatusIcon(verification.employmentVerified)}
                  </div>
                  <p className="text-xs">
                    {verification.employmentVerified ? 'Verified' : verification.employmentVerified === false ? 'Failed' : 'Pending'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Income Verified</p>
                    {getStatusIcon(verification.incomeVerified)}
                  </div>
                  <p className="text-xs">
                    {verification.incomeVerified ? 'Verified' : verification.incomeVerified === false ? 'Failed' : 'Pending'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Contact Verified</p>
                    {getStatusIcon(verification.contactVerified)}
                  </div>
                  <p className="text-xs">
                    {verification.contactVerified ? 'Verified' : verification.contactVerified === false ? 'Failed' : 'Pending'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Pay Stubs</p>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs">{verification.payStubsProvided} documents</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Employer</p>
                    <p>{verification.employer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p>{verification.position} ({verification.employmentType})</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Employment Length</p>
                    <p>{verification.employmentLength}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Income</p>
                      <p className="text-xl">${verification.monthlyIncome.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Annual Income</p>
                      <p className="text-xl">${verification.annualIncome.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Verification Method</p>
                <p className="text-sm">{verification.verificationMethod}</p>
              </div>

              {verification.status === 'verified' && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: '#41c12d' }} />
                  <div>
                    <p className="text-sm">Employment and income successfully verified. All documentation reviewed and confirmed.</p>
                  </div>
                </div>
              )}

              {verification.status === 'pending' && (
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800">Verification in progress. Awaiting employer confirmation.</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  View Pay Stubs
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
