import { 
  Package, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  DollarSign,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatsCard from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import constructionHero from '@/assets/construction-hero.jpg';

// Mock data - in real app this would come from API
const stats = [
  {
    title: 'Total Items',
    value: 1234,
    description: 'Active inventory items',
    icon: Package,
    trend: { value: 12, label: 'from last month', isPositive: true }
  },
  {
    title: 'Total Value',
    value: '$248,392',
    description: 'Current stock value',
    icon: DollarSign,
    trend: { value: 8, label: 'from last month', isPositive: true }
  },
  {
    title: 'Low Stock Items',
    value: 23,
    description: 'Items need reordering',
    icon: AlertTriangle,
    trend: { value: 5, label: 'from last week', isPositive: false }
  },
  {
    title: 'Active WIP',
    value: 15,
    description: 'Work in progress items',
    icon: Clock,
    trend: { value: 3, label: 'new this week', isPositive: true }
  }
];

const recentActivity = [
  {
    type: 'receipt',
    item: 'Steel Rebar 12mm',
    quantity: 500,
    unit: 'pcs',
    user: 'John Smith',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    type: 'consumption',
    item: 'Portland Cement',
    quantity: 50,
    unit: 'bags',
    user: 'Mike Johnson',
    time: '4 hours ago',
    status: 'completed'
  },
  {
    type: 'return',
    item: 'PVC Pipes 4"',
    quantity: 25,
    unit: 'pcs',
    user: 'Sarah Davis',
    time: '6 hours ago',
    status: 'pending'
  },
];

const quickActions = [
  { label: 'Add Stock Receipt', href: '/receipt', variant: 'default' as const },
  { label: 'Record Consumption', href: '/consumption', variant: 'secondary' as const },
  { label: 'Material Return', href: '/returns', variant: 'outline' as const },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${constructionHero})` }}
        />
        <div className="relative p-6 md:p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">
              Welcome to SiteStock
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Manage your construction site inventory efficiently with real-time tracking and comprehensive reporting.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  className="shadow-medium"
                  onClick={() => navigate(action.href)}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            trend={stat.trend}
            className="shadow-soft"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'receipt' ? 'bg-success/10 text-success' :
                      activity.type === 'consumption' ? 'bg-warning/10 text-warning' :
                      'bg-accent/10 text-accent'
                    }`}>
                      {activity.type === 'receipt' && <TrendingUp className="h-4 w-4" />}
                      {activity.type === 'consumption' && <TrendingDown className="h-4 w-4" />}
                      {activity.type === 'return' && <Package className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.item}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.quantity} {activity.unit} • {activity.user}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    }`}>
                      {activity.status === 'completed' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                      {activity.status}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Low Stock Alert</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Portland Cement', current: 15, min: 50, unit: 'bags' },
                { name: 'Steel Rebar 10mm', current: 200, min: 500, unit: 'pcs' },
                { name: 'Electrical Wire 2.5mm', current: 50, min: 100, unit: 'mts' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-warning/5 border border-warning/20">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Current: {item.current} {item.unit} • Min: {item.min} {item.unit}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="text-warning border-warning">
                    Reorder
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}