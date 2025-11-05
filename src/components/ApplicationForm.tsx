import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { CheckCircle2, Upload } from 'lucide-react';

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentAddress: '',
    desiredProperty: '',
    moveInDate: '',
    monthlyIncome: '',
    employer: '',
    employmentLength: '',
    references: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardContent className="pt-12 pb-12">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="mb-2">Application Submitted Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for submitting your tenant application. We'll review your information and get back to you within 2-3 business days.
            </p>
            <Button onClick={() => setSubmitted(false)}>Submit Another Application</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2>Tenant Application Form</h2>
        <p className="text-muted-foreground">Please fill out all required information to complete your rental application</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Basic contact and identification details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentAddress">Current Address *</Label>
                <Input
                  id="currentAddress"
                  required
                  value={formData.currentAddress}
                  onChange={(e) => setFormData({ ...formData, currentAddress: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rental Information</CardTitle>
              <CardDescription>Details about the property you're interested in</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="desiredProperty">Desired Property *</Label>
                <Select
                  value={formData.desiredProperty}
                  onValueChange={(value) => setFormData({ ...formData, desiredProperty: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="123-main-4b">123 Main St, Apt 4B</SelectItem>
                    <SelectItem value="456-oak-2a">456 Oak Ave, Unit 2A</SelectItem>
                    <SelectItem value="789-elm-1">789 Elm St, Suite 1</SelectItem>
                    <SelectItem value="321-pine-3c">321 Pine Rd, Apt 3C</SelectItem>
                    <SelectItem value="555-maple-5b">555 Maple Dr, Unit 5B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="moveInDate">Desired Move-in Date *</Label>
                <Input
                  id="moveInDate"
                  type="date"
                  required
                  value={formData.moveInDate}
                  onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employment & Income</CardTitle>
              <CardDescription>Financial and employment verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employer">Current Employer *</Label>
                  <Input
                    id="employer"
                    required
                    value={formData.employer}
                    onChange={(e) => setFormData({ ...formData, employer: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employmentLength">Length of Employment *</Label>
                  <Select
                    value={formData.employmentLength}
                    onValueChange={(value) => setFormData({ ...formData, employmentLength: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-6">0-6 months</SelectItem>
                      <SelectItem value="6-12">6-12 months</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Gross Monthly Income *</Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  required
                  placeholder="5000"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>References & Documents</CardTitle>
              <CardDescription>Previous landlord references and required documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="references">Previous Landlord Contact Information</Label>
                <Textarea
                  id="references"
                  placeholder="Name, phone number, and address of previous landlord..."
                  value={formData.references}
                  onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Upload Documents (Optional)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button type="button" variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-5 w-5" />
                      <span className="text-sm">ID / Driver's License</span>
                    </div>
                  </Button>
                  <Button type="button" variant="outline" className="h-auto py-4">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-5 w-5" />
                      <span className="text-sm">Proof of Income</span>
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, agreeToTerms: checked as boolean })
                  }
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to the terms and conditions *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    By submitting this application, I authorize the landlord to conduct credit and background checks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">Save Draft</Button>
            <Button type="submit" disabled={!formData.agreeToTerms}>
              Submit Application
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
