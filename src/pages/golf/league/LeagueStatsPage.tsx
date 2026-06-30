import Card from '@/components/layout/Card'
import SectionLabel from '@/components/layout/SectionLabel'
import FlightBadge from '@/components/layout/FlightBadge'
import { useCommissioner } from '@/context/CommissionerContext'

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{children}</h3>
)

const Th = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <th className={`text-left px-2 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border whitespace-nowrap ${className ?? ''}`}>
    {children}
  </th>
)
const Td = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <td className={`px-2 py-2 text-[0.85rem] text-rox-text2 border-b border-[#F0F5F1] whitespace-nowrap ${className ?? ''}`}>
    {children}
  </td>
)
const StickyTd = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <td className={`sticky left-0 bg-rox-card z-10 border-r border-rox-border px-2 py-2 text-[0.85rem] font-semibold text-rox-text1 whitespace-nowrap ${className ?? ''}`}>
    {children}
  </td>
)

// Row bg colors by flight
const fA = 'bg-[rgba(0,102,51,0.04)]'
const fB = 'bg-[rgba(43,95,138,0.04)]'
const fC = 'bg-[rgba(200,160,0,0.04)]'
const fN = 'bg-[rgba(138,53,53,0.04)]'

export default function LeagueStatsPage() {
  const { isCommissioner } = useCommissioner()

  return (
    <>
      {isCommissioner && (
        <Card className="border-rox-gold bg-rox-gold-light">
          <p className="text-[0.85rem] text-rox-text2 font-medium">
            ✏️ Commissioner Mode — Edit controls will be available here in Phase 2.
          </p>
        </Card>
      )}

      <Card>
        <H3>How HCP Average Works</H3>
        <p className="text-[0.9rem] text-rox-text2 leading-relaxed">
          Your HCP Average is based on 4 values: your <strong>3 best scores on the sheet over the past 21 weeks</strong> plus your <strong>overall sheet average</strong>. Players with fewer than 10 rounds use their best 3 scores + 1 dummy score + their overall average. The dummy disappears once you hit 10 rounds. Rookies are assigned a dummy score reflecting their potential, not their average.
        </p>
      </Card>

      <SectionLabel>Flight Standings — Thru 6/23/2026</SectionLabel>

      {/* On desktop: A+B side by side, C below */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

      <Card>
        <H3>A Flight</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse whitespace-nowrap text-[0.85rem]">
            <thead>
              <tr>
                <Th>Seed</Th><Th>Won</Th><Th className="min-w-[130px]">Player</Th>
                <Th>W</Th><Th>L</Th><Th>T</Th><Th>MR</Th><Th>PTS</Th>
              </tr>
            </thead>
            <tbody>
              <tr className={fA}><Td className="font-bold">#1</Td><Td className="text-rox-gold font-semibold">$100</Td><Td>Mike Olszewski <span className="text-rox-text3 text-xs">'23</span></Td><Td>4</Td><Td>0</Td><Td>2</Td><Td>0</Td><Td className="font-bold">10</Td></tr>
              <tr className={fA}><Td></Td><Td></Td><Td>Steve Vecciarelli</Td><Td>2</Td><Td>2</Td><Td>2</Td><Td>0</Td><Td className="font-bold">6</Td></tr>
              <tr className={fA}><Td></Td><Td></Td><Td>Kevin Grant</Td><Td>1</Td><Td>0</Td><Td>4</Td><Td>1</Td><Td className="font-bold">6</Td></tr>
              <tr className={fA}><Td></Td><Td></Td><Td>Mike Willoughby</Td><Td>2</Td><Td>1</Td><Td>1</Td><Td>1</Td><Td className="font-bold">5</Td></tr>
              <tr className={fA}><Td></Td><Td></Td><Td>Paul Coultas <span className="text-rox-text3 text-xs">'08,'20,'24</span></Td><Td>2</Td><Td>3</Td><Td>1</Td><Td>0</Td><Td className="font-bold">5</Td></tr>
              <tr className={fA}><Td></Td><Td></Td><Td>Eric Amato <span className="text-rox-text3 text-xs">'22</span></Td><Td>1</Td><Td>3</Td><Td>2</Td><Td>1</Td><Td className="font-bold">4</Td></tr>
              <tr className={fN}><Td className="text-rox-red font-bold">NIT</Td><Td></Td><Td>Jeff Kirkwood</Td><Td>1</Td><Td>4</Td><Td>0</Td><Td>1</Td><Td className="font-bold">2</Td></tr>
              <tr className={fN}><Td className="text-rox-red font-bold">NIT</Td><Td></Td><Td>JR Phillips</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td>0</Td><Td className="font-bold">0</Td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3>B Flight</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse whitespace-nowrap text-[0.85rem]">
            <thead>
              <tr>
                <Th>Seed</Th><Th>Won</Th><Th className="min-w-[130px]">Player</Th>
                <Th>W</Th><Th>L</Th><Th>T</Th><Th>MR</Th><Th>PTS</Th>
              </tr>
            </thead>
            <tbody>
              <tr className={fB}><Td className="font-bold">#1</Td><Td></Td><Td>Justin Rubb <span className="text-rox-text3 text-xs">'19</span></Td><Td>4</Td><Td>1</Td><Td>0</Td><Td>2</Td><Td className="font-bold">8</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Sean Salem</Td><Td>3</Td><Td>1</Td><Td>2</Td><Td>1</Td><Td className="font-bold">8</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>John Selnekovic Jr</Td><Td>2</Td><Td>0</Td><Td>3</Td><Td>2</Td><Td className="font-bold">7</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Scott Larue</Td><Td>2</Td><Td>2</Td><Td>1</Td><Td>2</Td><Td className="font-bold">5</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Brian Chalmers</Td><Td>1</Td><Td>3</Td><Td>2</Td><Td>2</Td><Td className="font-bold">4</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Bones Bonett</Td><Td>2</Td><Td>2</Td><Td>0</Td><Td>3</Td><Td className="font-bold">4</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Herb McCroskey</Td><Td>1</Td><Td>4</Td><Td>0</Td><Td>2</Td><Td className="font-bold">2</Td></tr>
              <tr className={fB}><Td></Td><Td></Td><Td>Base Lorenz</Td><Td>0</Td><Td>4</Td><Td>1</Td><Td>2</Td><Td className="font-bold">1</Td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      </div>{/* end A+B grid */}

      <Card>
        <H3>C Flight</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse whitespace-nowrap text-[0.85rem]">
            <thead>
              <tr>
                <Th>Seed</Th><Th>Won</Th><Th className="min-w-[130px]">Player</Th>
                <Th>W</Th><Th>L</Th><Th>T</Th><Th>MR</Th><Th>PTS</Th>
              </tr>
            </thead>
            <tbody>
              <tr className={fC}><Td className="font-bold">#1</Td><Td className="text-rox-gold font-semibold">$100</Td><Td>Mark Rippole</Td><Td>5</Td><Td>0</Td><Td>0</Td><Td>1</Td><Td className="font-bold">10</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Tyler Gielata</Td><Td>3</Td><Td>1</Td><Td>2</Td><Td>1</Td><Td className="font-bold">8</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Eric Gielata</Td><Td>3</Td><Td>2</Td><Td>1</Td><Td>0</Td><Td className="font-bold">7</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Jeremy Paulovich</Td><Td>2</Td><Td>2</Td><Td>2</Td><Td>2</Td><Td className="font-bold">6</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Dennis Erdner</Td><Td>2</Td><Td>2</Td><Td>1</Td><Td>0</Td><Td className="font-bold">5</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Rege Dumm</Td><Td>1</Td><Td>2</Td><Td>3</Td><Td>1</Td><Td className="font-bold">5</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Jim Felouzis</Td><Td>1</Td><Td>2</Td><Td>2</Td><Td>2</Td><Td className="font-bold">4</Td></tr>
              <tr className={fC}><Td></Td><Td></Td><Td>Mike Conlan</Td><Td>0</Td><Td>4</Td><Td>1</Td><Td>2</Td><Td className="font-bold">1</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-[0.78rem] text-rox-text3 mt-3">
          6 playoff spots in each flight · #1 Seed = $100, #2 Seed = $50 · Seeds finalized after Week 8 (Jul 14)
        </p>
      </Card>

      <Card>
        <p className="text-[0.82rem] text-rox-text2 leading-relaxed">
          <strong>Tiebreakers (2-person):</strong> 1. Head to Head &nbsp;2. Total Wins &nbsp;3. 9-hole match
        </p>
        <p className="text-[0.82rem] text-rox-text2 leading-relaxed mt-1.5">
          <strong>Tiebreakers (3+ person):</strong> 1. Head to Head &nbsp;2. Total Wins &nbsp;3. 9-hole strokeplay w/ HCP &nbsp;(non-money seeding only: coin flip)
        </p>
        <p className="text-[0.82rem] text-rox-text2 leading-relaxed mt-1.5">
          <strong>Match HCP</strong> = Difference between League HCPs minus 1. HCPs within 1 of each other = Even Match.
        </p>
      </Card>

      <SectionLabel>Player Stats — 2026</SectionLabel>

      <Card>
        <H3>HCP Averages &amp; Summary</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.83rem]">
            <thead>
              <tr>
                <th className="sticky left-0 bg-rox-card z-10 text-left px-2 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border border-r whitespace-nowrap min-w-[120px]">Player</th>
                <Th>Flt</Th><Th>HCP</Th><Th>HCP Avg</Th><Th>Sheet Avg</Th><Th>Ssn Avg</Th><Th>Rds</Th><Th>Dues</Th>
              </tr>
            </thead>
            <tbody>
              {([
                ['Eric Amato','A','3','38.56','41.25','41.57','16','$150','ok'],
                ['Kevin Grant','A','3','39.33','41.33','41.83','15','$125','part'],
                ['Mike Willoughby','A','4','39.68','41.73','42.67','15','$50','part'],
                ['Mike Olszewski','A','4','39.79','41.17','41.11','18','$150','ok'],
                ['Steve Vecciarelli','A','4','39.83','43.30','44.70','20','$90','part'],
                ['Paul Coultas','A','5','41.23','42.90','42.56','21','$0','no'],
                ['Jeff Kirkwood','NIT','4','40.21','43.83','43.75','18','$100','part'],
                ['JR Phillips','NIT','6','41.50','44.00','45.67','13','$0','no'],
                ['John Selnekovic Jr','B','5','41.37','44.47','44.70','19','$150','ok'],
                ['Justin Rubb','B','4','42.92','44.67','44.40','9','$150','ok'],
                ['Scott Larue','B','6','42.06','45.23','45.38','13','$150','ok'],
                ['Brian Chalmers','B','6','42.47','45.89','45.56','19','$150','ok'],
                ['Sean Salem','B','7','42.52','46.08','45.50','12','$150','ok'],
                ['Herb McCroskey','B','6','41.97','44.89','45.38','18','$0','no'],
                ['Bones Bonett','B','9','44.83','46.33','46.33','3','$150','ok'],
                ['Base Lorenz','B','10','45.85','47.40','47.40','5','$0','no'],
                ['Jim Felouzis','C','10','45.55','49.20','49.00','15','$25','part'],
                ['Tyler Gielata','C','11','46.63','49.50','49.20','22','$150','ok'],
                ['Scott Laquatra','C','10','46.00','46.00','46.00','2','$0','no'],
                ['Dennis Erdner','C','10','46.33','50.32','50.89','19','$150','ok'],
                ['Eric Gielata','C','13','48.59','51.35','50.63','17','$75','part'],
                ['Jeremy Paulovich','C','15','51.28','54.12','53.88','17','$150','ok'],
                ['Mike Conlan','C','16','51.92','54.69','56.00','13','$50','part'],
                ['Mark Rippole','C','17','52.53','56.12','55.14','17','$150','ok'],
                ['Rege Dumm','C','17','53.45','55.80','55.80','5','$150','ok'],
              ] as [string,string,string,string,string,string,string,string,string][]).map(([name, flt, hcp, hcpAvg, sheetAvg, ssnAvg, rds, dues, duesStatus]) => {
                const rowBg = flt === 'A' ? fA : flt === 'B' ? fB : flt === 'C' ? fC : fN
                const duesColor = duesStatus === 'ok' ? 'text-rox-green font-semibold' : duesStatus === 'no' ? 'text-rox-red' : 'text-rox-gold'
                return (
                  <tr key={name} className={rowBg}>
                    <StickyTd className={rowBg}>{name}</StickyTd>
                    <Td><FlightBadge flight={flt as 'A'|'B'|'C'|'NIT'} /></Td>
                    <Td className="font-mono text-center">{hcp}</Td>
                    <Td className="font-mono">{hcpAvg}</Td>
                    <Td className="font-mono">{sheetAvg}</Td>
                    <Td className="font-mono">{ssnAvg}</Td>
                    <Td className="text-center">{rds}</Td>
                    <Td className={duesColor}>{dues}</Td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <SectionLabel>Weekly Scores — 2026</SectionLabel>

      <Card>
        <H3>Score Sheet</H3>
        <p className="text-[0.78rem] text-rox-text3 mb-3">9-hole scores · (b) = Back 9 · (f) = Front 9 · <span className="text-rox-green font-semibold">Green</span> = season low</p>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.81rem]">
            <thead>
              <tr>
                <th className="sticky left-0 bg-rox-card z-10 text-left px-2 py-2 text-rox-text3 text-[0.66rem] uppercase tracking-wider font-semibold border-b border-rox-border border-r whitespace-nowrap min-w-[110px]">Player</th>
                {['3/31f','4/7','4/14b','4/21f','4/28b','5/12b','5/19f','5/26b','6/2f','6/9b','6/23b'].map(d => (
                  <Th key={d}>{d}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                ['Eric Amato',     fA,  '39','38','','42','42','','','43','','42','37*'],
                ['Kevin Grant',    fA,  '','40','','43','43','','42','','','41','42'],
                ['Mike Willoughby',fA,  '41','39','44','','44','','','45','40','40',''],
                ['Mike Olszewski', fA,  '','43','','41','44','40','40','40','41','','42'],
                ['Steve Vecciarelli',fA,'42','48','42','47','47','45','45','49','','','41'],
                ['Paul Coultas',   fA,  '','44','44','44','45','41','42','41','44','41','45'],
                ['Jeff Kirkwood',  fN,  '','46','','44','45','38','43','44','48','','42'],
                ['JR Phillips',    fN,  '','44','','','48','45','','','','',''],
                ['John Selnekovic Jr',fB,'41','','45','','','','47','43','39*','41','41'],
                ['Justin Rubb',    fB,  '','46','','46','','','42','','','',''],
                ['Scott Larue',    fB,  '','46','','49','41','','45','43','41','44',''],
                ['Brian Chalmers', fB,  '','43','46','48','42','','43','46','48','43','45'],
                ['Sean Salem',     fB,  '','50','48','','','','','48','47','40*','44'],
                ['Herb McCroskey', fB,  '46','47','44','','43','43','','48','45','43','49'],
                ['Bones Bonett',   fB,  '','','','','','','','43','48','',''],
                ['Base Lorenz',    fB,  '','','','','46','','48','47','','','48'],
                ['Jim Felouzis',   fC,  '','','43*','','','','52','52','','',''],
                ['Tyler Gielata',  fC,  '52','47','50','48','50','46','46','51','47','52','52'],
                ['Scott Laquatra', fC,  '','','','','46','','','','','','46'],
                ['Dennis Erdner',  fC,  '57','52','47','52','53','43','49','56','49','','48'],
                ['Eric Gielata',   fC,  '','49','50','','','','55','49','46','55','52'],
                ['Jeremy Paulovich',fC, '54','','54','49','','','','53','50','55','56'],
                ['Mike Conlan',    fC,  '','52','','','','56','56','54','','','56'],
                ['Mark Rippole',   fC,  '','51','','','','57','55','56','','','50'],
                ['Rege Dumm',      fC,  '','','','','52','58','','','57','57','55'],
              ] as [string, string, ...string[]][]).map(([name, rowBg, ...scores]) => (
                <tr key={name} className={rowBg}>
                  <StickyTd className={rowBg}>{name}</StickyTd>
                  {scores.map((s, i) => {
                    const isLow = s.endsWith('*')
                    const val = s.replace('*', '')
                    return (
                      <Td key={i} className={`text-center font-mono ${isLow ? 'text-rox-green font-bold' : ''}`}>
                        {val}
                      </Td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[0.75rem] text-rox-text3 mt-3">Scores migrated from commissioner's spreadsheet · Verify with Paul if any discrepancies</p>
      </Card>

      <SectionLabel>2026 Playoff Bracket</SectionLabel>

      <Card>
        <H3>HCP Matchplay Playoffs</H3>
        <p className="text-[0.82rem] text-rox-text2 mb-4">Seeds determined after Week 8 (Jul 14). 6 seeds per flight + NIT bracket for seeds 7 &amp; 8.</p>

        {(['A','B','C'] as const).map(flight => {
          const color = flight === 'A' ? 'text-rox-green' : flight === 'B' ? 'text-rox-blue' : 'text-rox-gold'
          const border = flight === 'A' ? 'border-rox-green' : flight === 'B' ? 'border-rox-blue' : 'border-rox-gold'
          const bg = flight === 'A' ? fA : flight === 'B' ? fB : fC
          return (
            <div key={flight} className={`border-l-2 ${border} pl-3 mb-4 last:mb-0`}>
              <p className={`text-[0.75rem] uppercase tracking-wider font-bold ${color} mb-2`}>
                {flight} Flight — Jul 21 thru Aug 18
              </p>
              <div className="flex flex-col gap-1.5">
                <div className={`flex items-center gap-2 rounded-rox-sm px-2.5 py-2 text-[0.83rem] ${bg}`}>
                  <span className="font-bold text-rox-text1 w-7">#{1}{flight}</span>
                  <span className="flex-1 text-rox-text2">Bye to Quarterfinals</span>
                  <span className="text-rox-gold font-semibold text-xs">$100</span>
                </div>
                <div className={`flex items-center gap-2 rounded-rox-sm px-2.5 py-2 text-[0.83rem] ${bg}`}>
                  <span className="font-bold text-rox-text1 w-7">#{4}{flight}</span>
                  <span className="text-rox-text3 text-xs">vs</span>
                  <span className="font-bold text-rox-text1">#{5}{flight}</span>
                  <span className="flex-1 text-rox-text3 text-xs ml-1">→ $40</span>
                </div>
                <div className={`flex items-center gap-2 rounded-rox-sm px-2.5 py-2 text-[0.83rem] ${bg}`}>
                  <span className="font-bold text-rox-text1 w-7">#{3}{flight}</span>
                  <span className="text-rox-text3 text-xs">vs</span>
                  <span className="font-bold text-rox-text1">#{6}{flight}</span>
                  <span className="flex-1 text-rox-text3 text-xs ml-1">→ $40</span>
                </div>
                <div className={`flex items-center gap-2 rounded-rox-sm px-2.5 py-2 text-[0.83rem] ${bg}`}>
                  <span className="font-bold text-rox-text1 w-7">#{2}{flight}</span>
                  <span className="flex-1 text-rox-text2">Bye to Quarterfinals</span>
                  <span className="text-rox-gold font-semibold text-xs">$50</span>
                </div>
              </div>
            </div>
          )
        })}

        <p className="text-[0.75rem] uppercase tracking-wider text-rox-text3 font-semibold mt-3 mb-2">Prize Structure</p>
        <ul className="flex flex-col gap-1.5 list-none p-0">
          {[
            'Each R1 match winner: $40',
            'Quarterfinal winners: $40',
            'A Flight Champ: $50 · B/C Flight Champ: $40',
            'Overall HCP Champion (Aug 18): $50',
          ].map((item, i) => (
            <li key={i} className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2 text-[0.83rem] text-rox-text2 border-l-2 border-rox-border">{item}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <H3>NIT Bracket — Not In The Playoffs</H3>
        <p className="text-[0.82rem] text-rox-text2 mb-3">Seeds 7 &amp; 8 from each flight compete for the NIT Championship ($50).</p>
        <div className="flex flex-col gap-1.5">
          {[['#8A','#7C'],['#7B','#8C'],['#8B','#7A']].map(([a,b],i) => (
            <div key={i} className={`flex items-center gap-2 rounded-rox-sm px-2.5 py-2 text-[0.83rem] ${fN}`}>
              <span className="font-bold text-rox-text1">{a}</span>
              <span className="text-rox-text3 text-xs">vs</span>
              <span className="font-bold text-rox-text1">{b}</span>
            </div>
          ))}
        </div>
        <ul className="flex flex-col gap-1.5 list-none p-0 mt-3">
          <li className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2 text-[0.83rem] text-rox-text2 border-l-2 border-rox-border">Semifinal winners: <strong>$25</strong></li>
          <li className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2 text-[0.83rem] text-rox-text2 border-l-2 border-rox-border">NIT Champion (Aug 18): <strong>$50</strong></li>
        </ul>
      </Card>
    </>
  )
}
