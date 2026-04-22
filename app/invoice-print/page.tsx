'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'

export default function InvoicePrintPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Invoice Print"
        description="Prepare invoice details and print-ready values"
        action={<Button><Printer className="w-4 h-4 mr-2" />Print Invoice</Button>}
      />

      <Card>
        <CardHeader>
          <CardTitle>Print Configuration</CardTitle>
          <CardDescription>Enter invoice details before generating a printable format.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="invoice-number">Invoice Number</Label>
            <Input id="invoice-number" placeholder="INV-2026-001" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invoice-date">Invoice Date</Label>
            <Input id="invoice-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invoice-customer">Customer Name</Label>
            <Input id="invoice-customer" placeholder="John Smith" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invoice-total">Total Amount</Label>
            <Input id="invoice-total" type="number" placeholder="0.00" />
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
