import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  User,
  DollarSign,
  FileText,
  Clock,
  Mail,
  Phone,
  MapPin,
  Building2,
  Calendar,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';

interface ScreeningReportProps {
  applicationId: string;
  onBack: () => void;
}

export function ScreeningReport({ applicationId, onBack }: ScreeningReportProps) {
  const applicationData = {
    '1': {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      currentAddress: '789 Previous St, Apt 2B, Cityville, ST 12345',
      property: '123 Main St, Apt 4B',
      appliedDate: '2025-11-01',
      moveInDate: '2025-12-01',
      status: 'approved',
      creditScore: 750,
      monthlyIncome: 5500,
      employer: 'Tech Solutions Inc.',
      employmentLength: '3 years',
      rent: 1650,
      backgroundCheck: {
        status: 'clear',
        criminalRecord: false,
        evictionHistory: false,
        completedDate: '2025-11-02',
      },
      creditCheck: {
        score: 750,
        rating: 'Excellent',
        accountsInGoodStanding: 8,
        latePayments: 0,
        debtToIncome: 28,
      },
      employmentVerification: {
        verified: true,
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Engineer',
        yearsEmployed: 3,
        incomeVerified: true,
      },
      rentalHistory: {
        previousLandlord: 'John Smith Properties',
        contact: '(555) 987-6543',
        tenancyDuration: '2 years',
        rentOnTime: true,
        propertyCondition: 'Excellent',
        wouldReRent: true,
      },
    },
    '2': {
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      currentAddress: '456 Current Ave, Unit 5, Townsburg, ST 54321',
      property: '456 Oak Ave, Unit 2A',
      appliedDate: '2025-10-30',
      moveInDate: '2025-11-15',
      status: 'reviewing',
      creditScore: 680,
      monthlyIncome: 4200,
      employer: 'Design Studio LLC',
      employmentLength: '1.5 years',
      rent: 1400,
      backgroundCheck: {
        status: 'pending',
        criminalRecord: null,
        evictionHistory: null,
        completedDate: null,
      },
      creditCheck: {
        score: 680,
        rating: 'Good',
        accountsInGoodStanding: 6,
        latePayments: 2,
        debtToIncome: 35,
      },
      employmentVerification: {
        verified: true,
        company: 'Design Studio LLC',
        position: 'Graphic Designer',
        yearsEmployed: 1.5,
        incomeVerified: true,
      },
      rentalHistory: {
        previousLandlord: 'Metro Property Management',
        contact: '(555) 876-5432',
        tenancyDuration: '18 months',
        rentOnTime: true,
        propertyCondition: 'Good',
        wouldReRent: true,
      },
    },
  };

  const data = applicationData[applicationId as keyof typeof applicationData] || applicationData['1'];

  const getOverallScore = () => {
    const creditWeight = 0.35;
    const incomeWeight = 0.30;
    const backgroundWeight = 0.20;
    const rentalWeight = 0.15;

    const creditPoints = (data.creditScore / 850) * 100 * creditWeight;
    const incomeToRent = data.monthlyIncome / data.rent;
    const incomePoints = Math.min(incomeToRent / 3, 1) * 100 * incomeWeight;
    const backgroundPoints = data.backgroundCheck.status === 'clear' ? 100 * backgroundWeight : 50 * backgroundWeight;
    const rentalPoints = data.rentalHistory.wouldReRent ? 100 * rentalWeight : 50 * rentalWeight;

    return Math.round(creditPoints + incomePoints + backgroundPoints + rentalPoints);
  };

  const overallScore = getOverallScore();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'clear' || status === 'verified' || status === true) {
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    }
    if (status === 'pending') {
      return <Clock className="h-5 w-5 text-yellow-600" />;
    }
    return <XCircle className="h-5 w-5 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={onBack} className="mb-2">
            ← Back to Dashboard
          </Button>
          <h2>Screening Report</h2>
          <p className="text-muted-foreground">Comprehensive tenant evaluation for {data.name}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="default">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Approve
          </Button>
          <Button variant="destructive">
            <ThumbsDown className="h-4 w-4 mr-2" />
            Reject
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Overall Score</CardTitle>
            <CardDescription>Comprehensive evaluation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-6">
              <div className={`text-6xl mb-2 ${getScoreColor(overallScore)}`}>
                {overallScore}
              </div>
              <p className="text-muted-foreground mb-4">out of 100</p>
              <Progress value={overallScore} className="w-full mb-4" />
              <Badge variant={overallScore >= 80 ? 'default' : overallScore >= 60 ? 'secondary' : 'destructive'}>
                {overallScore >= 80 ? 'Excellent Candidate' : overallScore >= 60 ? 'Good Candidate' : 'Needs Review'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Applicant Information</CardTitle>
            <CardDescription>Contact and application details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p>{data.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>{data.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>{data.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Desired Property</p>
                  <p>{data.property}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Applied Date</p>
                  <p>{new Date(data.appliedDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Move-in Date</p>
                  <p>{new Date(data.moveInDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Current Address</p>
                <p>{data.currentAddress}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="credit" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="credit">Credit Check</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="rental">Rental History</TabsTrigger>
        </TabsList>

        <TabsContent value="credit" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Credit Report</CardTitle>
                  <CardDescription>Financial creditworthiness assessment</CardDescription>
                </div>
                <div className="text-right">
                  <div className={`text-4xl ${getScoreColor((data.creditScore / 850) * 100)}`}>
                    {data.creditScore}
                  </div>
                  <p className="text-sm text-muted-foreground">{data.creditCheck.rating}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Accounts in Good Standing</p>
                  <p className="text-2xl">{data.creditCheck.accountsInGoodStanding}</p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Late Payments (12mo)</p>
                  <p className="text-2xl">{data.creditCheck.latePayments}</p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Debt-to-Income Ratio</p>
                  <p className="text-2xl">{data.creditCheck.debtToIncome}%</p>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3">Score Breakdown</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Payment History</span>
                      <span className="text-sm">95%</span>
                    </div>
                    <Progress value={95} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Credit Utilization</span>
                      <span className="text-sm">82%</span>
                    </div>
                    <Progress value={82} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Length of Credit History</span>
                      <span className="text-sm">78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="background" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Background Check Results</CardTitle>
              <CardDescription>Criminal and eviction history verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Criminal Record Check</h4>
                    {getStatusIcon(data.backgroundCheck.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data.backgroundCheck.criminalRecord === false
                      ? 'No criminal records found'
                      : data.backgroundCheck.criminalRecord === true
                      ? 'Criminal records found - review required'
                      : 'Check in progress'}
                  </p>
                </div>
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Eviction History</h4>
                    {getStatusIcon(data.backgroundCheck.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data.backgroundCheck.evictionHistory === false
                      ? 'No eviction history found'
                      : data.backgroundCheck.evictionHistory === true
                      ? 'Eviction records found - review required'
                      : 'Check in progress'}
                  </p>
                </div>
              </div>
              {data.backgroundCheck.completedDate && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Completed on {new Date(data.backgroundCheck.completedDate).toLocaleDateString()}</span>
                </div>
              )}
              <Separator />
              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm">
                    {data.backgroundCheck.status === 'clear'
                      ? 'Background check completed with no issues found. This applicant has a clean record.'
                      : data.backgroundCheck.status === 'pending'
                      ? 'Background check is currently in progress. Results will be available within 24-48 hours.'
                      : 'Background check requires manual review.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employment Verification</CardTitle>
              <CardDescription>Income and employment status confirmation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Employment Status</h4>
                    {getStatusIcon(data.employmentVerification.verified)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {data.employmentVerification.verified ? 'Employment verified' : 'Verification pending'}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Company:</span> {data.employmentVerification.company}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Position:</span> {data.employmentVerification.position}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Duration:</span> {data.employmentVerification.yearsEmployed} years
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4>Income Verification</h4>
                    {getStatusIcon(data.employmentVerification.incomeVerified)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {data.employmentVerification.incomeVerified ? 'Income verified' : 'Verification pending'}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Monthly Income:</span> ${data.monthlyIncome.toLocaleString()}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Monthly Rent:</span> ${data.rent.toLocaleString()}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Income-to-Rent Ratio:</span> {(data.monthlyIncome / data.rent).toFixed(2)}x
                    </p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="mb-3">Income Analysis</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Gross Monthly Income</span>
                    <span className="text-sm">${data.monthlyIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Proposed Rent</span>
                    <span className="text-sm">${data.rent.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Rent as % of Income</span>
                    <span className={`text-sm ${((data.rent / data.monthlyIncome) * 100) <= 30 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {((data.rent / data.monthlyIncome) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    {((data.rent / data.monthlyIncome) * 100) <= 30 ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600">Rent is within recommended 30% guideline</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm text-yellow-600">Rent exceeds recommended 30% guideline</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rental" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rental History</CardTitle>
              <CardDescription>Previous landlord reference and tenancy record</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-3">Previous Landlord</h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Company:</span> {data.rentalHistory.previousLandlord}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Contact:</span> {data.rentalHistory.contact}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Tenancy Duration:</span> {data.rentalHistory.tenancyDuration}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">Reference Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(data.rentalHistory.rentOnTime)}
                      <span className="text-sm">Rent paid on time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(data.rentalHistory.propertyCondition === 'Excellent')}
                      <span className="text-sm">Property condition: {data.rentalHistory.propertyCondition}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(data.rentalHistory.wouldReRent)}
                      <span className="text-sm">Would rent to again: {data.rentalHistory.wouldReRent ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="mb-2">Landlord Comments</h4>
                <p className="text-sm text-muted-foreground italic">
                  "{data.name} was an excellent tenant. Always paid rent on time, maintained the property in great condition, and was very respectful and communicative. I would happily rent to them again."
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
