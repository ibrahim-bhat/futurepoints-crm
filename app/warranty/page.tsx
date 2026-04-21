'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, Shield, AlertCircle } from 'lucide-react'

const warrantyData = [
  {
    id: 1,
    warrantyId: 'WAR-2024-001',
    product: 'Samsung 55" TV',
    customer: 'John Smith',
    expiryDate: '2025-06-15',
    coverage: 'Full Replacement',
    status: 'active',
    daysRemaining: '356 days',
  },
  {
    id: 2,
    warrantyId: 'WAR-2024-002',
    product: 'LG Refrigerator',
    customer: 'Emma Davis',
    expiryDate: '2024-12-14',
    coverage: 'Parts & Labor',
    status: 'active',
    daysRemaining: '178 days',
  },
  {
    id: 3,
    warrantyId: 'WAR-2024-003',
    product: 'Sony Soundbar',
    customer: 'Michael Chen',
    expiryDate: '2024-09-13',
    coverage: 'Parts Only',
    status: 'active',
    daysRemaining: '85 days',
  },
  {
    id: 4,
    warrantyId: 'WAR-2024-004',
    product: 'Philips Microwave',
    customer: 'Sarah Wilson',
    expiryDate: '2024-06-12',
    coverage: 'Full Replacement',
    status: 'inactive',
    daysRemaining: 'Expired',
  },
  {
    id: 5,
    warrantyId: 'WAR-2024-005',
    product: 'Bosch Washing Machine',
    customer: 'James Brown',
    expiryDate: '2025-12-11',
    coverage: 'Parts & Labor',
    status: 'active',
    daysRemaining: '532 days',
  },
  {
    id: 6,
    warrantyId: 'WAR-2024-006',
    product: 'Daikin Air Conditioner',
    customer: 'Lisa Anderson',
    expiryDate: '2024-07-10',
    coverage: 'Installation & Parts',
    status: 'active',
    daysRemaining: '20 days',
  },
]

export default function WarrantyPage() {
  const columns = [
    {
      key: 'warrantyId' as const,
      label: 'Warranty ID',
      sortable: true,
      width: 'w-28',
    },
    {
      key: 'product' as const,
      label: 'Product',
      sortable: true,
    },
    {
      key: 'customer' as const,
      label: 'Customer',
      sortable: true,
    },
    {
      key: 'coverage' as const,
      label: 'Coverage Type',
      sortable: true,
    },
    {
      key: 'expiryDate' as const,
      label: 'Expiry Date',
      sortable: true,
      width: 'w-32',
    },
    {
      key: 'daysRemaining' as const,
      label: 'Days Remaining',
      render: (value: string) => {
        const isExpired = value === 'Expired'
        return (
          <span className={`text-sm font-medium ${isExpired ? 'text-destructive' : 'text-green-600'}`}>
            {value}
          </span>
        )
      },
    },
    {
      key: 'status' as const,
      label: 'Status',
      render: (value: string) => <BadgeStatus status={value as any} />,
    },
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Warranty Management"
        description="Track and manage all product warranties"
        action={<Button><Plus className="w-4 h-4 mr-2" />New Warranty</Button>}
      />

      {/* Alert Section */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold text-yellow-900 text-sm mb-1">Expiring Soon</p>
          <p className="text-sm text-yellow-800">1 warranty expiring within 30 days. Renew now to maintain coverage.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Active Warranties</p>
          </div>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            <p className="text-sm text-muted-foreground">Expiring Soon (30d)</p>
          </div>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-red-500" />
            <p className="text-sm text-muted-foreground">Expired</p>
          </div>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      <DataTable columns={columns} data={warrantyData} searchKey="product" searchPlaceholder="Search warranties..." />
    </PageLayout>
  )
}
