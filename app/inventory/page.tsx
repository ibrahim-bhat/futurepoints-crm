'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const inventoryData = [
  { id: 1, sku: 'SK-001', name: 'Samsung 55" TV', category: 'Electronics', quantity: 24, value: '$18,000', status: 'active' },
  { id: 2, sku: 'SK-002', name: 'LG Refrigerator', category: 'Appliances', quantity: 8, value: '$8,000', status: 'active' },
  { id: 3, sku: 'SK-003', name: 'Sony Soundbar', category: 'Electronics', quantity: 15, value: '$4,500', status: 'active' },
  { id: 4, sku: 'SK-004', name: 'Philips Microwave', category: 'Appliances', quantity: 3, value: '$900', status: 'inactive' },
  { id: 5, sku: 'SK-005', name: 'Component Cables', category: 'Parts', quantity: 120, value: '$2,400', status: 'active' },
  { id: 6, sku: 'SK-006', name: 'Power Supplies', category: 'Parts', quantity: 45, value: '$3,600', status: 'active' },
  { id: 7, sku: 'SK-007', name: 'HDMI Cables (10)', category: 'Parts', quantity: 200, value: '$2,000', status: 'active' },
  { id: 8, sku: 'SK-008', name: 'Display Repair Kit', category: 'Parts', quantity: 12, value: '$1,200', status: 'inactive' },
]

export default function InventoryPage() {
  const columns = [
    {
      key: 'sku' as const,
      label: 'SKU',
      sortable: true,
      width: 'w-20',
    },
    {
      key: 'name' as const,
      label: 'Product Name',
      sortable: true,
    },
    {
      key: 'category' as const,
      label: 'Category',
      sortable: true,
    },
    {
      key: 'quantity' as const,
      label: 'Quantity',
      sortable: true,
      width: 'w-20',
    },
    {
      key: 'value' as const,
      label: 'Inventory Value',
      sortable: true,
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
        title="Inventory Management"
        description="Track all products and equipment across branches"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Item</Button>}
      />
      <DataTable columns={columns} data={inventoryData} searchKey="name" searchPlaceholder="Search products..." />
    </PageLayout>
  )
}
