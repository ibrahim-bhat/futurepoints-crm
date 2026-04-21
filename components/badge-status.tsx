interface BadgeStatusProps {
  status: 'active' | 'inactive' | 'pending' | 'completed' | 'failed' | 'maintenance'
  text?: string
  className?: string
}

export function BadgeStatus({ status, text, className = '' }: BadgeStatusProps) {
  const statusConfig = {
    active: 'bg-green-500/20 text-green-700 border-green-200',
    inactive: 'bg-gray-500/20 text-gray-700 border-gray-200',
    pending: 'bg-yellow-500/20 text-yellow-700 border-yellow-200',
    completed: 'bg-green-500/20 text-green-700 border-green-200',
    failed: 'bg-red-500/20 text-red-700 border-red-200',
    maintenance: 'bg-blue-500/20 text-blue-700 border-blue-200',
  }

  const labels = {
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    maintenance: 'Maintenance',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
        statusConfig[status]
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'active' || status === 'completed' ? 'bg-green-600' :
        status === 'failed' ? 'bg-red-600' :
        status === 'pending' ? 'bg-yellow-600' :
        status === 'maintenance' ? 'bg-blue-600' :
        'bg-gray-600'
      }`} />
      {text || labels[status]}
    </span>
  )
}
