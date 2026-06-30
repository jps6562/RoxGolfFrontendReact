import { cn } from '@/lib/utils'

interface NavGridProps {
  children: React.ReactNode
  columns?: 1 | 2
  className?: string
}

export default function NavGrid({ children, columns = 2, className }: NavGridProps) {
  return (
    <div className={cn(
      'grid grid-cols-1 gap-2.5',
      columns === 2 && 'sm:grid-cols-2',
      className
    )}>
      {children}
    </div>
  )
}
