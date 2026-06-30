import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'

export default function LeagueHubPage() {
  return (
    <NavGrid>
      <NavButton to="/golf/league/info"     label="2026 League Info"  icon="📋" variant="league" />
      <NavButton to="/golf/league/stats"    label="2026 League Stats" icon="📊" variant="league" />
      <NavButton to="/golf/league/archives" label="League Archives"   icon="📚" variant="arc" />
    </NavGrid>
  )
}
