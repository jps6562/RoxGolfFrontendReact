import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'

export default function TripInfoPage() {
  return (
    <NavGrid>
      <NavButton to="/golf/trip/info/current" label="2026 Trip Info"      icon="📍" variant="trip" />
      <NavButton to="/golf/trip/info/history" label="Trip History & Info" icon="📖" />
    </NavGrid>
  )
}
