import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Download, CheckCircle2, Clock, AlertCircle, Shield, Upload, CreditCard, User } from 'lucide-react';

export function IdentityVerificationPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const verifications = [
    {
      id: '1',
      name: 'Sarah Johnson',
      verificationDate: '2025-11-02',
      status: 'verified',
      ssn: '***-**-4567',
      ssnValidated: true,
      ssnMatch: true,
      dateOfBirth: '1990-05-15',
      driversLicense: 'CA-D1234567',
      dlVerified: true,
      dlExpiration: '2027-05-15',
      addressMatch: true,
      photoIdUploaded: true,
      photoIdType: 'Driver\'s License',
      biometricMatch: true,
    },
    {
      id: '2',
      name: 'Michael Chen',
      verificationDate: '2025-11-04',
      status: 'verified',
      ssn: '***-**-5678',
      ssnValidated: true,
      ssnMatch: true,
      dateOfBirth: '1988-09-22',
      driversLicense: 'CA-D7654321',
      dlVerified: true,
      dlExpiration: '2026-09-22',
      addressMatch: true,
      photoIdUploaded: true,
      photoIdType: 'Passport',
      biometricMatch: true,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      verificationDate: '2025-11-05',
      status: 'pending',
      ssn: '***-**-9012',
      ssnValidated: false,
      ssnMatch: null,
      dateOfBirth: '1992-03-10',
      driversLicense: 'TX-12345678',
      dlVerified: false,
      dlExpiration: '2028-03-10',
      addressMatch: null,
      photoIdUploaded: true,
      photoIdType: 'Driver\'s License',
      biometricMatch: null,
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
    verification.ssn.includes(searchQuery)
  );

  const verifiedCount = verifications.filter(v => v.status === 'verified').length;
  const pendingCount = verifications.filter(v => v.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2>Identity Verification</h2>
        <p className="text-muted-foreground">SSN validation and ID document verification</p>
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
            <p className="text-sm text-muted-foreground">Successfully verified</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{pendingCount}</p>
            <p className="text-sm text-muted-foreground">Awaiting verification</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>100%</p>
            <p className="text-sm text-muted-foreground">Verification accuracy</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Identity Verification Results</CardTitle>
              <CardDescription>SSN and document verification status</CardDescription>
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
                placeholder="Search by name or SSN..."
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
                  <TableHead>SSN</TableHead>
                  <TableHead>Document Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Verification Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVerifications.map((verification) => (
                  <TableRow key={verification.id}>
                    <TableCell>{verification.name}</TableCell>
                    <TableCell className="text-muted-foreground">{verification.ssn}</TableCell>
                    <TableCell>{verification.photoIdType}</TableCell>
                    <TableCell>{getStatusBadge(verification.status)}</TableCell>
                    <TableCell>{new Date(verification.verificationDate).toLocaleDateString()}</TableCell>
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
                  <CardDescription>Identity Verification Report</CardDescription>
                </div>
                {getStatusBadge(verification.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">SSN Validated</p>
                    {getStatusIcon(verification.ssnValidated)}
                  </div>
                  <p className="text-xs">
                    {verification.ssnValidated ? 'Valid' : verification.ssnValidated === false ? 'Invalid' : 'Checking'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">SSN Match</p>
                    {getStatusIcon(verification.ssnMatch)}
                  </div>
                  <p className="text-xs">
                    {verification.ssnMatch ? 'Matches' : verification.ssnMatch === false ? 'Mismatch' : 'Checking'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">DL Verified</p>
                    {getStatusIcon(verification.dlVerified)}
                  </div>
                  <p className="text-xs">
                    {verification.dlVerified ? 'Verified' : verification.dlVerified === false ? 'Failed' : 'Checking'}
                  </p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Address Match</p>
                    {getStatusIcon(verification.addressMatch)}
                  </div>
                  <p className="text-xs">
                    {verification.addressMatch ? 'Matches' : verification.addressMatch === false ? 'Mismatch' : 'Checking'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Social Security Number</p>
                    <p>{verification.ssn}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p>{new Date(verification.dateOfBirth).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Driver's License</p>
                    <p>{verification.driversLicense}</p>
                    <p className="text-xs text-muted-foreground">Expires: {new Date(verification.dlExpiration).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Photo ID Document</p>
                  {verification.photoIdUploaded ? (
                    <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />
                  ) : (
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <p className="text-sm">{verification.photoIdType}</p>
                {verification.photoIdUploaded && (
                  <p className="text-xs text-muted-foreground mt-1">Document uploaded and reviewed</p>
                )}
              </div>

              {verification.biometricMatch !== null && (
                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Biometric Verification</p>
                      <p className="text-xs mt-1">
                        {verification.biometricMatch ? 'Photo match confirmed' : 'Photo match failed'}
                      </p>
                    </div>
                    {getStatusIcon(verification.biometricMatch)}
                  </div>
                </div>
              )}

              {verification.status === 'verified' && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: '#41c12d' }} />
                  <div>
                    <p className="text-sm">Identity successfully verified. All checks passed and documents validated.</p>
                  </div>
                </div>
              )}

              {verification.status === 'pending' && (
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800">Identity verification in progress. This may take 24-48 hours.</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  View Documents
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
