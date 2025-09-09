import { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  Package,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Mock inventory data
const inventoryItems = [
  {
    id: 1,
    code: 'STL-RB-12',
    name: 'Steel Rebar 12mm',
    category: 'Steel',
    quantity: 1500,
    unit: 'pcs',
    rate: 25.50,
    totalValue: 38250,
    minStock: 500,
    supplier: 'Steel Corp Ltd',
    location: 'Warehouse A',
    status: 'adequate'
  },
  {
    id: 2,
    code: 'CEM-POR-50',
    name: 'Portland Cement',
    category: 'Cement',
    quantity: 25,
    unit: 'bags',
    rate: 450,
    totalValue: 11250,
    minStock: 50,
    supplier: 'BuildMat Supplies',
    location: 'Storage B',
    status: 'low'
  },
  {
    id: 3,
    code: 'PVC-P-4',
    name: 'PVC Pipes 4"',
    category: 'Plumbing',
    quantity: 200,
    unit: 'pcs',
    rate: 125,
    totalValue: 25000,
    minStock: 100,
    supplier: 'Pipe Masters',
    location: 'Warehouse C',
    status: 'adequate'
  },
  {
    id: 4,
    code: 'ELE-W-2.5',
    name: 'Electrical Wire 2.5mm',
    category: 'Electrical',
    quantity: 75,
    unit: 'mts',
    rate: 8.50,
    totalValue: 637.50,
    minStock: 100,
    supplier: 'ElectroTech',
    location: 'Storage A',
    status: 'low'
  }
];

const categories = ['All', 'Steel', 'Cement', 'Plumbing', 'Electrical'];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string, quantity: number, minStock: number) => {
    if (status === 'low') {
      return <Badge variant="destructive" className="text-xs">Low Stock</Badge>;
    }
    if (quantity > minStock * 2) {
      return <Badge variant="secondary" className="text-xs bg-success/10 text-success">Good Stock</Badge>;
    }
    return <Badge variant="outline" className="text-xs">Adequate</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground">Track and manage your construction materials</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items by name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.code}</p>
                </div>
                {getStatusBadge(item.status, item.quantity, item.minStock)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Quantity</p>
                  <p className="font-medium">{item.quantity} {item.unit}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Rate</p>
                  <p className="font-medium">${item.rate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Value</p>
                  <p className="font-medium">${item.totalValue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Min Stock</p>
                  <p className="font-medium">{item.minStock} {item.unit}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{item.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Supplier:</span>
                  <span className="font-medium">{item.supplier}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}