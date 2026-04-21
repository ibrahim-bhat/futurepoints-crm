'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const productsData = [
  { id: 1, name: 'Samsung 55" 4K TV', sku: 'SAM-55-4K', price: '$599', stock: 24, sales: '127 units', status: 'active' },
  { id: 2, name: 'LG Side-by-Side Fridge', sku: 'LG-SBS-600', price: '$1,299', stock: 8, sales: '34 units', status: 'active' },
  { id: 3, name: 'Sony 7.1 Surround System', sku: 'SONY-71', price: '$599', stock: 15, sales: '56 units', status: 'active' },
  { id: 4, name: 'Panasonic Microwave Pro', sku: 'PAN-MW-50', price: '$349', stock: 3, sales: '12 units', status: 'inactive' },
  { id: 5, name: 'Bosch Washing Machine', sku: 'BOSCH-WM', price: '$899', stock: 5, sales: '23 units', status: 'active' },
  { id: 6, name: 'Whirlpool Dishwasher', sku: 'WHIR-DW', price: '$599', stock: 11, sales: '45 units', status: 'active' },
  { id: 7, name: 'Daikin Air Conditioner', sku: 'DAI-AC-5', price: '$799', stock: 7, sales: '31 units', status: 'active' },
]

export default function ProductsPage() {
  const columns = [
    {
      key: 'name' as const,
      label: 'Product Name',
      sortable: true,
    },
    {
      key: 'sku' as const,
      label: 'SKU',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'price' as const,
      label: 'Price',
      sortable: true,
      width: 'w-24',
    },
    {
      key: 'stock' as const,
      label: 'Stock',
      sortable: true,
      width: 'w-20',
    },
    {
      key: 'sales' as const,
      label: 'Sales',
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
        title="Product Catalog"
        description="Manage and view all products in your inventory"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Product</Button>}
      />
      <DataTable columns={columns} data={productsData} searchKey="name" searchPlaceholder="Search products..." />
    </PageLayout>
  )
}
