'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { FilePlus2 } from 'lucide-react'

export default function LedgerPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Ledger"
        description="Track account entries and quick journal posting"
        action={<Button><FilePlus2 className="w-4 h-4 mr-2" />New Entry</Button>}
      />

      <Card>
        <CardHeader>
          <CardTitle>Ledger Entry</CardTitle>
          <CardDescription>Create a basic debit and credit transaction.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ledger-date">Date</Label>
            <Input id="ledger-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ledger-account">Account Name</Label>
            <Input id="ledger-account" placeholder="Accounts Payable" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ledger-debit">Debit Amount</Label>
            <Input id="ledger-debit" type="number" placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ledger-credit">Credit Amount</Label>
            <Input id="ledger-credit" type="number" placeholder="0.00" />
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
