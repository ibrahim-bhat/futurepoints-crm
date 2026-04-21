'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, Truck, Calendar as CalendarIcon } from 'lucide-react'

const rentalsData = [
  {
    id: 1,
    rentalId: 'REN-2024-001',
    equipment: 'Construction Lift - 10ft',
    customer: 'ABC Construction',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    dailyRate: '$150',
    status: 'active',
    totalDays: '30 days',
  },
  {
    id: 2,
    rentalId: 'REN-2024-002',
    equipment: 'Power Generator 5kW',
    customer: 'XYZ Events',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    dailyRate: '$75',
    status: 'active',
    totalDays: '7 days',
  },
  {
    id: 3,
    rentalId: 'REN-2024-003',
    equipment: 'Air Compressor',
    customer: 'Quick Services',
    startDate: '2024-05-20',
    endDate: '2024-06-20',
    dailyRate: '$50',
    status: 'active',
    totalDays: '31 days',
  },
  {
    id: 4,
    rentalId: 'REN-2024-004',
    equipment: 'Scaffolding Set',
    customer: 'BuildRight Inc',
    startDate: '2024-06-01',
    endDate: '2024-06-15',
    dailyRate: '$200',
    status: 'completed',
    totalDays: '14 days',
  },
  {
    id: 5,
    rentalId: 'REN-2024-005',
    equipment: 'Pressure Washer Pro',
    customer: 'Clean Team',
    startDate: '2024-06-10',
    endDate: '2024-06-17',
    dailyRate: '$40',
    status: 'active',
    totalDays: '7 days',
  },
  {
    id: 6,
    rentalId: 'REN-2024-006',
    equipment: 'Concrete Mixer',
    customer: 'Urban Construction',
    startDate: '2024-06-20',
    endDate: '2024-07-05',
    dailyRate: '$60',
    status: 'pending',
    totalDays: '15 days',
  },
]

export default function RentalsPage() {
  const columns = [
    {
      key: 'rentalId' as const,
      label: 'Rental ID',
      sortable: true,
      width: 'w-28',
    },
    {
      key: 'equipment' as const,
      label: 'Equipment',
      sortable: true,
    },
    {
      key: 'customer' as const,
      label: 'Customer',
      sortable: true,
    },
    {
      key: 'startDate' as const,
      label: 'Start Date',
      sortable: true,
      width: 'w-28',
    },
    {
      key: 'endDate' as const,
      label: 'End Date',
      sortable: true,
      width: 'w-28',
    },
    {
      key: 'dailyRate' as const,
      label: 'Daily Rate',
      sortable: true,
      width: 'w-20',
    },
    {
      key: 'status' as const,
      label: 'Status',
      render: (value: string) => {
        const statusMap = { active: 'active', completed: 'completed', pending: 'pending' }
        return <BadgeStatus status={statusMap[value as keyof typeof statusMap] as any} />
      },
    },
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Equipment Rentals"
        description="Manage all equipment rental contracts and schedules"
        action={<Button><Plus className="w-4 h-4 mr-2" />New Rental</Button>}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Truck className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Active Rentals</p>
          </div>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <CalendarIcon className="w-5 h-5 text-yellow-500" />
            <p className="text-sm text-muted-foreground">Pending Start</p>
          </div>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Truck className="w-5 h-5 text-green-500" />
            <p className="text-sm text-muted-foreground">This Month Revenue</p>
          </div>
          <p className="text-2xl font-bold">$3,285</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Truck className="w-5 h-5 text-blue-500" />
            <p className="text-sm text-muted-foreground">Total Equipment</p>
          </div>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>

      <DataTable columns={columns} data={rentalsData} searchKey="equipment" searchPlaceholder="Search rentals..." />
    </PageLayout>
  )
}
