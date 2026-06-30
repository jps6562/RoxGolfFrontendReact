import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

type NavVariant = 'golf' | 'trip' | 'league' | 'bowl' | 'pok' | 'arc' | 'default'
type NavSize = 'lg' | 'md' | 'sm'

interface NavButtonProps {
  to?: string
  onClick?: () => void
  label: string
  icon: string
  variant?: NavVariant
  size?: NavSize
  external?: boolean
}

const borderColors: Record<NavVariant, string> = {
  golf:    'border-l-rox-green',
  trip:    'border-l-rox-gold',
  league:  'border-l-rox-blue',
  bowl:    'border-l-rox-red',
  pok:     'border-l-rox-purple',
  arc:     'border-l-rox-slate',
  default: 'border-l-rox-border',
}

const iconBg: Record<NavVariant, string> = {
  golf:    'bg-rox-green-light',
  trip:    'bg-rox-gold-light',
  league:  'bg-rox-blue-light',
  bowl:    'bg-rox-red-light',
  pok:     'bg-rox-purple-light',
  arc:     'bg-rox-slate-light',
  default: 'bg-rox-green-light',
}

export default function NavButton({ to, onClick, label, icon, variant = 'default', size = 'md', external = false }: NavButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) { onClick(); return }
    if (!to) return
    if (external) { window.open(to, '_blank'); return }
    navigate(to)
  }

  const heights: Record<NavSize, string> = { lg: 'h-[74px]', md: 'h-[68px]', sm: 'h-14' }
  const textSizes: Record<NavSize, string> = {
    lg: 'text-[1.15rem] font-bold',
    md: 'text-[1.06rem] font-semibold',
    sm: 'text-[0.93rem] font-medium text-rox-text2',
  }
  const iconSizes: Record<NavSize, string> = {
    lg: 'w-11 h-11 rounded-[10px] text-[22px]',
    md: 'w-[38px] h-[38px] rounded-lg text-[19px]',
    sm: 'w-8 h-8 rounded-md text-[16px]',
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex items-center w-full px-4 gap-3 flex-shrink-0',
        'bg-rox-card border border-rox-border border-l-4 rounded-rox',
        'shadow-rox-sm active:bg-[#F5F9F5] transition-colors duration-75',
        'text-rox-text1 text-left',
        heights[size],
        borderColors[variant],
      )}
    >
      <span className={cn('flex items-center justify-center flex-shrink-0', iconSizes[size], iconBg[variant])}>
        {icon}
      </span>
      <span className={cn('flex-1 leading-snug', textSizes[size])}>{label}</span>
      <span className="text-rox-text3 text-lg flex-shrink-0">{external ? '↗' : '›'}</span>
    </button>
  )
}
