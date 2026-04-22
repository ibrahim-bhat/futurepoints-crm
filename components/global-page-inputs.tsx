'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

export function GlobalPageInputs() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Quick Input</CardTitle>
        <CardDescription>Use these common fields on every page while building the prototype.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="quick-ref">Reference</Label>
          <Input id="quick-ref" placeholder="REF-0001" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quick-name">Name / Party</Label>
          <Input id="quick-name" placeholder="Customer, vendor, or account" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quick-remarks">Remarks</Label>
          <Input id="quick-remarks" placeholder="Short note..." />
        </div>
        <Button className="w-full md:w-auto">
          <Save className="w-4 h-4 mr-2" />
          Save Input
        </Button>
      </CardContent>
    </Card>
  )
}
