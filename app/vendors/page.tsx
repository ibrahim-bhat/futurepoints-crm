'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function VendorsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Vendor Management"
        description="Add and maintain vendor details for purchasing and payables"
        action={<Button><Plus className="w-4 h-4 mr-2" />Add Vendor</Button>}
      />

      <Card>
        <CardHeader>
          <CardTitle>Vendor Form</CardTitle>
          <CardDescription>Capture vendor profile and primary contact information.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="vendor-name">Vendor Name</Label>
            <Input id="vendor-name" placeholder="Future Supplies Ltd." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vendor-code">Vendor Code</Label>
            <Input id="vendor-code" placeholder="VND-001" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vendor-phone">Phone Number</Label>
            <Input id="vendor-phone" placeholder="+91 98765 43210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vendor-email">Email</Label>
            <Input id="vendor-email" type="email" placeholder="billing@vendor.com" />
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
