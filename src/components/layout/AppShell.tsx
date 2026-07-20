import { Outlet, useMatches, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import CommissionerToggle from '@/components/commissioner/CommissionerToggle'
import CommissionerBanner from '@/components/commissioner/CommissionerBanner'
import logo from '@/assets/logo.jpeg'

interface RouteHandle {
  title?: string
  crumbs?: string[]
}

export default function AppShell() {
  const navigate = useNavigate()
  const matches = useMatches()
  const current = matches[matches.length - 1]
  const handle = (current?.handle as RouteHandle) ?? {}
  const title = handle.title ?? 'RoxGolf'
  const crumbs = handle.crumbs ?? []

  return (
    <div className="flex flex-col min-h-screen bg-rox-bg">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-rox-green flex items-center gap-2.5 px-4 py-3"
        style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}
      >
        {crumbs.length > 0 && (
          <button
            onClick={() => navigate(-1)}
            aria-label="Back"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 bg-white/15 text-white active:bg-white/25 flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <img src={logo} alt="RoxGolf" className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-xl font-extrabold tracking-tight text-white leading-none">
            Rox<span className="text-rox-gold-bright">Golf</span>.com
          </div>
          <div className="text-[0.68rem] text-white/65 uppercase tracking-wider mt-0.5 truncate">
            {title}
          </div>
        </div>
        <CommissionerToggle />
      </header>

      {/* Breadcrumb */}
      {crumbs.length > 0 && (
        <nav className="sticky top-[62px] z-40 bg-[#F0F5F1] border-b border-rox-border px-4 py-1.5 flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1 flex-shrink-0">
              {i > 0 && <span className="text-rox-text3 text-xs">›</span>}
              <span className="text-[0.68rem] uppercase tracking-wider text-rox-text3">{crumb}</span>
            </span>
          ))}
          <span className="text-rox-text3 text-xs flex-shrink-0">›</span>
          <span className="text-[0.68rem] uppercase tracking-wider text-rox-green font-semibold flex-shrink-0">{title}</span>
        </nav>
      )}

      {/* Commissioner banner */}
      <CommissionerBanner />

      {/* Page content */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 pb-10 flex flex-col gap-3">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-5 px-4 text-center text-[0.65rem] text-rox-text3 uppercase tracking-wider border-t border-rox-border">
        RoxGolf.com · McKees Rocks, PA · Western PA & Eastern Ohio
      </footer>
    </div>
  )
}
