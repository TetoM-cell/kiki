'use client';

import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Shield, FileSearch, TrendingUp, Users, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="mb-4">Professional Tenant Screening Made Simple</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          RentScreenPro provides comprehensive background checks, credit reports, and rental history verification to help you make informed decisions about your tenants.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tenants">View Applications</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 py-12">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Comprehensive Screening</CardTitle>
            <CardDescription>
              Full background checks including criminal records, eviction history, and credit reports
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileSearch className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Identity Verification</CardTitle>
            <CardDescription>
              Verify tenant identity with government-issued ID validation and address confirmation
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Income Verification</CardTitle>
            <CardDescription>
              Confirm employment status, income levels, and financial stability of applicants
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Reference Checks</CardTitle>
            <CardDescription>
              Contact previous landlords and personal references to verify tenant history
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Quick Decisions</CardTitle>
            <CardDescription>
              Get screening results fast with automated risk assessment and recommendations
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Secure & Compliant</CardTitle>
            <CardDescription>
              FCRA compliant screening process with secure data handling and privacy protection
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 rounded-lg p-8 my-12">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Tenants Screened</div>
          </div>
          <div>
            <div className="text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-primary mb-2">24 Hours</div>
            <div className="text-sm text-muted-foreground">Average Report Time</div>
          </div>
          <div>
            <div className="text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">FCRA Compliant</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h2 className="mb-4">Ready to streamline your tenant screening?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of property managers who trust RentScreenPro for reliable tenant screening.
        </p>
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
