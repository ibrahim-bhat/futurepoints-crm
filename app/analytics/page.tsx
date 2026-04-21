'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const monthlyData = [
  { month: 'Jan', sales: 45000, costs: 20000, profit: 25000 },
  { month: 'Feb', sales: 52000, costs: 22000, profit: 30000 },
  { month: 'Mar', sales: 48000, costs: 21000, profit: 27000 },
  { month: 'Apr', sales: 61000, costs: 25000, profit: 36000 },
  { month: 'May', sales: 55000, costs: 23000, profit: 32000 },
  { month: 'Jun', sales: 67000, costs: 26000, profit: 41000 },
]

const categoryPerformance = [
  { category: 'Electronics', sales: 145000, growth: '12%' },
  { category: 'Appliances', sales: 98000, growth: '8%' },
  { category: 'Parts', sales: 67000, growth: '15%' },
  { category: 'Services', sales: 78000, growth: '5%' },
]

export default function AnalyticsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Advanced Analytics"
        description="Deep insights into your business performance"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Revenue (6m)</p>
          <p className="text-3xl font-bold mb-2">$328,000</p>
          <p className="text-sm text-green-600">↑ 12% from last period</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Average Order Value</p>
          <p className="text-3xl font-bold mb-2">$387</p>
          <p className="text-sm text-green-600">↑ 5% from last period</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Customer Retention</p>
          <p className="text-3xl font-bold mb-2">84%</p>
          <p className="text-sm text-green-600">↑ 3% from last period</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Profit Margin</p>
          <p className="text-3xl font-bold mb-2">32%</p>
          <p className="text-sm text-yellow-600">→ Stable</p>
        </div>
      </div>

      {/* Revenue & Profit Trend */}
      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <SectionHeader
          title="Revenue & Profitability"
          description="6-month trend analysis"
        />
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-3)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-chart-3)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Area type="monotone" dataKey="sales" stroke="var(--color-chart-1)" fillOpacity={1} fill="url(#colorSales)" name="Revenue" />
            <Area type="monotone" dataKey="profit" stroke="var(--color-chart-3)" fillOpacity={1} fill="url(#colorProfit)" name="Profit" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Category Performance */}
      <div className="bg-card border border-border rounded-lg p-6">
        <SectionHeader
          title="Category Performance"
          description="Sales by product category"
        />
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="category" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="sales" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </PageLayout>
  )
}
