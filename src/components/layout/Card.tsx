import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-rox-card border border-rox-border rounded-xl p-[18px] shadow-rox-sm', className)}>
      {children}
    </div>
  )
}
