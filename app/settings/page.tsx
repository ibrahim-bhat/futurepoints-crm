'use client'

import { PageLayout } from '@/components/page-layout'
import { SectionHeader } from '@/components/section-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings as SettingsIcon, Bell, Lock, Palette } from 'lucide-react'

export default function SettingsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Settings"
        description="Manage your account and application preferences"
      />

      <div className="max-w-2xl space-y-6">
        {/* Account Settings */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Account Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <Input
                defaultValue="ServiceFlow Management"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                defaultValue="admin@example.com"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <Input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                placeholder="Enter phone number"
              />
            </div>
            <Button>Save Changes</Button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Notification Settings</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">New Orders</p>
                <p className="text-xs text-muted-foreground">Get notified when new orders arrive</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded" />
            </div>
            <div className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Repair Updates</p>
                <p className="text-xs text-muted-foreground">Get notified about repair status changes</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded" />
            </div>
            <div className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Low Inventory Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified when inventory is low</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded" />
            </div>
            <div className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Daily Summary</p>
                <p className="text-xs text-muted-foreground">Receive daily performance summary email</p>
              </div>
              <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Security</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Current Password</label>
              <Input
                type="password"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <Input
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm new password"
              />
            </div>
            <Button>Update Password</Button>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Appearance</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input type="radio" id="dark" name="theme" defaultChecked className="w-4 h-4" />
              <label htmlFor="dark" className="text-sm font-medium cursor-pointer">Dark Mode (Current)</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="light" name="theme" className="w-4 h-4" />
              <label htmlFor="light" className="text-sm font-medium cursor-pointer">Light Mode</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="auto" name="theme" className="w-4 h-4" />
              <label htmlFor="auto" className="text-sm font-medium cursor-pointer">Auto (Follow System)</label>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
