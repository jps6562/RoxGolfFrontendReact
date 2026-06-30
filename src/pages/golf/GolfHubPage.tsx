import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'
import SectionLabel from '@/components/layout/SectionLabel'

export default function GolfHubPage() {
  return (
    <>
      <NavGrid>
        <NavButton to="/golf/rules"  label="RgA Rules"                        icon="📋" variant="golf" />
        <NavButton to="/golf/trip"   label="McKees Rocks MASTERS (Golf Trip)"  icon="✈️" variant="trip" />
        <NavButton to="/golf/league" label="Tuesday Golf League"               icon="🏅" variant="league" />
        <NavButton to="/golf/donnie" label="Donnie Coultas Memorial Golf Tour" icon="🏆" variant="golf" />
      </NavGrid>
      <NavButton to="/golf/misc" label="Golf Misc" icon="📌" size="sm" />
      <SectionLabel>More</SectionLabel>
      <NavGrid columns={2}>
        <NavButton to="/golf/bonus-card" label="Bonus Card" icon="🎴" size="sm" />
        <NavButton to="/golf/old-news"   label="Old News"   icon="📰" size="sm" />
      </NavGrid>
    </>
  )
}
