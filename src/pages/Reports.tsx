import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, Filter, Calendar, BarChart3, PieChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and export comprehensive inventory reports</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Daily Stock Movement",
            description: "Track daily receipts and consumption",
            icon: BarChart3,
            color: "text-primary"
          },
          {
            title: "Consumption by Activity",
            description: "Material usage across different tasks",
            icon: PieChart,
            color: "text-secondary"
          },
          {
            title: "Stock Valuation",
            description: "Current stock value and rates",
            icon: FileText,
            color: "text-success"
          },
          {
            title: "Return Analysis",
            description: "Material return patterns and reasons",
            icon: BarChart3,
            color: "text-warning"
          }
        ].map((report, index) => (
          <Card key={index} className="border-border/50 shadow-soft hover:shadow-strong transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <report.icon className={`h-8 w-8 ${report.color}`} />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Download className="w-4 h-4 mr-2" />
                Generate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Report Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="itemFilter">Item Category</Label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                  <option value="">All categories</option>
                  <option value="steel">Steel & Metal</option>
                  <option value="cement">Cement & Concrete</option>
                  <option value="electrical">Electrical</option>
                  <option value="plumbing">Plumbing</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteFilter">Site Location</Label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                  <option value="">All sites</option>
                  <option value="site1">Site A - Building 1</option>
                  <option value="site2">Site B - Building 2</option>
                  <option value="site3">Site C - Infrastructure</option>
                </select>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
              Apply Filters & Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Weekly Stock Report", date: "2024-01-15", type: "PDF", size: "2.3 MB" },
                { name: "Monthly Consumption", date: "2024-01-10", type: "Excel", size: "1.8 MB" },
                { name: "Material Returns Log", date: "2024-01-08", type: "PDF", size: "945 KB" },
                { name: "Stock Valuation", date: "2024-01-05", type: "Excel", size: "3.1 MB" }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{report.name}</p>
                    <p className="text-sm text-muted-foreground">{report.date} • {report.size}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{report.type}</Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}