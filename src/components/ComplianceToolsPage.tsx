import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Checkbox } from './ui/checkbox';
import { CheckCircle2, Shield, FileText, AlertTriangle, Scale, Download } from 'lucide-react';

export function ComplianceToolsPage() {
  const complianceChecks = [
    {
      category: 'Fair Housing Act',
      status: 'compliant',
      items: [
        { name: 'No discriminatory questions in application', checked: true },
        { name: 'Equal opportunity statement displayed', checked: true },
        { name: 'Consistent screening criteria applied', checked: true },
        { name: 'Documentation of decision-making process', checked: true },
      ],
    },
    {
      category: 'FCRA (Fair Credit Reporting Act)',
      status: 'compliant',
      items: [
        { name: 'Applicant consent obtained before screening', checked: true },
        { name: 'Pre-adverse action notice process in place', checked: true },
        { name: 'Adverse action notice process documented', checked: true },
        { name: 'Proper disclosure forms used', checked: true },
      ],
    },
    {
      category: 'State & Local Laws',
      status: 'compliant',
      items: [
        { name: 'Application fee limits followed', checked: true },
        { name: 'Security deposit limits compliant', checked: true },
        { name: 'Required disclosures provided', checked: true },
        { name: 'Ban-the-box compliance (if applicable)', checked: true },
      ],
    },
  ];

  const recentAudits = [
    {
      id: '1',
      date: '2025-11-01',
      type: 'Fair Housing Compliance',
      result: 'Passed',
      score: 98,
    },
    {
      id: '2',
      date: '2025-10-15',
      type: 'FCRA Compliance',
      result: 'Passed',
      score: 95,
    },
    {
      id: '3',
      date: '2025-10-01',
      type: 'Data Privacy Audit',
      result: 'Passed',
      score: 100,
    },
  ];

  const requiredDisclosures = [
    {
      title: 'Fair Housing Notice',
      description: 'Equal Housing Opportunity statement for all applicants',
      status: 'active',
    },
    {
      title: 'FCRA Disclosure',
      description: 'Consumer report disclosure and authorization',
      status: 'active',
    },
    {
      title: 'Pre-Adverse Action Notice',
      description: 'Notice before taking adverse action based on credit report',
      status: 'active',
    },
    {
      title: 'Adverse Action Notice',
      description: 'Notice when application is denied based on screening',
      status: 'active',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Compliance Tools</h2>
        <p className="text-muted-foreground">Fair Housing and FCRA compliance management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>98%</p>
            <p className="text-sm text-muted-foreground">Overall rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">12</p>
            <p className="text-sm text-muted-foreground">In effect</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Last Audit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">Nov 1</p>
            <p className="text-sm text-muted-foreground">2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Issues Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl" style={{ color: '#41c12d' }}>0</p>
            <p className="text-sm text-muted-foreground">Current period</p>
          </CardContent>
        </Card>
      </div>

      <Alert className="border-green-200 bg-green-50">
        <CheckCircle2 className="h-4 w-4" style={{ color: '#41c12d' }} />
        <AlertTitle>Compliance Status: Excellent</AlertTitle>
        <AlertDescription>
          All required compliance checks are in place and up to date. Your screening process meets federal and state requirements.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Compliance Checklist</CardTitle>
                <CardDescription>Key regulatory requirements</CardDescription>
              </div>
              <Shield className="h-6 w-6 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {complianceChecks.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-3">
                  <h4>{category.category}</h4>
                  <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>
                    Compliant
                  </Badge>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <Checkbox checked={item.checked} disabled />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
                {idx < complianceChecks.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Required Disclosures</CardTitle>
            <CardDescription>Legal notices and forms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {requiredDisclosures.map((disclosure, idx) => (
              <div key={idx} className="p-4 rounded-lg border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <h5>{disclosure.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{disclosure.description}</p>
                  </div>
                  <Badge style={{ backgroundColor: '#41c12d', color: 'white' }}>
                    {disclosure.status}
                  </Badge>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Form
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fair Housing Equal Opportunity Statement</CardTitle>
          <CardDescription>Required disclosure for all rental applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border bg-muted/50">
            <p className="text-sm mb-4">
              We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
            </p>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Equal Housing Opportunity</span>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3">Protected Classes Under Federal Law</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Race', 'Color', 'Religion', 'Sex', 'National Origin', 'Disability', 'Familial Status', 'Gender Identity'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4" style={{ color: '#41c12d' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download Full Statement
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FCRA Compliance Guidelines</CardTitle>
          <CardDescription>Fair Credit Reporting Act requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg border">
              <h5 className="mb-2">1. Obtain Written Authorization</h5>
              <p className="text-sm text-muted-foreground">
                Before ordering a consumer report, you must obtain written authorization from the applicant. This must be a standalone document or clearly disclosed in the application.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h5 className="mb-2">2. Provide Proper Disclosure</h5>
              <p className="text-sm text-muted-foreground">
                You must provide a clear and conspicuous disclosure that a consumer report may be obtained for employment or tenant screening purposes.
              </p>
            </div>

            <div className="p-4 rounded-lg border">
              <h5 className="mb-2">3. Pre-Adverse Action Process</h5>
              <p className="text-sm text-muted-foreground">
                Before taking adverse action based on information in a consumer report, you must provide the applicant with:
              </p>
              <ul className="mt-2 space-y-1 ml-4">
                <li className="text-sm text-muted-foreground">• A copy of the consumer report</li>
                <li className="text-sm text-muted-foreground">• A "Summary of Your Rights Under the FCRA"</li>
                <li className="text-sm text-muted-foreground">• Reasonable time to dispute the information (typically 5 business days)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border">
              <h5 className="mb-2">4. Adverse Action Notice</h5>
              <p className="text-sm text-muted-foreground">
                If you decide to take adverse action, you must provide written notice that includes:
              </p>
              <ul className="mt-2 space-y-1 ml-4">
                <li className="text-sm text-muted-foreground">• The name, address, and phone number of the consumer reporting agency</li>
                <li className="text-sm text-muted-foreground">• A statement that the agency did not make the decision</li>
                <li className="text-sm text-muted-foreground">• Notice of the applicant's right to dispute the accuracy of the report</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <FileText className="h-4 w-4 mr-2" />
              View Sample Forms
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Templates
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Compliance Audits</CardTitle>
          <CardDescription>Audit history and results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAudits.map((audit) => (
              <div key={audit.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" style={{ color: '#41c12d' }} />
                  </div>
                  <div>
                    <p>{audit.type}</p>
                    <p className="text-sm text-muted-foreground">{new Date(audit.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p style={{ color: '#41c12d' }}>{audit.result}</p>
                  <p className="text-sm text-muted-foreground">Score: {audit.score}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-blue-200 bg-blue-50">
        <AlertTriangle className="h-4 w-4 text-blue-600" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          RentScreenPro is not meant for collecting Personally Identifiable Information (PII) or securing sensitive data beyond the scope of this demo. Always consult with legal counsel to ensure your screening process complies with all applicable federal, state, and local laws.
        </AlertDescription>
      </Alert>
    </div>
  );
}
