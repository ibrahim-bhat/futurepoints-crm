'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, Download } from 'lucide-react'

const invoicesData = [
  { id: 1, invoiceNum: 'INV-2024-001', customer: 'John Smith', amount: '$2,450', date: '2024-06-15', status: 'completed' },
  { id: 2, invoiceNum: 'INV-2024-002', customer: 'Emma Davis', amount: '$1,890', date: '2024-06-14', status: 'completed' },
  { id: 3, invoiceNum: 'INV-2024-003', customer: 'Michael Chen', amount: '$3,200', date: '2024-06-13', status: 'pending' },
  { id: 4, invoiceNum: 'INV-2024-004', customer: 'Sarah Wilson', amount: '$1,560', date: '2024-06-12', status: 'pending' },
  { id: 5, invoiceNum: 'INV-2024-005', customer: 'James Brown', amount: '$2,100', date: '2024-06-11', status: 'completed' },
  { id: 6, invoiceNum: 'INV-2024-006', customer: 'Lisa Anderson', amount: '$1,750', date: '2024-06-10', status: 'failed' },
  { id: 7, invoiceNum: 'INV-2024-007', customer: 'Robert Martinez', amount: '$2,890', date: '2024-06-09', status: 'completed' },
  { id: 8, invoiceNum: 'INV-2024-008', customer: 'Jessica Taylor', amount: '$3,100', date: '2024-06-08', status: 'pending' },
]

export default function InvoicesPage() {
  const columns = [
    {
      key: 'invoiceNum' as const,
      label: 'Invoice #',
      sortable: true,
      width: 'w-32',
    },
    {
      key: 'customer' as const,
      label: 'Customer',
      sortable: true,
    },
    {
      key: 'amount' as const,
      label: 'Amount',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'date' as const,
      label: 'Date',
      sortable: true,
      width: 'w-32',
    },
    {
      key: 'status' as const,
      label: 'Status',
      render: (value: string) => {
        const statusMap = { completed: 'completed', pending: 'pending', failed: 'failed' }
        return <BadgeStatus status={statusMap[value as keyof typeof statusMap] as any} />
      },
    },
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Invoice Management"
        description="View and manage all invoices and payments"
        action={<Button><Plus className="w-4 h-4 mr-2" />Create Invoice</Button>}
      />
      <DataTable columns={columns} data={invoicesData} searchKey="invoiceNum" searchPlaceholder="Search invoices..." />
    </PageLayout>
  )
}
