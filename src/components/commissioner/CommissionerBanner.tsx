import { ShieldCheck } from 'lucide-react'
import { useCommissioner } from '@/context/CommissionerContext'

export default function CommissionerBanner() {
  const { isCommissioner } = useCommissioner()

  if (!isCommissioner) return null

  return (
    <div className="bg-rox-gold-light border-b border-rox-gold px-4 py-2 flex items-center gap-2">
      <ShieldCheck size={16} className="text-rox-gold flex-shrink-0" />
      <span className="text-[0.8rem] text-rox-text2 font-medium">
        Commissioner Mode — edit controls are active
      </span>
    </div>
  )
}
