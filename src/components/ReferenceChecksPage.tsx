import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Search, Download, CheckCircle2, Clock, Phone, Mail, Building2, User, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

export function ReferenceChecksPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const referenceChecks = [
    {
      id: '1',
      applicantName: 'Sarah Johnson',
      checkDate: '2025-11-02',
      status: 'completed',
      landlordReferences: [
        {
          type: 'Previous Landlord',
          name: 'John Smith Properties',
          contactPerson: 'John Smith',
          phone: '(555) 987-6543',
          email: 'john@smithproperties.com',
          relationship: 'Landlord',
          tenancyDuration: '2 years',
          rentOnTime: true,
          propertyCondition: 'Excellent',
          wouldReRent: true,
          rating: 5,
          comments: 'Excellent tenant. Always paid rent on time, maintained the property in great condition, and was very respectful and communicative. I would happily rent to them again.',
          verificationDate: '2025-11-02',
        },
      ],
      employerReferences: [
        {
          type: 'Current Employer',
          company: 'Tech Solutions Inc.',
          contactPerson: 'Michael Anderson',
          phone: '(555) 234-8765',
          email: 'hr@techsolutions.com',
          position: 'HR Manager',
          employeePosition: 'Senior Software Engineer',
          employmentLength: '3 years',
          employmentVerified: true,
          goodStanding: true,
          rating: 5,
          comments: 'Sarah is a reliable and dedicated employee. She has excellent work ethics and is always professional.',
          verificationDate: '2025-11-02',
        },
      ],
    },
    {
      id: '2',
      applicantName: 'Michael Chen',
      checkDate: '2025-11-04',
      status: 'completed',
      landlordReferences: [
        {
          type: 'Previous Landlord',
          name: 'Metro Property Management',
          contactPerson: 'Lisa Martinez',
          phone: '(555) 876-5432',
          email: 'lisa@metropm.com',
          relationship: 'Property Manager',
          tenancyDuration: '18 months',
          rentOnTime: true,
          propertyCondition: 'Good',
          wouldReRent: true,
          rating: 4,
          comments: 'Michael was a good tenant. Paid rent consistently and kept the property in good condition. No complaints.',
          verificationDate: '2025-11-04',
        },
      ],
      employerReferences: [
        {
          type: 'Current Employer',
          company: 'Design Studio LLC',
          contactPerson: 'Rachel Green',
          phone: '(555) 345-9876',
          email: 'rachel@designstudio.com',
          position: 'Studio Manager',
          employeePosition: 'Graphic Designer',
          employmentLength: '1.5 years',
          employmentVerified: true,
          goodStanding: true,
          rating: 4,
          comments: 'Michael is a talented designer and a dependable team member.',
          verificationDate: '2025-11-04',
        },
      ],
    },
    {
      id: '3',
      applicantName: 'Emily Rodriguez',
      checkDate: '2025-11-05',
      status: 'pending',
      landlordReferences: [
        {
          type: 'Previous Landlord',
          name: 'Houston Rentals Inc.',
          contactPerson: 'David Wilson',
          phone: '(555) 456-7890',
          email: 'david@houstonrentals.com',
          relationship: 'Landlord',
          tenancyDuration: null,
          rentOnTime: null,
          propertyCondition: null,
          wouldReRent: null,
          rating: null,
          comments: null,
          verificationDate: null,
        },
      ],
      employerReferences: [
        {
          type: 'Current Employer',
          company: 'Healthcare Partners',
          contactPerson: null,
          phone: '(555) 567-8901',
          email: 'hr@healthcarepartners.com',
          position: null,
          employeePosition: 'Registered Nurse',
          employmentLength: null,
          employmentVerified: false,
          goodStanding: null,
          rating: null,
          comments: null,
          verificationDate: null,
        },
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'partial':
        return <Badge variant="outline">Partial</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRatingStars = (rating: number | null) => {
    if (rating === null) return <span className="text-muted-foreground">Not rated</span>;
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

  const filteredChecks = referenceChecks.filter(check =>
    check.applicantName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const completedCount = referenceChecks.filter(c => c.status === 'completed').length;
  const pendingCount = referenceChecks.filter(c => c.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2>Reference Checks</h2>
        <p className="text-muted-foreground">Previous landlords and employer references</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{referenceChecks.length}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>{completedCount}</p>
            <p className="text-sm text-muted-foreground">Verified references</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{pendingCount}</p>
            <p className="text-sm text-muted-foreground">Awaiting responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">4.5</p>
            <p className="text-sm text-muted-foreground">Out of 5 stars</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Reference Check Results</CardTitle>
              <CardDescription>Landlord and employer reference verification</CardDescription>
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
                placeholder="Search by applicant name..."
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
                  <TableHead>Check Date</TableHead>
                  <TableHead>Landlord Refs</TableHead>
                  <TableHead>Employer Refs</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredChecks.map((check) => (
                  <TableRow key={check.id}>
                    <TableCell>{check.applicantName}</TableCell>
                    <TableCell>{new Date(check.checkDate).toLocaleDateString()}</TableCell>
                    <TableCell>{check.landlordReferences.length}</TableCell>
                    <TableCell>{check.employerReferences.length}</TableCell>
                    <TableCell>{getStatusBadge(check.status)}</TableCell>
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

      <div className="space-y-6">
        {filteredChecks.map((check) => (
          <Card key={check.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{check.applicantName}</CardTitle>
                  <CardDescription>Reference Check Report</CardDescription>
                </div>
                {getStatusBadge(check.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Landlord References */}
              <div>
                <h4 className="mb-4">Landlord References</h4>
                {check.landlordReferences.map((ref, idx) => (
                  <Card key={idx} className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-base">{ref.type}</CardTitle>
                      <CardDescription>{ref.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Contact Person</p>
                            <p>{ref.contactPerson}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p>{ref.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-sm">{ref.email}</p>
                          </div>
                        </div>
                        {ref.tenancyDuration && (
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Tenancy Duration</p>
                              <p>{ref.tenancyDuration}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {ref.verificationDate && (
                        <>
                          <Separator />
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              {ref.rentOnTime ? (
                                <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />
                              ) : (
                                <Clock className="h-5 w-5 text-yellow-600" />
                              )}
                              <span className="text-sm">
                                {ref.rentOnTime ? 'Rent paid on time' : 'Late payments reported'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {ref.wouldReRent ? (
                                <ThumbsUp className="h-5 w-5" style={{ color: '#41c12d' }} />
                              ) : (
                                <ThumbsDown className="h-5 w-5" style={{ color: '#d01f1f' }} />
                              )}
                              <span className="text-sm">
                                {ref.wouldReRent ? 'Would re-rent' : 'Would not re-rent'}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Property Condition</p>
                              <p className="text-sm">{ref.propertyCondition}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Rating</p>
                            {getRatingStars(ref.rating)}
                          </div>

                          {ref.comments && (
                            <div className="p-3 rounded-lg bg-muted/50">
                              <p className="text-sm text-muted-foreground mb-1">Comments</p>
                              <p className="text-sm italic">"{ref.comments}"</p>
                            </div>
                          )}
                        </>
                      )}

                      {!ref.verificationDate && (
                        <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                          <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-sm text-yellow-800">Awaiting response from landlord reference.</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Employer References */}
              <div>
                <h4 className="mb-4">Employer References</h4>
                {check.employerReferences.map((ref, idx) => (
                  <Card key={idx} className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-base">{ref.type}</CardTitle>
                      <CardDescription>{ref.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ref.contactPerson && (
                          <div className="flex items-center gap-3">
                            <User className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Contact Person</p>
                              <p>{ref.contactPerson}</p>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p>{ref.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-sm">{ref.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Employee Position</p>
                            <p>{ref.employeePosition}</p>
                          </div>
                        </div>
                      </div>

                      {ref.verificationDate && (
                        <>
                          <Separator />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              {ref.employmentVerified ? (
                                <CheckCircle2 className="h-5 w-5" style={{ color: '#41c12d' }} />
                              ) : (
                                <Clock className="h-5 w-5 text-yellow-600" />
                              )}
                              <span className="text-sm">
                                {ref.employmentVerified ? 'Employment verified' : 'Verification pending'}
                              </span>
                            </div>
                            {ref.employmentLength && (
                              <div>
                                <p className="text-sm text-muted-foreground">Employment Length</p>
                                <p className="text-sm">{ref.employmentLength}</p>
                              </div>
                            )}
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Rating</p>
                            {getRatingStars(ref.rating)}
                          </div>

                          {ref.comments && (
                            <div className="p-3 rounded-lg bg-muted/50">
                              <p className="text-sm text-muted-foreground mb-1">Comments</p>
                              <p className="text-sm italic">"{ref.comments}"</p>
                            </div>
                          )}
                        </>
                      )}

                      {!ref.verificationDate && (
                        <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                          <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-sm text-yellow-800">Awaiting response from employer reference.</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Full Reference Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
