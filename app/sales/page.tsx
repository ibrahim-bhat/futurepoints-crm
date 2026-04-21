'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const salesData = [
  { id: 1, orderId: 'ORD-001', product: 'Samsung 55" TV', quantity: 2, customer: 'John Smith', amount: '$1,200', date: '2024-06-15' },
  { id: 2, orderId: 'ORD-002', product: 'LG Refrigerator', quantity: 1, customer: 'Emma Davis', amount: '$1,299', date: '2024-06-14' },
  { id: 3, orderId: 'ORD-003', product: 'Sony Soundbar', quantity: 3, customer: 'Michael Chen', amount: '$1,800', date: '2024-06-13' },
  { id: 4, orderId: 'ORD-004', product: 'Philips Microwave', quantity: 5, customer: 'Sarah Wilson', amount: '$1,750', date: '2024-06-12' },
  { id: 5, orderId: 'ORD-005', product: 'Component Cables', quantity: 20, customer: 'James Brown', amount: '$400', date: '2024-06-11' },
  { id: 6, orderId: 'ORD-006', product: 'HDMI Cables (10)', quantity: 10, customer: 'Lisa Anderson', amount: '$1,000', date: '2024-06-10' },
  { id: 7, orderId: 'ORD-007', product: 'Bosch Washing Machine', quantity: 2, customer: 'Robert Martinez', amount: '$1,800', date: '2024-06-09' },
  { id: 8, orderId: 'ORD-008', product: 'Daikin Air Conditioner', quantity: 1, customer: 'Jessica Taylor', amount: '$799', date: '2024-06-08' },
]

export default function SalesPage() {
  const columns = [
    {
      key: 'orderId' as const,
      label: 'Order ID',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'product' as const,
      label: 'Product',
      sortable: true,
    },
    {
      key: 'quantity' as const,
      label: 'Qty',
      sortable: true,
      width: 'w-16',
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
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Sales Orders"
        description="Track all sales transactions and orders"
        action={<Button><Plus className="w-4 h-4 mr-2" />New Order</Button>}
      />
      <DataTable columns={columns} data={salesData} searchKey="orderId" searchPlaceholder="Search orders..." />
    </PageLayout>
  )
}
