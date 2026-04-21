'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, MapPin, Phone, Users } from 'lucide-react'

const branchesData = [
  { id: 1, name: 'Downtown Branch', address: '123 Main St, City', manager: 'Alex Kumar', staff: 12, status: 'active' },
  { id: 2, name: 'Midtown Branch', address: '456 Oak Ave, City', manager: 'Sarah Thompson', staff: 8, status: 'active' },
  { id: 3, name: 'Uptown Branch', address: '789 Pine Rd, City', manager: 'David Lee', staff: 15, status: 'active' },
  { id: 4, name: 'West Side Branch', address: '321 Elm St, City', manager: 'Maria Garcia', staff: 10, status: 'inactive' },
  { id: 5, name: 'East Point Branch', address: '654 Maple Dr, City', manager: 'John Martinez', staff: 14, status: 'active' },
  { id: 6, name: 'South End Branch', address: '987 Cedar Ln, City', manager: 'Lisa Anderson', staff: 9, status: 'active' },
]

export default function BranchesPage() {
  const columns = [
    {
      key: 'name' as const,
      label: 'Branch Name',
      sortable: true,
    },
    {
      key: 'address' as const,
      label: 'Address',
      render: (value: string) => (
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          {value}
        </div>
      ),
    },
    {
      key: 'manager' as const,
      label: 'Manager',
      sortable: true,
    },
    {
      key: 'staff' as const,
      label: 'Staff Count',
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-muted-foreground" />
          {value}
        </div>
      ),
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
        title="Branch Locations"
        description="Manage all branch offices and locations"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Branch</Button>}
      />
      <DataTable columns={columns} data={branchesData} searchKey="name" searchPlaceholder="Search branches..." />
    </PageLayout>
  )
}
