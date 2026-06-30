import { cn } from '@/lib/utils'

export default function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('text-[0.68rem] tracking-[0.1em] uppercase text-rox-text3 font-semibold px-1 pt-2 pb-0.5', className)}>
      {children}
    </div>
  )
}
