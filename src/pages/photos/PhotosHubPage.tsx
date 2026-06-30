import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'

export default function PhotosHubPage() {
  return (
    <NavGrid>
      <NavButton to="/photos/trip"   label="Trip Player Photos"   icon="📸" variant="golf" />
      <NavButton to="/photos/fun"    label="Fun Photos"           icon="😄" variant="golf" />
      <NavButton to="/photos/former" label="Former Player Photos" icon="👤" variant="golf" />
      <NavButton to="/photos/league" label="League Photos"        icon="📷" variant="golf" />
    </NavGrid>
  )
}
