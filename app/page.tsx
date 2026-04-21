'use client'

import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { StatCard } from '@/components/stat-card'
import { SectionHeader } from '@/components/section-header'
import { DollarSign, Package, Wrench, Users, TrendingUp } from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 45000, repairs: 12000 },
  { month: 'Feb', revenue: 52000, repairs: 14000 },
  { month: 'Mar', revenue: 48000, repairs: 11000 },
  { month: 'Apr', revenue: 61000, repairs: 16000 },
  { month: 'May', revenue: 55000, repairs: 13000 },
  { month: 'Jun', revenue: 67000, repairs: 18000 },
]

const categoryData = [
  { name: 'Electronics', value: 35, fill: 'var(--color-chart-1)' },
  { name: 'Appliances', value: 25, fill: 'var(--color-chart-2)' },
  { name: 'Parts', value: 20, fill: 'var(--color-chart-3)' },
  { name: 'Services', value: 20, fill: 'var(--color-chart-4)' },
]

const branchData = [
  { branch: 'Downtown', sales: 24, repairs: 18 },
  { branch: 'Midtown', sales: 19, repairs: 14 },
  { branch: 'Uptown', sales: 28, repairs: 22 },
  { branch: 'West', sales: 22, repairs: 16 },
  { branch: 'East', sales: 29, repairs: 25 },
]

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Monitor your service operations and business metrics</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Revenue"
                value="$328,000"
                icon={<DollarSign className="w-6 h-6" />}
                trend={{ value: 12, positive: true }}
                subtitle="Last 6 months"
              />
              <StatCard
                title="Active Orders"
                value="847"
                icon={<TrendingUp className="w-6 h-6" />}
                trend={{ value: 8, positive: true }}
                subtitle="This month"
              />
              <StatCard
                title="Inventory Items"
                value="2,341"
                icon={<Package className="w-6 h-6" />}
                trend={{ value: 3, positive: false }}
                subtitle="In stock"
              />
              <StatCard
                title="Open Repairs"
                value="34"
                icon={<Wrench className="w-6 h-6" />}
                trend={{ value: 5, positive: false }}
                subtitle="Pending completion"
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue & Repairs Chart */}
              <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
                <SectionHeader
                  title="Revenue & Repairs Trend"
                  description="6-month performance overview"
                />
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis
                      dataKey="month"
                      stroke="var(--color-muted-foreground)"
                    />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--color-card)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-chart-1)"
                      strokeWidth={2}
                      dot={{ fill: 'var(--color-chart-1)' }}
                      name="Revenue"
                    />
                    <Line
                      type="monotone"
                      dataKey="repairs"
                      stroke="var(--color-chart-2)"
                      strokeWidth={2}
                      dot={{ fill: 'var(--color-chart-2)' }}
                      name="Repairs"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader
                  title="Sales by Category"
                  description="Current distribution"
                />
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--color-card)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Branch Performance */}
            <div className="bg-card border border-border rounded-lg p-6">
              <SectionHeader
                title="Branch Performance"
                description="Sales and repairs by location"
              />
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis
                    dataKey="branch"
                    stroke="var(--color-muted-foreground)"
                  />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="sales"
                    fill="var(--color-chart-1)"
                    radius={[8, 8, 0, 0]}
                    name="Sales"
                  />
                  <Bar
                    dataKey="repairs"
                    fill="var(--color-chart-2)"
                    radius={[8, 8, 0, 0]}
                    name="Repairs"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader
                  title="Recent Orders"
                  description="Latest sales transactions"
                />
                <div className="space-y-3">
                  {[
                    { id: 'ORD-001', customer: 'John Smith', amount: '$2,450', time: '2 hours ago' },
                    { id: 'ORD-002', customer: 'Emma Davis', amount: '$1,890', time: '4 hours ago' },
                    { id: 'ORD-003', customer: 'Michael Chen', amount: '$3,200', time: '6 hours ago' },
                    { id: 'ORD-004', customer: 'Sarah Wilson', amount: '$1,560', time: '8 hours ago' },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{order.amount}</p>
                        <p className="text-xs text-muted-foreground">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader
                  title="Pending Repairs"
                  description="Work orders awaiting completion"
                />
                <div className="space-y-3">
                  {[
                    { id: 'REP-101', device: 'Samsung TV', customer: 'Alex Kumar', status: 'In Progress' },
                    { id: 'REP-102', device: 'LG Fridge', customer: 'Lisa Anderson', status: 'Diagnosed' },
                    { id: 'REP-103', device: 'Sony Console', customer: 'Tom Bradley', status: 'Waiting Parts' },
                    { id: 'REP-104', device: 'Dell Laptop', customer: 'Rachel Green', status: 'In Progress' },
                  ].map((repair) => (
                    <div
                      key={repair.id}
                      className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{repair.id}</p>
                        <p className="text-xs text-muted-foreground">{repair.device} - {repair.customer}</p>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {repair.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
