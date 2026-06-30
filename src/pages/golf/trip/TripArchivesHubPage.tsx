import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'
import SectionLabel from '@/components/layout/SectionLabel'

export default function TripArchivesHubPage() {
  return (
    <>
      <NavButton to="/golf/trip/archives/all-time" label="Trip All-Time Scores" icon="🥇" variant="trip" />
      <SectionLabel>By Year Range</SectionLabel>
      <NavGrid>
        <NavButton to="/golf/trip/archives/2024-2026" label="2024 – 2026" icon="📅" variant="arc" size="sm" />
        <NavButton to="/golf/trip/archives/2017-2023" label="2017 – 2023" icon="📅" variant="arc" size="sm" />
        <NavButton to="/golf/trip/archives/2013-2016" label="2013 – 2016" icon="📅" variant="arc" size="sm" />
        <NavButton to="/golf/trip/archives/2006-2012" label="2006 – 2012" icon="📅" variant="arc" size="sm" />
        <NavButton to="/golf/trip/archives/1999-2005" label="1999 – 2005" icon="📅" variant="arc" size="sm" />
      </NavGrid>
    </>
  )
}
