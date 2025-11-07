'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Settings, User, Bell, Shield, CreditCard, Building2 } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Settings</h2>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Profile Settings</CardTitle>
            </div>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" defaultValue="Property" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" defaultValue="Manager" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" defaultValue="manager@rentscreenpro.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" defaultValue="(555) 999-8888" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your Company LLC" defaultValue="RentScreen Properties" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Account Info */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Account Type</p>
              <p>Professional</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Member Since</p>
              <p>January 2024</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <p className="text-2xl">127</p>
            </div>
            <Button variant="outline" className="w-full">View Usage</Button>
          </CardContent>
        </Card>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Notification Preferences</CardTitle>
          </div>
          <CardDescription>Choose what notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>New Application Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified when a new application is submitted</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Screening Complete</Label>
              <p className="text-sm text-muted-foreground">Receive alerts when background checks are completed</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive email updates for important events</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly Summary</Label>
              <p className="text-sm text-muted-foreground">Get a weekly summary of your applications</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Screening Criteria */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Screening Criteria</CardTitle>
          </div>
          <CardDescription>Set your tenant screening requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minCredit">Minimum Credit Score</Label>
              <Input id="minCredit" type="number" placeholder="650" defaultValue="650" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="incomeRatio">Income to Rent Ratio</Label>
              <Select defaultValue="3x">
                <SelectTrigger id="incomeRatio">
                  <SelectValue placeholder="Select ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2x">2x Monthly Rent</SelectItem>
                  <SelectItem value="2.5x">2.5x Monthly Rent</SelectItem>
                  <SelectItem value="3x">3x Monthly Rent</SelectItem>
                  <SelectItem value="3.5x">3.5x Monthly Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="employmentLength">Minimum Employment Length</Label>
            <Select defaultValue="1year">
              <SelectTrigger id="employmentLength">
                <SelectValue placeholder="Select length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="1year">1 Year</SelectItem>
                <SelectItem value="2years">2 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require Clean Criminal Background</Label>
              <p className="text-sm text-muted-foreground">Auto-flag applications with criminal records</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Require No Eviction History</Label>
              <p className="text-sm text-muted-foreground">Auto-flag applications with eviction records</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Button>Save Criteria</Button>
        </CardContent>
      </Card>

      {/* Property Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Property Management</CardTitle>
          </div>
          <CardDescription>Manage your rental properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 rounded-lg border">
              <p>123 Main St, Apt 4B</p>
              <p className="text-sm text-muted-foreground">2 Bed, 1 Bath - $1,650/month</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p>456 Oak Ave, Unit 2A</p>
              <p className="text-sm text-muted-foreground">1 Bed, 1 Bath - $1,400/month</p>
            </div>
            <div className="p-3 rounded-lg border">
              <p>789 Pine Rd, Suite 3C</p>
              <p className="text-sm text-muted-foreground">3 Bed, 2 Bath - $2,100/month</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">Add New Property</Button>
        </CardContent>
      </Card>

      {/* Billing */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Billing & Subscription</CardTitle>
          </div>
          <CardDescription>Manage your subscription and payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <p>Professional Plan</p>
              <p className="text-2xl">$99<span className="text-sm text-muted-foreground">/mo</span></p>
            </div>
            <p className="text-sm text-muted-foreground">Unlimited screening reports</p>
          </div>
          <Separator />
          <div>
            <p className="text-sm text-muted-foreground">Payment Method</p>
            <p>•••• •••• •••• 4242</p>
            <p className="text-sm text-muted-foreground">Expires 12/2026</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">Change Plan</Button>
            <Button variant="outline" className="flex-1">Update Payment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
