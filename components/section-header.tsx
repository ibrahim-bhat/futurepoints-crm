import { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  action?: ReactNode
  subtitle?: string
}

export function SectionHeader({
  title,
  description,
  action,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 flex-shrink-0">{action}</div>}
    </div>
  )
}
