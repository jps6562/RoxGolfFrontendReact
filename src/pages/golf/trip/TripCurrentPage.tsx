import Card from '@/components/layout/Card'

const RLI = ({ children }: { children: React.ReactNode }) => (
  <li className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2.5 text-[0.87rem] text-rox-text2 leading-snug border-l-2 border-rox-border">
    {children}
  </li>
)

export default function TripCurrentPage() {
  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">
        2026 McKees Rocks MASTERS — Trip Info
      </h3>
      <ul className="flex flex-col gap-1.5 list-none p-0">
        <RLI><strong>Destination</strong> — Myrtle Beach, SC area</RLI>
        <RLI><strong>Format</strong> — Annual spring tournament</RLI>
        <RLI><strong>2026 Cup Champion</strong> — Dan Patterson</RLI>
        <RLI><strong>2026 Runner-Up</strong> — Andrew Taylor</RLI>
      </ul>
      <p className="text-[0.78rem] text-rox-text3 mt-3 italic">Full trip details posted to this page each year.</p>
    </Card>
  )
}
