import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Upload, Calendar, User, FileText } from "lucide-react";

export default function Receipt() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Stock Receipt</h1>
          <p className="text-muted-foreground">Record new material deliveries and receipts</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
          <Package className="mr-2 h-4 w-4" />
          Add Receipt
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              New Receipt Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="itemName">Item Name</Label>
                <Input id="itemName" placeholder="Enter item name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="itemCode">Item Code</Label>
                <Input id="itemCode" placeholder="Item code" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Rate per Unit</Label>
                <Input id="rate" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit</Label>
                <Input id="unit" placeholder="kg, pcs, m" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier Name</Label>
                <Input id="supplier" placeholder="Supplier name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryDate">Delivery Date</Label>
                <Input id="deliveryDate" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="receivedBy">Received By</Label>
              <Input id="receivedBy" placeholder="Supervisor name" />
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Upload delivery challan or invoice
              </p>
              <Button variant="outline" className="mt-2">
                Choose File
              </Button>
            </div>

            <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
              Save Receipt
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Receipts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { item: "Steel Rebar 12mm", qty: "500 kg", date: "2024-01-15", supplier: "ABC Steel" },
                { item: "Cement Portland", qty: "100 bags", date: "2024-01-14", supplier: "XYZ Cement" },
                { item: "Bricks Red Clay", qty: "1000 pcs", date: "2024-01-13", supplier: "Local Supplier" }
              ].map((receipt, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-foreground">{receipt.item}</p>
                    <p className="text-sm text-muted-foreground">{receipt.supplier} • {receipt.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{receipt.date}</p>
                    <Button variant="ghost" size="sm">View</Button>
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