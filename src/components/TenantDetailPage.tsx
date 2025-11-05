import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import {
  CheckCircle2,
  XCircle,
  Clock,
  ArrowLeft,
  Download,
  CreditCard,
  Shield,
  AlertCircle,
  DollarSign,
  UserCheck,
  Users,
  Star,
  ThumbsUp,
  MapPin,
  Phone,
  Mail,
  Building2,
  Calendar,
} from 'lucide-react';

interface TenantDetailPageProps {
  tenantId: string;
  onBack: () => void;
}

export function TenantDetailPage({ tenantId, onBack }: TenantDetailPageProps) {
  // Mock data - in real app, this would be fetched based on tenantId
  const tenantData: Record<string, any> = {
    '1': {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      currentAddress: '789 Previous St, Apt 2B, Cityville, ST 12345',
      property: '123 Main St, Apt 4B',
      appliedDate: '2025-11-01',
      status: 'approved',
      creditScore: 750,
      creditRating: 'Excellent',
      creditAccounts: 8,
      creditLatePayments: 0,
      creditDebtToIncome: 28,
      backgroundStatus: 'clear',
      criminalRecords: 0,
      evictions: 0,
      monthlyIncome: 5500,
      annualIncome: 66000,
      employer: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      employmentLength: '3 years',
      ssnVerified: true,
      idVerified: true,
      landlordRating: 5,
      employerRating: 5,
      wouldReRent: true,
    },
    '2': {
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      currentAddress: '456 Current Ave, Unit 5, Townsburg, ST 54321',
      property: '456 Oak Ave, Unit 2A',
      appliedDate: '2025-10-30',
      status: 'reviewing',
      creditScore: 680,
      creditRating: 'Good',
      creditAccounts: 6,
      creditLatePayments: 2,
      creditDebtToIncome: 35,
      backgroundStatus: 'pending',
      criminalRecords: null,
      evictions: 0,
      monthlyIncome: 4200,
      annualIncome: 50400,
      employer: 'Design Studio LLC',
      position: 'Graphic Designer',
      employmentLength: '1.5 years',
      ssnVerified: true,
      idVerified: true,
      landlordRating: 4,
      employerRating: 4,
      wouldReRent: true,
    },
    '3': {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 345-6789',
      currentAddress: '123 Old Street, Unit 7, Oldtown, ST 98765',
      property: '789 Pine Rd, Suite 3C',
      appliedDate: '2025-10-28',
      status: 'approved',
      creditScore: 720,
      creditRating: 'Very Good',
      creditAccounts: 10,
      creditLatePayments: 1,
      creditDebtToIncome: 22,
      backgroundStatus: 'clear',
      criminalRecords: 0,
      evictions: 0,
      monthlyIncome: 6200,
      annualIncome: 74400,
      employer: 'Healthcare Partners',
      position: 'Registered Nurse',
      employmentLength: '5 years',
      ssnVerified: true,
      idVerified: true,
      landlordRating: 5,
      employerRating: 5,
      wouldReRent: true,
    },
    '4': {
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 456-7890',
      currentAddress: '999 West Ave, Apt 12, Westside, ST 45678',
      property: '321 Elm St, Apt 1A',
      appliedDate: '2025-10-25',
      status: 'rejected',
      creditScore: 580,
      creditRating: 'Fair',
      creditAccounts: 4,
      creditLatePayments: 5,
      creditDebtToIncome: 48,
      backgroundStatus: 'clear',
      criminalRecords: 0,
      evictions: 1,
      monthlyIncome: 3200,
      annualIncome: 38400,
      employer: 'Retail Corp',
      position: 'Sales Associate',
      employmentLength: '8 months',
      ssnVerified: true,
      idVerified: true,
      landlordRating: 2,
      employerRating: 3,
      wouldReRent: false,
    },
    '5': {
      name: 'Jessica Martinez',
      email: 'jessica.martinez@email.com',
      phone: '(555) 567-8901',
      currentAddress: '777 North Blvd, Suite 4, Northville, ST 23456',
      property: '654 Maple Dr, Unit 5B',
      appliedDate: '2025-10-22',
      status: 'approved',
      creditScore: 740,
      creditRating: 'Excellent',
      creditAccounts: 9,
      creditLatePayments: 0,
      creditDebtToIncome: 25,
      backgroundStatus: 'clear',
      criminalRecords: 0,
      evictions: 0,
      monthlyIncome: 5800,
      annualIncome: 69600,
      employer: 'Financial Services Inc.',
      position: 'Account Manager',
      employmentLength: '4 years',
      ssnVerified: true,
      idVerified: true,
      landlordRating: 5,
      employerRating: 5,
      wouldReRent: true,
    },
  };

  const tenant = tenantData[tenantId] || tenantData['1'];

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

  const getStatusIcon = (status: string | boolean | null) => {
    if (status === 'clear' || status === true) {
      return <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />;
    } else if (status === 'pending' || status === null) {
      return <Clock className="h-5 w-5 text-yellow-600" />;
    }
    return <XCircle className="h-5 w-5" style={{ color: '#d01f1f' }} />;
  };

  const getRatingStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={onBack} className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tenants
          </Button>
          <h2>{tenant.name}</h2>
          <p className="text-muted-foreground">Comprehensive screening report</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          {getStatusBadge(tenant.status)}
        </div>
      </div>

      {/* Contact & Application Info */}
      <Card>
        <CardHeader>
          <CardTitle>Applicant Information</CardTitle>
          <CardDescription>Contact and application details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{tenant.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>{tenant.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Desired Property</p>
                <p>{tenant.property}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Applied Date</p>
                <p>{new Date(tenant.appliedDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Current Address</p>
                <p>{tenant.currentAddress}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Credit Check Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Credit Check</CardTitle>
              </div>
              {getStatusIcon(true)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-5xl mb-2" style={{ color: tenant.creditScore >= 740 ? '#41c12d' : tenant.creditScore >= 670 ? '#eab308' : '#d01f1f' }}>
                {tenant.creditScore}
              </div>
              <p className="text-muted-foreground">{tenant.creditRating}</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Accounts</span>
                <span>{tenant.creditAccounts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Late Payments</span>
                <span style={{ color: tenant.creditLatePayments === 0 ? '#41c12d' : '#d01f1f' }}>
                  {tenant.creditLatePayments}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Debt-to-Income</span>
                <span>{tenant.creditDebtToIncome}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Background Check Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Background Check</CardTitle>
              </div>
              {getStatusIcon(tenant.backgroundStatus)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              {tenant.backgroundStatus === 'clear' ? (
                <CheckCircle2 className="h-16 w-16 mx-auto mb-2" style={{ color: '#41c12d' }} />
              ) : tenant.backgroundStatus === 'pending' ? (
                <Clock className="h-16 w-16 mx-auto mb-2 text-yellow-600" />
              ) : (
                <XCircle className="h-16 w-16 mx-auto mb-2" style={{ color: '#d01f1f' }} />
              )}
              <p className="text-muted-foreground capitalize">{tenant.backgroundStatus}</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Criminal Records</span>
                <span style={{ color: tenant.criminalRecords === 0 ? '#41c12d' : '#d01f1f' }}>
                  {tenant.criminalRecords !== null ? tenant.criminalRecords : 'Pending'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">National Check</span>
                <span style={{ color: '#41c12d' }}>Clear</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">County Check</span>
                <span style={{ color: '#41c12d' }}>Clear</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eviction History Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Eviction History</CardTitle>
              </div>
              {getStatusIcon(tenant.evictions === 0)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-5xl mb-2" style={{ color: tenant.evictions === 0 ? '#41c12d' : '#d01f1f' }}>
                {tenant.evictions}
              </div>
              <p className="text-muted-foreground">Evictions Found</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Court Records</span>
                <span>{tenant.evictions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Years Searched</span>
                <span>7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Counties Searched</span>
                <span>5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Income Verification Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Income Verification</CardTitle>
              </div>
              {getStatusIcon(true)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <div className="text-4xl mb-2">
                ${tenant.monthlyIncome.toLocaleString()}
              </div>
              <p className="text-muted-foreground">Monthly Income</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Annual Income</span>
                <span>${tenant.annualIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Employer</span>
                <span className="text-right">{tenant.employer}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Position</span>
                <span className="text-right">{tenant.position}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Employment Length</span>
                <span>{tenant.employmentLength}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Identity Verification Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Identity Verification</CardTitle>
              </div>
              {getStatusIcon(tenant.ssnVerified && tenant.idVerified)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <CheckCircle2 className="h-16 w-16 mx-auto mb-2" style={{ color: '#41c12d' }} />
              <p className="text-muted-foreground">Verified</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">SSN Validated</span>
                {getStatusIcon(tenant.ssnVerified)}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Photo ID Verified</span>
                {getStatusIcon(tenant.idVerified)}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Address Match</span>
                {getStatusIcon(true)}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Biometric Match</span>
                {getStatusIcon(true)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reference Checks Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Reference Checks</CardTitle>
              </div>
              {getStatusIcon(true)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Landlord Reference</p>
                {getRatingStars(tenant.landlordRating)}
                <div className="flex items-center gap-2 mt-2">
                  {tenant.wouldReRent ? (
                    <>
                      <ThumbsUp className="h-4 w-4" style={{ color: '#41c12d' }} />
                      <span className="text-sm">Would re-rent</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4" style={{ color: '#d01f1f' }} />
                      <span className="text-sm">Would not re-rent</span>
                    </>
                  )}
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Employer Reference</p>
                {getRatingStars(tenant.employerRating)}
                <p className="text-sm mt-2">Employment verified and confirmed</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">References Checked</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Rating</span>
                <span>{((tenant.landlordRating + tenant.employerRating) / 2).toFixed(1)} / 5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
