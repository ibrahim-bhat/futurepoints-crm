// Chart colors matching the design system
export const CHART_COLORS = {
  primary: 'var(--color-chart-1)',
  secondary: 'var(--color-chart-2)',
  tertiary: 'var(--color-chart-3)',
  quaternary: 'var(--color-chart-4)',
  quinary: 'var(--color-chart-5)',
}

// Status badge configurations
export const STATUS_CONFIG = {
  active: {
    bg: 'bg-green-500/20',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-600',
  },
  inactive: {
    bg: 'bg-gray-500/20',
    text: 'text-gray-700',
    border: 'border-gray-200',
    dot: 'bg-gray-600',
  },
  pending: {
    bg: 'bg-yellow-500/20',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
    dot: 'bg-yellow-600',
  },
  completed: {
    bg: 'bg-green-500/20',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-600',
  },
  failed: {
    bg: 'bg-red-500/20',
    text: 'text-red-700',
    border: 'border-red-200',
    dot: 'bg-red-600',
  },
  maintenance: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-700',
    border: 'border-blue-200',
    dot: 'bg-blue-600',
  },
} as const

// Navigation items
export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Branches', href: '/branches' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Products', href: '/products' },
  { label: 'Sales', href: '/sales' },
  { label: 'Invoices', href: '/invoices' },
  { label: 'Customers', href: '/customers' },
  { label: 'Repairs', href: '/repairs' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Settings', href: '/settings' },
]

// Business metrics
export const BUSINESS_METRICS = {
  totalRevenue: '$328,000',
  activeOrders: '847',
  inventoryItems: '2,341',
  openRepairs: '34',
  activeCustomers: '156',
  branchCount: '6',
}
