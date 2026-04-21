'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const vendorLedgerData = [
  { id: 1, vendor: 'Alpha Electronics Supply', ledgerId: 'VLG-001', invoiceRef: 'PINV-1024', debit: '$2,500', credit: '$0', balance: '$2,500', date: '2026-04-10', status: 'pending' },
  { id: 2, vendor: 'Prime Parts Co.', ledgerId: 'VLG-002', invoiceRef: 'PINV-1025', debit: '$0', credit: '$1,200', balance: '$1,300', date: '2026-04-11', status: 'completed' },
  { id: 3, vendor: 'Nexus Wholesale', ledgerId: 'VLG-003', invoiceRef: 'PINV-1026', debit: '$3,150', credit: '$0', balance: '$3,150', date: '2026-04-13', status: 'pending' },
  { id: 4, vendor: 'Zenith Distribution', ledgerId: 'VLG-004', invoiceRef: 'PINV-1027', debit: '$0', credit: '$900', balance: '$450', date: '2026-04-15', status: 'completed' },
  { id: 5, vendor: 'Metro Device Traders', ledgerId: 'VLG-005', invoiceRef: 'PINV-1028', debit: '$1,100', credit: '$0', balance: '$1,550', date: '2026-04-17', status: 'pending' },
]

export default function VendorsPage() {
  const columns = [
    {
      key: 'vendor' as const,
      label: 'Vendor',
      sortable: true,
    },
    {
      key: 'ledgerId' as const,
      label: 'Ledger ID',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'invoiceRef' as const,
      label: 'Invoice Ref',
      sortable: true,
      width: 'w-32',
    },
    {
      key: 'debit' as const,
      label: 'Debit',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'credit' as const,
      label: 'Credit',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'balance' as const,
      label: 'Balance',
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
      render: (value: string) => <BadgeStatus status={value as 'pending' | 'completed'} />,
    },
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Vendor Ledger"
        description="Track vendor account activity, invoices, and running balances"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Ledger Entry</Button>}
      />
      <DataTable columns={columns} data={vendorLedgerData} searchKey="vendor" searchPlaceholder="Search vendors..." />
    </PageLayout>
  )
}
