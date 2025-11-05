import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Search, Filter } from "lucide-react";

interface Application {
  id: string;
  name: string;
  property: string;
  appliedDate: string;
  status: "pending" | "approved" | "rejected" | "reviewing";
  creditScore: number;
  monthlyIncome: number;
}

interface DashboardProps {
  onViewApplication: (id: string) => void;
}

export function Dashboard({
  onViewApplication,
}: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const applications: Application[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      property: "123 Main St, Apt 4B",
      appliedDate: "2025-11-01",
      status: "approved",
      creditScore: 750,
      monthlyIncome: 5500,
    },
    {
      id: "2",
      name: "Michael Chen",
      property: "456 Oak Ave, Unit 2A",
      appliedDate: "2025-10-30",
      status: "reviewing",
      creditScore: 680,
      monthlyIncome: 4200,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      property: "789 Elm St, Suite 1",
      appliedDate: "2025-10-28",
      status: "pending",
      creditScore: 720,
      monthlyIncome: 6800,
    },
    {
      id: "4",
      name: "James Wilson",
      property: "321 Pine Rd, Apt 3C",
      appliedDate: "2025-10-25",
      status: "rejected",
      creditScore: 580,
      monthlyIncome: 3100,
    },
    {
      id: "5",
      name: "Lisa Anderson",
      property: "555 Maple Dr, Unit 5B",
      appliedDate: "2025-10-22",
      status: "approved",
      creditScore: 790,
      monthlyIncome: 7200,
    },
  ];

  const filteredApplications = applications.filter(
    (app) =>
      app.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      app.property
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  const getStatusBadge = (status: Application["status"]) => {
    const variants: Record<
      Application["status"],
      {
        variant:
          | "default"
          | "secondary"
          | "destructive"
          | "outline";
        label: string;
        style?: React.CSSProperties;
      }
    > = {
      approved: {
        variant: "default",
        label: "Approved",
        style: { backgroundColor: "#41c12d", color: "#ffffff" },
      },
      rejected: {
        variant: "destructive",
        label: "Rejected",
        style: { backgroundColor: "#d01f1f", color: "#ffffff" },
      },
      pending: { variant: "secondary", label: "Pending" },
      reviewing: { variant: "outline", label: "Reviewing" },
    };

    const { variant, label, style } = variants[status];
    return (
      <Badge variant={variant} style={style}>
        {label}
      </Badge>
    );
  };

  const stats = [
    { label: "Total Applications", value: applications.length },
    {
      label: "Pending Review",
      value: applications.filter(
        (a) =>
          a.status === "pending" || a.status === "reviewing",
      ).length,
    },
    {
      label: "Approved",
      value: applications.filter((a) => a.status === "approved")
        .length,
    },
    {
      label: "Rejected",
      value: applications.filter((a) => a.status === "rejected")
        .length,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Manage and review tenant applications
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
                <p
                  className="text-2xl font-medium"
                  style={
                    stat.label === "Approved"
                      ? { color: "#41c12d" }
                      : stat.label === "Rejected"
                        ? { color: "#d01f1f" }
                        : undefined
                  }
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>
                View and manage tenant screening applications
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search applications..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Credit Score</TableHead>
                <TableHead>Monthly Income</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.name}</TableCell>
                  <TableCell>{application.property}</TableCell>
                  <TableCell>
                    {new Date(
                      application.appliedDate,
                    ).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {application.creditScore}
                  </TableCell>
                  <TableCell>
                    $
                    {application.monthlyIncome.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(application.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        onViewApplication(application.id)
                      }
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}