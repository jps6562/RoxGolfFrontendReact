import { Shield, Eye } from 'lucide-react'
import { useCommissioner } from '@/context/CommissionerContext'

export default function CommissionerToggle() {
  const { isCommissioner, toggle } = useCommissioner()

  return (
    <button
      onClick={toggle}
      title={isCommissioner ? 'Exit Commissioner Mode' : 'Enter Commissioner Mode'}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex-shrink-0 ${
        isCommissioner
          ? 'bg-rox-gold text-white'
          : 'bg-white/15 text-white/80 border border-white/20'
      }`}
    >
      {isCommissioner ? <Shield size={14} /> : <Eye size={14} />}
      {isCommissioner ? 'Commissioner' : 'View'}
    </button>
  )
}
