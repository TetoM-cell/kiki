import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Download, AlertTriangle, CheckCircle2, XCircle, FileText, MapPin, Calendar } from 'lucide-react';

export function EvictionHistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const evictionSearches = [
    {
      id: '1',
      name: 'Sarah Johnson',
      ssn: '***-**-4567',
      status: 'clear',
      searchDate: '2025-11-02',
      evictionsFound: 0,
      courtRecords: 0,
      statesSearched: ['California', 'Nevada'],
      countiesSearched: 5,
      yearsSearched: 7,
    },
    {
      id: '2',
      name: 'Michael Chen',
      ssn: '***-**-5678',
      status: 'clear',
      searchDate: '2025-11-04',
      evictionsFound: 0,
      courtRecords: 0,
      statesSearched: ['California'],
      countiesSearched: 3,
      yearsSearched: 7,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      ssn: '***-**-9012',
      status: 'clear',
      searchDate: '2025-10-29',
      evictionsFound: 0,
      courtRecords: 0,
      statesSearched: ['Texas'],
      countiesSearched: 4,
      yearsSearched: 7,
    },
    {
      id: '4',
      name: 'David Thompson',
      ssn: '***-**-3456',
      status: 'found',
      searchDate: '2025-10-25',
      evictionsFound: 1,
      courtRecords: 1,
      statesSearched: ['Florida'],
      countiesSearched: 2,
      yearsSearched: 7,
      evictionDetails: [
        {
          caseNumber: 'EV-2022-08945',
          filingDate: '2022-08-15',
          county: 'Miami-Dade County, FL',
          plaintiff: 'Sunshine Property Management LLC',
          status: 'Judgment for Plaintiff',
          amountOwed: 4500,
          resolved: true,
        },
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'clear':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Clear</Badge>;
      case 'found':
        return <Badge style={{ backgroundColor: '#d01f1f', color: 'white' }}>Found</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'clear':
        return <CheckCircle2 className="h-6 w-6" style={{ color: '#41c12d' }} />;
      case 'found':
        return <XCircle className="h-6 w-6" style={{ color: '#d01f1f' }} />;
      default:
        return <AlertTriangle className="h-6 w-6 text-yellow-600" />;
    }
  };

  const filteredSearches = evictionSearches.filter(search =>
    search.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    search.ssn.includes(searchQuery)
  );

  const clearCount = evictionSearches.filter(s => s.status === 'clear').length;
  const foundCount = evictionSearches.filter(s => s.status === 'found').length;

  return (
    <div className="space-y-6">
      <div>
        <h2>Eviction History Search</h2>
        <p className="text-muted-foreground">Comprehensive eviction and court records search</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Searches</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{evictionSearches.length}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clear Records</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>{clearCount}</p>
            <p className="text-sm text-muted-foreground">No evictions found</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evictions Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#d01f1f' }}>{foundCount}</p>
            <p className="text-sm text-muted-foreground">Requires review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Search Depth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">7</p>
            <p className="text-sm text-muted-foreground">Years of history</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Eviction Search Results</CardTitle>
              <CardDescription>Court records and eviction filings</CardDescription>
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
                  <TableHead>Search Date</TableHead>
                  <TableHead>Evictions</TableHead>
                  <TableHead>Counties</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSearches.map((search) => (
                  <TableRow key={search.id}>
                    <TableCell>{search.name}</TableCell>
                    <TableCell className="text-muted-foreground">{search.ssn}</TableCell>
                    <TableCell>{getStatusBadge(search.status)}</TableCell>
                    <TableCell>{new Date(search.searchDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span style={{ color: search.evictionsFound === 0 ? '#41c12d' : '#d01f1f' }}>
                        {search.evictionsFound}
                      </span>
                    </TableCell>
                    <TableCell>{search.countiesSearched}</TableCell>
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

      <div className="grid grid-cols-1 gap-6">
        {filteredSearches.map((search) => (
          <Card key={search.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{search.name}</CardTitle>
                  <CardDescription>Eviction History Report</CardDescription>
                </div>
                {getStatusIcon(search.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Evictions Found</p>
                  <p className="text-2xl" style={{ color: search.evictionsFound === 0 ? '#41c12d' : '#d01f1f' }}>
                    {search.evictionsFound}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Court Records</p>
                  <p className="text-2xl">{search.courtRecords}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Counties Searched</p>
                  <p className="text-2xl">{search.countiesSearched}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years Searched</p>
                  <p className="text-2xl">{search.yearsSearched}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">States Searched</p>
                </div>
                <div className="flex gap-2">
                  {search.statesSearched.map((state, idx) => (
                    <Badge key={idx} variant="outline">{state}</Badge>
                  ))}
                </div>
              </div>

              {search.status === 'clear' && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: '#41c12d' }} />
                  <div>
                    <p className="text-sm">No eviction filings or court judgments found in the past {search.yearsSearched} years.</p>
                  </div>
                </div>
              )}

              {search.evictionDetails && search.evictionDetails.length > 0 && (
                <div className="space-y-3">
                  <h4>Eviction Records Found</h4>
                  {search.evictionDetails.map((eviction, idx) => (
                    <div key={idx} className="p-4 rounded-lg border bg-red-50 border-red-200">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="h-4 w-4" style={{ color: '#d01f1f' }} />
                            <span>Case #{eviction.caseNumber}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{eviction.status}</p>
                        </div>
                        {eviction.resolved && (
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                            Resolved
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Filing Date</p>
                          <p>{new Date(eviction.filingDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">County</p>
                          <p>{eviction.county}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Plaintiff</p>
                          <p>{eviction.plaintiff}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Amount Owed</p>
                          <p>${eviction.amountOwed.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800">Eviction found on record. Review case details and consider applicant's explanation before making a decision.</p>
                    </div>
                  </div>
                </div>
              )}

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Full Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
