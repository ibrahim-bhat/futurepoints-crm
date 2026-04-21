'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Wrench,
  Shield,
  Truck,
  Settings,
  Menu,
  X,
  Building2,
  BarChart3,
  AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  badge?: string
}

export function Sidebar() {
  const [open, setOpen] = useState(true)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      label: 'Dashboard',
      href: '/',
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      label: 'Analytics',
      href: '/analytics',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: 'Branches',
      href: '/branches',
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      label: 'Inventory',
      href: '/inventory',
      icon: <Package className="w-5 h-5" />,
    },
    {
      label: 'Products',
      href: '/products',
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      label: 'Sales',
      href: '/sales',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: 'Invoices',
      href: '/invoices',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: 'Customers',
      href: '/customers',
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: 'Repairs',
      href: '/repairs',
      icon: <Wrench className="w-5 h-5" />,
      badge: '3',
    },
    {
      label: 'Warranty',
      href: '/warranty',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      label: 'Rentals',
      href: '/rentals',
      icon: <Truck className="w-5 h-5" />,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-card border-b border-border flex items-center justify-between px-4 h-16">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border overflow-y-auto transition-all duration-300 z-40 pt-20 lg:pt-0
          ${open ? 'w-64' : 'w-0 lg:w-64'} lg:relative lg:translate-x-0`}
      >
        <div className="p-4 hidden lg:block">
          <h1 className="text-2xl font-bold text-primary">ServiceFlow</h1>
          <p className="text-sm text-muted-foreground">Management System</p>
        </div>

        <nav className="space-y-2 p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-sidebar-accent'
                  }
                `}
                onClick={() => setOpen(false)}
              >
                {item.icon}
                <span className="flex-1 text-sm font-medium">{item.label}</span>
                {item.badge && (
                  <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main content offset for mobile */}
      <div className="lg:hidden h-16" />
    </>
  )
}
