import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RotateCcw, ArrowLeft, Package, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Returns() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Material Returns</h1>
          <p className="text-muted-foreground">Process material returns to warehouse or supplier</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
          <RotateCcw className="mr-2 h-4 w-4" />
          New Return
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-primary" />
              Process Return
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="returnItem">Item Name</Label>
                <Input id="returnItem" placeholder="Select item to return" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="returnQty">Quantity to Return</Label>
                <Input id="returnQty" type="number" placeholder="0" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="returnReason">Reason for Return</Label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                <option value="">Select reason</option>
                <option value="excess">Excess material</option>
                <option value="damaged">Damaged/Defective</option>
                <option value="wrong">Wrong specification</option>
                <option value="unused">Project completion - unused</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="returnedBy">Returned By</Label>
                <Input id="returnedBy" placeholder="Staff name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="acceptedBy">Accepted By</Label>
                <Input id="acceptedBy" placeholder="Warehouse staff" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="returnRemarks">Remarks</Label>
              <Input id="returnRemarks" placeholder="Additional notes" />
            </div>

            <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
              Process Return
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Recent Returns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { item: "Steel Rebar 10mm", qty: "25 kg", reason: "Excess", status: "completed", date: "2024-01-15" },
                { item: "Paint White", qty: "3 liters", reason: "Wrong color", status: "pending", date: "2024-01-14" },
                { item: "Tiles Ceramic", qty: "50 pcs", reason: "Damaged", status: "completed", date: "2024-01-13" }
              ].map((returnItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{returnItem.item}</p>
                    <p className="text-sm text-muted-foreground">{returnItem.reason} • {returnItem.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={returnItem.status === 'completed' ? 'default' : 'secondary'}>
                      {returnItem.status === 'completed' ? (
                        <><CheckCircle className="w-3 h-3 mr-1" />Completed</>
                      ) : (
                        'Pending'
                      )}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{returnItem.date}</span>
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
              <RotateCcw className="h-8 w-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-sm text-muted-foreground">Total returns this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-success" />
              <div>
                <p className="text-2xl font-bold text-foreground">18</p>
                <p className="text-sm text-muted-foreground">Processed returns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Pending approval</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}