import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Download, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';

export function CreditCheckPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const creditReports = [
    {
      id: '1',
      name: 'Sarah Johnson',
      ssn: '***-**-4567',
      score: 750,
      rating: 'Excellent',
      date: '2025-11-01',
      accounts: 8,
      latePayments: 0,
      debtToIncome: 28,
      publicRecords: 0,
      inquiries: 2,
      oldestAccount: '8 years',
      totalCredit: 45000,
      creditUsed: 12500,
    },
    {
      id: '2',
      name: 'Michael Chen',
      ssn: '***-**-5678',
      score: 680,
      rating: 'Good',
      date: '2025-10-30',
      accounts: 6,
      latePayments: 2,
      debtToIncome: 35,
      publicRecords: 0,
      inquiries: 4,
      oldestAccount: '5 years',
      totalCredit: 28000,
      creditUsed: 11200,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      ssn: '***-**-9012',
      score: 720,
      rating: 'Very Good',
      date: '2025-10-28',
      accounts: 10,
      latePayments: 1,
      debtToIncome: 22,
      publicRecords: 0,
      inquiries: 1,
      oldestAccount: '12 years',
      totalCredit: 62000,
      creditUsed: 18600,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 740) return '#41c12d';
    if (score >= 670) return '#eab308';
    if (score >= 580) return '#f97316';
    return '#d01f1f';
  };

  const getRatingBadgeVariant = (rating: string) => {
    if (rating === 'Excellent') return 'default';
    if (rating === 'Very Good' || rating === 'Good') return 'secondary';
    return 'destructive';
  };

  const filteredReports = creditReports.filter(report =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.ssn.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div>
        <h2>Credit Score Checks</h2>
        <p className="text-muted-foreground">Comprehensive credit reports and scoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{creditReports.length}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Credit Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: getScoreColor(717) }}>717</p>
            <p className="text-sm text-muted-foreground">Across all applicants</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excellent Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>33%</p>
            <p className="text-sm text-muted-foreground">740+ scores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reports Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">2</p>
            <p className="text-sm text-muted-foreground">Awaiting results</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Credit Reports</CardTitle>
              <CardDescription>View and download full credit reports</CardDescription>
            </div>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Batch Export
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
                  <TableHead>Credit Score</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Report Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.name}</TableCell>
                    <TableCell className="text-muted-foreground">{report.ssn}</TableCell>
                    <TableCell>
                      <span className="text-2xl" style={{ color: getScoreColor(report.score) }}>
                        {report.score}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRatingBadgeVariant(report.rating)}>
                        {report.rating}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Report
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
        {filteredReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{report.name}</CardTitle>
                  <CardDescription>Detailed Credit Analysis</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-4xl" style={{ color: getScoreColor(report.score) }}>
                    {report.score}
                  </div>
                  <p className="text-sm text-muted-foreground">{report.rating}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Accounts</p>
                  <p className="text-xl">{report.accounts}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Late Payments</p>
                  <p className="text-xl" style={{ color: report.latePayments === 0 ? '#41c12d' : '#d01f1f' }}>
                    {report.latePayments}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Debt-to-Income</p>
                  <p className="text-xl">{report.debtToIncome}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Public Records</p>
                  <p className="text-xl" style={{ color: report.publicRecords === 0 ? '#41c12d' : '#d01f1f' }}>
                    {report.publicRecords}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground mb-2">Credit Utilization</p>
                <Progress value={(report.creditUsed / report.totalCredit) * 100} className="mb-2" />
                <div className="flex justify-between text-sm">
                  <span>${report.creditUsed.toLocaleString()} used</span>
                  <span>${report.totalCredit.toLocaleString()} available</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-sm text-muted-foreground">Credit Age</p>
                  <p className="text-sm">{report.oldestAccount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Recent Inquiries</p>
                  <p className="text-sm">{report.inquiries}</p>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Full Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Credit Score Distribution</CardTitle>
          <CardDescription>Overview of applicant credit ranges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Excellent (740-850)</span>
                <span className="text-sm" style={{ color: '#41c12d' }}>33%</span>
              </div>
              <Progress value={33} style={{ backgroundColor: '#e5e7eb' }} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Very Good (670-739)</span>
                <span className="text-sm">67%</span>
              </div>
              <Progress value={67} style={{ backgroundColor: '#e5e7eb' }} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Good (580-669)</span>
                <span className="text-sm">0%</span>
              </div>
              <Progress value={0} style={{ backgroundColor: '#e5e7eb' }} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Fair (300-579)</span>
                <span className="text-sm" style={{ color: '#d01f1f' }}>0%</span>
              </div>
              <Progress value={0} style={{ backgroundColor: '#e5e7eb' }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
