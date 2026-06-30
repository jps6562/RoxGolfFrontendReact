import { cn } from '@/lib/utils'

type Flight = 'A' | 'B' | 'C' | 'NIT'

const styles: Record<Flight, string> = {
  A:   'bg-rox-green-light text-rox-green',
  B:   'bg-rox-blue-light text-rox-blue',
  C:   'bg-rox-gold-light text-rox-gold',
  NIT: 'bg-rox-red-light text-rox-red',
}

export default function FlightBadge({ flight }: { flight: Flight }) {
  return (
    <span className={cn('text-[0.63rem] font-bold px-1.5 py-0.5 rounded whitespace-nowrap tracking-tight', styles[flight])}>
      {flight}
    </span>
  )
}
