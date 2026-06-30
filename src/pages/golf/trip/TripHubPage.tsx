import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'

export default function TripHubPage() {
  return (
    <NavGrid>
      <NavButton to="/golf/trip/info"     label="Trip Info"     icon="ℹ️" variant="trip" />
      <NavButton to="/golf/trip/field"    label="Trip Field"    icon="👥" variant="trip" />
      <NavButton to="/golf/trip/pairings" label="Trip Pairings" icon="🤝" variant="trip" />
      <NavButton to="/golf/trip/condos"   label="Condo Info"    icon="🏠" variant="trip" />
      <NavButton to="/golf/trip/archives" label="Trip Archives" icon="📚" variant="arc" />
    </NavGrid>
  )
}
