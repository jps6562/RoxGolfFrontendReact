import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'

export default function BowlingHubPage() {
  return (
    <NavGrid>
      <NavButton to="/bowling/current"            label="Bowling — Current Season" icon="🎳" variant="bowl" />
      <NavButton to="/bowling/records"            label="Bowling — Records"        icon="🏆" variant="bowl" />
      <NavButton to="/bowling/archives/2018-2025" label="2018/19 – 2024/25"        icon="📅" variant="arc" />
      <NavButton to="/bowling/archives/2013-2018" label="2013/14 – 2017/18"        icon="📅" variant="arc" />
    </NavGrid>
  )
}
