import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'
import Card from '@/components/layout/Card'

export default function HomePage() {
  return (
    <>
      <Card className="flex items-center gap-4">
        <div className="w-14 h-14 bg-rox-green rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
          ⛳
        </div>
        <div>
          <div className="text-[1.9rem] font-extrabold tracking-tight text-rox-text1 leading-none">
            Rox<span className="text-rox-gold">Golf</span>.com
          </div>
          <div className="text-[0.72rem] text-rox-text3 uppercase tracking-wider mt-1.5">
            McKees Rocks, PA · Western PA & Eastern Ohio
          </div>
        </div>
      </Card>

      <NavGrid>
        <NavButton to="/golf"    label="Golf"           icon="⛳" variant="golf"  size="lg" />
        <NavButton to="/bowling" label="Bowling"         icon="🎳" variant="bowl"  size="lg" />
        <NavButton to="/poker"   label="Albert's Game"   icon="🃏" variant="pok"   size="lg" />
        <NavButton to="/photos"  label="Photo Gallery"   icon="📷"                size="lg" />
      </NavGrid>

      <NavButton
        to="https://www.instagram.com/roxgolfinfo"
        label="Instagram @roxgolfinfo — Live Results"
        icon="📸"
        size="sm"
        external
      />
    </>
  )
}
