import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingDown, Activity, Clock, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Consumption() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Material Consumption</h1>
          <p className="text-muted-foreground">Track material usage and consumption across activities</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
          <TrendingDown className="mr-2 h-4 w-4" />
          Record Usage
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Record Consumption
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="materialItem">Material Item</Label>
                <Input id="materialItem" placeholder="Select material" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantityUsed">Quantity Used</Label>
                <Input id="quantityUsed" type="number" placeholder="0" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="activityCode">Activity/Purpose</Label>
                <Input id="activityCode" placeholder="e.g., Foundation work" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="usedBy">Used By</Label>
                <Input id="usedBy" placeholder="Worker/Supervisor name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Input id="remarks" placeholder="Additional notes" />
            </div>

            <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
              Record Consumption
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Today's Consumption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { material: "Steel Rebar 12mm", qty: "50 kg", activity: "Column casting", status: "completed", time: "10:30 AM" },
                { material: "Cement Portland", qty: "25 bags", activity: "Slab work", status: "ongoing", time: "2:15 PM" },
                { material: "Bricks Red Clay", qty: "200 pcs", activity: "Wall construction", status: "completed", time: "4:45 PM" }
              ].map((consumption, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{consumption.material}</p>
                    <p className="text-sm text-muted-foreground">{consumption.activity} • {consumption.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={consumption.status === 'completed' ? 'default' : 'secondary'}>
                      {consumption.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{consumption.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">847</p>
                <p className="text-sm text-muted-foreground">Items consumed today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Activity className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Active activities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">High usage alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}