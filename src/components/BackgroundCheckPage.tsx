import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Shield, AlertTriangle, CheckCircle2, Clock, Download, MapPin } from 'lucide-react';

export function BackgroundCheckPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const backgroundChecks = [
    {
      id: '1',
      name: 'Sarah Johnson',
      ssn: '***-**-4567',
      status: 'clear',
      date: '2025-11-02',
      nationalCheck: 'clear',
      countyCheck: 'clear',
      stateCheck: 'clear',
      federalCheck: 'clear',
      sexOffenderRegistry: 'clear',
      countiesSearched: ['Los Angeles County, CA', 'Orange County, CA'],
      criminalRecords: 0,
      warrants: 0,
    },
    {
      id: '2',
      name: 'Michael Chen',
      ssn: '***-**-5678',
      status: 'pending',
      date: '2025-11-04',
      nationalCheck: 'pending',
      countyCheck: 'pending',
      stateCheck: 'pending',
      federalCheck: 'pending',
      sexOffenderRegistry: 'pending',
      countiesSearched: ['San Diego County, CA'],
      criminalRecords: null,
      warrants: null,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      ssn: '***-**-9012',
      status: 'clear',
      date: '2025-10-29',
      nationalCheck: 'clear',
      countyCheck: 'clear',
      stateCheck: 'clear',
      federalCheck: 'clear',
      sexOffenderRegistry: 'clear',
      countiesSearched: ['Harris County, TX', 'Dallas County, TX'],
      criminalRecords: 0,
      warrants: 0,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'clear':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Clear</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'review':
        return <Badge style={{ backgroundColor: '#d01f1f', color: 'white' }}>Needs Review</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'clear':
        return <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'review':
        return <AlertTriangle className="h-5 w-5" style={{ color: '#d01f1f' }} />;
      default:
        return <Shield className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const filteredChecks = backgroundChecks.filter(check =>
    check.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    check.ssn.includes(searchQuery)
  );

  const clearCount = backgroundChecks.filter(c => c.status === 'clear').length;
  const pendingCount = backgroundChecks.filter(c => c.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2>Criminal Background Checks</h2>
        <p className="text-muted-foreground">National and county database searches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{backgroundChecks.length}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clear Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>{clearCount}</p>
            <p className="text-sm text-muted-foreground">No records found</p>
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
            <CardTitle>Avg Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">24h</p>
            <p className="text-sm text-muted-foreground">Processing time</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Background Check Results</CardTitle>
              <CardDescription>Criminal records and database searches</CardDescription>
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
                  <TableHead>Status</TableHead>
                  <TableHead>Check Date</TableHead>
                  <TableHead>Criminal Records</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredChecks.map((check) => (
                  <TableRow key={check.id}>
                    <TableCell>{check.name}</TableCell>
                    <TableCell className="text-muted-foreground">{check.ssn}</TableCell>
                    <TableCell>{getStatusBadge(check.status)}</TableCell>
                    <TableCell>{new Date(check.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {check.criminalRecords !== null ? (
                        <span style={{ color: check.criminalRecords === 0 ? '#41c12d' : '#d01f1f' }}>
                          {check.criminalRecords === 0 ? 'None' : check.criminalRecords}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Pending</span>
                      )}
                    </TableCell>
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
        {filteredChecks.map((check) => (
          <Card key={check.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{check.name}</CardTitle>
                  <CardDescription>Comprehensive Background Check</CardDescription>
                </div>
                {getStatusIcon(check.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">National Check</p>
                    {getStatusIcon(check.nationalCheck)}
                  </div>
                  <p className="text-xs capitalize">{check.nationalCheck}</p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">County Check</p>
                    {getStatusIcon(check.countyCheck)}
                  </div>
                  <p className="text-xs capitalize">{check.countyCheck}</p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">State Check</p>
                    {getStatusIcon(check.stateCheck)}
                  </div>
                  <p className="text-xs capitalize">{check.stateCheck}</p>
                </div>

                <div className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">Federal Check</p>
                    {getStatusIcon(check.federalCheck)}
                  </div>
                  <p className="text-xs capitalize">{check.federalCheck}</p>
                </div>
              </div>

              <div className="p-3 rounded-lg border bg-muted/50">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-muted-foreground">Sex Offender Registry</p>
                  {getStatusIcon(check.sexOffenderRegistry)}
                </div>
                <p className="text-xs capitalize">{check.sexOffenderRegistry}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Counties Searched</p>
                </div>
                <ul className="space-y-1">
                  {check.countiesSearched.map((county, idx) => (
                    <li key={idx} className="text-sm pl-6">• {county}</li>
                  ))}
                </ul>
              </div>

              {check.status === 'clear' && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: '#41c12d' }} />
                  <div>
                    <p className="text-sm">No criminal records or warrants found. Applicant has a clean background.</p>
                  </div>
                </div>
              )}

              {check.status === 'pending' && (
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800">Background check in progress. Results expected within 24-48 hours.</p>
                  </div>
                </div>
              )}

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
