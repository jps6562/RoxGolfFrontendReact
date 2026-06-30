import Card from '@/components/layout/Card'

export default function BowlingCurrentPage() {
  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">Bowling — Current Season</h3>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full border-collapse text-[0.87rem]">
          <thead>
            <tr>
              <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border">#</th>
              <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border">Team / Player</th>
              <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border">W</th>
              <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border">L</th>
              <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border">Avg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center text-rox-text3 py-6 text-[0.87rem]">
                No scores posted yet this season
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[0.75rem] text-rox-text3 mt-3">Live standings via <code className="bg-rox-green-light text-rox-green px-1 py-0.5 rounded text-[0.72rem]">/api/bowling/standings/2026</code></p>
    </Card>
  )
}
