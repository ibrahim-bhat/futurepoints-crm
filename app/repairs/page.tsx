'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { DataTable } from '@/components/data-table'
import { BadgeStatus } from '@/components/badge-status'
import { Button } from '@/components/ui/button'
import { Plus, Wrench, Calendar } from 'lucide-react'

const repairsData = [
  {
    id: 1,
    ticketId: 'REP-2024-101',
    device: 'Samsung 55" TV',
    customer: 'John Smith',
    issue: 'No power, display error',
    status: 'in-progress',
    assignee: 'Alex Kumar',
    estimatedCost: '$150',
  },
  {
    id: 2,
    ticketId: 'REP-2024-102',
    device: 'LG Refrigerator',
    customer: 'Emma Davis',
    issue: 'Compressor not cooling',
    status: 'diagnosed',
    assignee: 'Sarah Thompson',
    estimatedCost: '$250',
  },
  {
    id: 3,
    ticketId: 'REP-2024-103',
    device: 'Sony Soundbar',
    customer: 'Michael Chen',
    issue: 'No audio output',
    status: 'waiting parts',
    assignee: 'David Lee',
    estimatedCost: '$80',
  },
  {
    id: 4,
    ticketId: 'REP-2024-104',
    device: 'Philips Microwave',
    customer: 'Sarah Wilson',
    issue: 'Heating not working',
    status: 'completed',
    assignee: 'Maria Garcia',
    estimatedCost: '$120',
  },
  {
    id: 5,
    ticketId: 'REP-2024-105',
    device: 'Dell Laptop',
    customer: 'Rachel Green',
    issue: 'Battery not charging',
    status: 'in-progress',
    assignee: 'John Martinez',
    estimatedCost: '$100',
  },
  {
    id: 6,
    ticketId: 'REP-2024-106',
    device: 'Apple MacBook',
    customer: 'Tom Bradley',
    issue: 'Screen flickering',
    status: 'pending',
    assignee: 'Lisa Anderson',
    estimatedCost: '$200',
  },
]

export default function RepairsPage() {
  const columns = [
    {
      key: 'ticketId' as const,
      label: 'Ticket ID',
      sortable: true,
      width: 'w-28',
    },
    {
      key: 'device' as const,
      label: 'Device',
      sortable: true,
    },
    {
      key: 'customer' as const,
      label: 'Customer',
      sortable: true,
    },
    {
      key: 'issue' as const,
      label: 'Issue',
    },
    {
      key: 'status' as const,
      label: 'Status',
      render: (value: string) => {
        const statusMap = {
          'in-progress': 'pending',
          'diagnosed': 'pending',
          'waiting parts': 'pending',
          'completed': 'completed',
          'pending': 'pending',
        }
        return <BadgeStatus status={statusMap[value as keyof typeof statusMap] as any} />
      },
    },
    {
      key: 'assignee' as const,
      label: 'Technician',
      sortable: true,
    },
    {
      key: 'estimatedCost' as const,
      label: 'Est. Cost',
      sortable: true,
      width: 'w-24',
    },
  ]

  return (
    <PageLayout>
      <SectionHeader
        title="Repair Management"
        description="Track and manage all service repair tickets"
        action={<Button><Plus className="w-4 h-4 mr-2" />New Ticket</Button>}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-yellow-500" />
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-5 h-5 text-green-500" />
            <p className="text-sm text-muted-foreground">Completed (Today)</p>
          </div>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-blue-500" />
            <p className="text-sm text-muted-foreground">Total Revenue</p>
          </div>
          <p className="text-2xl font-bold">$1,840</p>
        </div>
      </div>

      <DataTable columns={columns} data={repairsData} searchKey="ticketId" searchPlaceholder="Search tickets..." />
    </PageLayout>
  )
}

import { DollarSign } from 'lucide-react'
