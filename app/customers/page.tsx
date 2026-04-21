'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, Mail, Phone } from 'lucide-react'

const customersData = [
  { id: 1, name: 'John Smith', email: 'john@example.com', phone: '555-0101', purchases: 12, status: 'active' },
  { id: 2, name: 'Emma Davis', email: 'emma@example.com', phone: '555-0102', purchases: 8, status: 'active' },
  { id: 3, name: 'Michael Chen', email: 'michael@example.com', phone: '555-0103', purchases: 15, status: 'active' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', phone: '555-0104', purchases: 3, status: 'inactive' },
  { id: 5, name: 'James Brown', email: 'james@example.com', phone: '555-0105', purchases: 9, status: 'active' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '555-0106', purchases: 11, status: 'active' },
  { id: 7, name: 'Robert Martinez', email: 'robert@example.com', phone: '555-0107', purchases: 7, status: 'active' },
  { id: 8, name: 'Jessica Taylor', email: 'jessica@example.com', phone: '555-0108', purchases: 14, status: 'active' },
]

export default function CustomersPage() {
  const columns = [
    {
      key: 'name' as const,
      label: 'Customer Name',
      sortable: true,
    },
    {
      key: 'email' as const,
      label: 'Email',
      render: (value: string) => (
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4 text-muted-foreground" />
          {value}
        </div>
      ),
    },
    {
      key: 'phone' as const,
      label: 'Phone',
      render: (value: string) => (
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4 text-muted-foreground" />
          {value}
        </div>
      ),
    },
    {
      key: 'purchases' as const,
      label: 'Purchases',
      sortable: true,
      width: 'w-20',
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
        title="Customer Management"
        description="View and manage all customer accounts"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Customer</Button>}
      />
      <DataTable columns={columns} data={customersData} searchKey="name" searchPlaceholder="Search customers..." />
    </PageLayout>
  )
}
