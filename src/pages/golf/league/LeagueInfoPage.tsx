import Card from '@/components/layout/Card'
import SectionLabel from '@/components/layout/SectionLabel'

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{children}</h3>
)
const RLI = ({ children }: { children: React.ReactNode }) => (
  <li className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2.5 text-[0.87rem] text-rox-text2 leading-snug border-l-2 border-rox-border">
    {children}
  </li>
)
const RL = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-1.5 mt-1.5 list-none p-0">{children}</ul>
)
const P = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[0.9rem] text-rox-text2 leading-relaxed mt-2 ${className ?? ''}`}>{children}</p>
)

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="text-left px-2.5 py-2 text-rox-text3 text-[0.68rem] uppercase tracking-wider font-semibold border-b border-rox-border">
    {children}
  </th>
)
const Td = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-2.5 py-2 text-[0.87rem] text-rox-text2 border-b border-[#F0F5F1] ${className ?? ''}`}>
    {children}
  </td>
)

export default function LeagueInfoPage() {
  return (
    <>
      <Card>
        <H3>2026 Tuesday Golf League</H3>
        <RL>
          <RLI><strong>Course</strong> — The Club at Shadow Lakes, Aliquippa</RLI>
          <RLI><strong>Season</strong> — April through September, Tuesday evenings</RLI>
          <RLI><strong>Tee Times</strong> — 5:00, 5:08, 5:16, 5:24, 5:32pm</RLI>
          <RLI><strong>Format</strong> — Round Robin Matchplay in 3 flights, culminating in Single Elimination Playoff Tournaments</RLI>
          <RLI><strong>Rules</strong> — RgA Rules with USGA Rules</RLI>
        </RL>
        <P>Please arrive at least 20 minutes prior to your tee time to pay greens fees and load your cart. To join the league, email Paul at <strong>roxgolf@live.com</strong></P>
      </Card>

      <Card>
        <H3>Membership</H3>
        <P className="mt-0"><strong>Regular Members</strong> ($150/season) are included in all aspects of the league:</P>
        <RL>
          <RLI>Weekly matches</RLI>
          <RLI>Pre-Season and Mid-Season Scramble events</RLI>
          <RLI>Multiple weeks of Myrtle Beach points (Modified Stableford)</RLI>
          <RLI><strong>NEW 2025</strong> — Multiple weeks of Low Net in each flight, paid during Scratch Matchplay Tournament</RLI>
          <RLI>Handicap Matchplay Playoffs — Single Elimination Tournament</RLI>
          <RLI>Scratch Matchplay Tournament — Single Elimination Tournament</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Qualifying</H3>
        <P className="mt-0">All new players (and players with fewer than 10 weeks the previous season) start as Guests. When flights are set, top Guests fill open spots based on ability — lowest Handicap Averages qualify, not who you know or when you signed up.</P>
        <P>Players are encouraged to post as many 9-hole scores as possible before end of April. Email or text scores to Paul to have them added to the stat sheet.</P>
      </Card>

      <SectionLabel>2026 Schedule</SectionLabel>

      <Card>
        <H3>Handicapping / Pre-Season</H3>
        <RL>
          <RLI><strong>Mar 31</strong> — Handicapping (Bucs away)</RLI>
          <RLI><strong>Apr 7</strong> — Handicapping</RLI>
          <RLI><strong>Apr 14</strong> — Handicapping — Myrtle Beach Week</RLI>
          <RLI><strong>Apr 21</strong> — Handicapping (Bucs away)</RLI>
          <RLI><strong>Apr 28</strong> — Handicapping</RLI>
          <RLI><strong>May 5</strong> — Pre-Season 3-Man Scramble (Bucs away)</RLI>
        </RL>
        <p className="text-[0.82rem] text-rox-text3 mt-2.5">Scramble draft: lowest-ranked players by HCP Avg are captains and pick first; draft snakes back. Commissioner may adjust for fairness or restrict players without enough posted scores.</p>
      </Card>

      <Card>
        <H3>Regular Season</H3>
        <RL>
          <RLI><strong>May 12</strong> — Week 1</RLI>
          <RLI><strong>May 19</strong> — Week 2 (Bucs away)</RLI>
          <RLI><strong>May 26</strong> — Week 3</RLI>
          <RLI><strong>Jun 2</strong> — Week 4 (Bucs away)</RLI>
          <RLI><strong>Jun 9</strong> — Week 5</RLI>
          <RLI><strong>Jun 16</strong> — Mid-Season 3-Man Scramble (Bucs away)</RLI>
          <RLI><strong>Jun 23</strong> — Week 6</RLI>
          <RLI><strong>Jun 30</strong> — Week 7 (Bucs away)</RLI>
          <RLI><strong>Jul 7</strong> — Week 8</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Playoffs &amp; Post-Season</H3>
        <RL>
          <RLI><strong>Jul 14</strong> — Buffer Week / Tie-Breaks, MB Points Paid</RLI>
          <RLI><strong>Jul 21</strong> — Handicap Matchplay Playoffs Round 1, MB Points Paid</RLI>
          <RLI><strong>Jul 28</strong> — Handicap Matchplay Playoffs cont., MB Points Paid</RLI>
          <RLI><strong>Aug 4</strong> — Handicap Matchplay Playoffs cont., MB Points Paid</RLI>
          <RLI><strong>Aug 11</strong> — Flight Finals, MB Points Paid</RLI>
          <RLI><strong>Aug 18</strong> — League Finals, Low Net Paid in each Flight</RLI>
          <RLI><strong>Aug 25</strong> — Scratch Matchplay Round 1, Low Net Paid (Bucs away)</RLI>
          <RLI><strong>Sep 1</strong> — Scratch Matchplay cont., Low Net Paid</RLI>
          <RLI><strong>Sep 8</strong> — Scratch Matchplay Semi-Finals, Low Net Paid</RLI>
          <RLI><strong>Sep 15</strong> — Championship Tuesday — Money Payouts at 8pm, Low Net Paid</RLI>
        </RL>
      </Card>

      <SectionLabel>Local Rules</SectionLabel>

      <Card>
        <H3>Local Rules</H3>
        <RL>
          <RLI><strong>#1</strong> — You are assumed to be coming unless you call or TEXT to cancel. Possible $20 fine for no-call.</RLI>
          <RLI><strong>#2</strong> — Everyone gets a Breakfast Ball on their first hole. If you hit it, you must play it. No CPs or Birdie Skins with a Breakfast Ball.</RLI>
          <RLI><strong>#3</strong> — Matches tied after 9 holes = TIE. Playoff matches: proceed to next available hole, Sudden Death with no HCP. Exception: if handicap difference is 7+ strokes, the player continues to receive strokes on extra holes when warranted by the scorecard.</RLI>
          <RLI><strong>#4</strong> — Triple Bogey is the max score to record for handicap purposes. You may score higher for match purposes.</RLI>
          <RLI><strong>#5</strong> — Any match not played by start of playoffs = TIE.</RLI>
          <RLI><strong>#6</strong> — The road that splits the golf course is NOT Out of Bounds.</RLI>
          <RLI><strong>#7</strong> — Hole #5: nothing is OB on typical tee shots, even balls cutting the corner. NEW: staked OB now exists on the left side of the final third of the hole — play per Rule #8.</RLI>
          <RLI><strong>#8</strong> — Holes #13 &amp; #14: white staked OB. You may drop where the ball crossed the line (our rule), but cannot play a ball that is across the white line. Options: re-hit, drop within 2 club lengths of where it crossed, or drop on line-of-flight from the tee — all with 1 stroke penalty.</RLI>
          <RLI><strong>#9</strong> — Hole #18: area around the Maintenance building is OB. Use the hedgeline as OB markers; lines extend to the lakes on both sides. No relief from hedges for balls under them but in play. Free relief from equipment parked outside the hedged area. NEW: Driving Range area is now OB — play per Rule #8.</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Tee Information</H3>
        <RL>
          <RLI><strong>White tees</strong> — Regular tees for all players</RLI>
          <RLI><strong>Hole #10</strong> — Played as a Par 4. White tee = front of back tee area (260y). Gold tee = back of lower tees (225y).</RLI>
          <RLI><strong>Gold tees</strong> — Available to players who struggle to hit drives over 200 yards. Gold tee players play Gold tees on Par 3s and special positions on #10 (back of Blue tee), #12 (old lower tee box), and #13 (from very back edge of fairway).</RLI>
        </RL>
      </Card>

      <SectionLabel>Weather Policy</SectionLabel>

      <Card>
        <H3>Official Weather Policy</H3>
        <P className="mt-0">You do not have to tee off if you don't want to. However, <strong>if you start a match, you must make every effort to finish it</strong> — even if you have to wait out weather and play in sloppy conditions until darkness. By joining the league, you are committed to staying until darkness if necessary.</P>
        <P>Any unfinished match is SUSPENDED and must be completed before the following week's golf. Matches that are tied may be replayed from the beginning the next week.</P>
        <p className="text-[0.82rem] text-rox-text3 mt-2">The commissioner reserves the right to replay a match if a player leaves when it could have been finished, or to award a match to the leader if players are unable to meet before the 5:30pm start the next Tuesday.</p>
      </Card>

      <SectionLabel>Nightly Games</SectionLabel>

      <Card>
        <H3>Birdie Skins — $10/player</H3>
        <RL>
          <RLI>Birdies on the same hole cancel each other.</RLI>
          <RLI>$100 maximum value of a Skin.</RLI>
          <RLI>No Birdies = money carries to next week.</RLI>
          <RLI>Birdies from Breakfast Balls don't count.</RLI>
          <RLI>All payouts rounded down to nearest $5, remainder rolls over.</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Chip-In Game — $5/player</H3>
        <RL>
          <RLI>All chip-ins split the pot. No chip-ins = money carries to next week.</RLI>
          <RLI>Chip-ins are anything holed from off the putting surface — par not needed.</RLI>
          <RLI>$100 maximum value of a chip-in.</RLI>
          <RLI>A 100+ yard hole-out wins the pot over all other chip-ins.</RLI>
          <RLI>Multiple 100+ yard hole-outs split the pot regardless of distance.</RLI>
          <RLI>All payouts rounded down to nearest $5, remainder rolls over.</RLI>
        </RL>
      </Card>

      <SectionLabel>Champions &amp; Records</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

      <Card>
        <H3>HCP Matchplay Overall League Champion</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.87rem]">
            <thead>
              <tr><Th>Year</Th><Th>Champion</Th><Th>Flight</Th></tr>
            </thead>
            <tbody>
              {[
                ['2025','Mark Black','A'],['2024','Paul Coultas','A'],['2023','Mike Olszewski','A'],
                ['2022','Eric Amato','A'],['2021','Taylor Pawlish','A'],['2020','Paul Coultas','A'],
                ['2019','Justin Rubb','A'],['2018','Paul Shanta','B'],['2017','Bill Rusnak','A'],
                ['2016','Jim Littler','C'],['2015','Dave Deklewa','F'],['2014','Doug Warzinski','B'],
                ['2013','RJ Jernstrom','D'],['2012','Dave Perry','A'],['2011','Jason Klein','B'],
                ['2010','Jay Blount','B'],['2009','Cux Colantoni','C'],['2008','Paul Coultas','A'],
                ['2007','Ron Coultas','B'],
              ].map(([yr, champ, flt]) => (
                <tr key={yr}>
                  <Td className="font-semibold text-rox-text1">{yr}</Td>
                  <Td>{champ}</Td>
                  <Td>{flt}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3>Scratch Matchplay Champion</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.87rem]">
            <thead>
              <tr><Th>Year</Th><Th>Champion</Th><Th>Flight</Th></tr>
            </thead>
            <tbody>
              {[
                ['2025','Mike Willoughby','A'],['2024','Paul Coultas','A'],['2023','Eric Amato','A'],
                ['2022','Taylor Pawlish','A'],['2021','Eric Amato','A'],['2020','Eric Amato','A'],
                ['2019','Paul Coultas','A'],['2018','Taylor Pawlish','A'],['2017','Brandon Tonkovich','A'],
                ['2016','Jon Walsh','A'],['2015','Jon Walsh','A'],
              ].map(([yr, champ, flt]) => (
                <tr key={yr}>
                  <Td className="font-semibold text-rox-text1">{yr}</Td>
                  <Td>{champ}</Td>
                  <Td>{flt}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <H3>Lowest Scoring Average</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.87rem]">
            <thead>
              <tr><Th>Year</Th><Th>Player</Th><Th>Avg</Th></tr>
            </thead>
            <tbody>
              {[
                ['2025','Eric Amato','40.73'],['2024','Mark Black','40.37'],['2023','Mike Olszewski','41.00'],
                ['2022','Taylor Pawlish','41.50'],['2021','Taylor Pawlish','41.32'],['2020','Eric Amato','41.15'],
                ['2019','Eric Amato','41.75'],['2018','Brandon Tonkovich','37.53'],['2017','John Walsh','37.36'],
                ['2016','Jim Mitchell','37.47'],['2015','Jon Walsh','38.67'],['2014','Dave Perry','40.74'],
                ['2013','Dave Perry','39.89'],['2012','Dave Perry','40.67'],['2011','Paul Coultas','42.05'],
                ['2010','Paul Coultas','43.38'],['2009','Keith Wuenchel','43.08'],['2008','Grant Burcham','42.57'],
                ['2007','Paul Coultas','44.07'],
              ].map(([yr, player, avg]) => (
                <tr key={yr}>
                  <Td className="font-semibold text-rox-text1">{yr}</Td>
                  <Td>{player}</Td>
                  <Td className="font-mono">{avg}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      </div>{/* end champions grid */}

      <Card>
        <H3>All-Time Lowest Scores</H3>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full border-collapse text-[0.87rem]">
            <thead>
              <tr><Th>Score</Th><Th>Player</Th><Th>Date(s)</Th></tr>
            </thead>
            <tbody>
              {[
                ['3 Under','Jim Mitchell','8-23-16'],
                ['2 Under','Jon Walsh','6-2-15, 6-21-16, 7-26-16'],
                ['2 Under','Taylor Pawlish','6-21-16, 4-25-17'],
                ['2 Under','Karsten Farrell','6-21-16'],
                ['2 Under','Brandon Tonkovich','8-1-17, 6-26-18'],
                ['1 Under','Paul Coultas','8-16-11, 9-17-24'],
                ['1 Under','Dave Perry','8-20-13, 8-4-15, 7-10-18'],
                ['1 Under','Taylor Pawlish','7-21-15, 8-2-16'],
                ['1 Under','Terry Waxler','8-11-15'],
                ['1 Under','Jim Mitchell','7-5-16, 7-12-16, 8-9-16, 8-30-16, 6-26-18'],
                ['1 Under','Jon Walsh','8-2-16, 5-23-17, 8-1-17, 8-7-18'],
                ['1 Under','Bill Rusnak','5-23-17'],
                ['1 Under','Brandon Tonkovich','6-27-17'],
                ['1 Under','David Paladino','8-1-17'],
                ['1 Under','Steve Vecciarelli','8-1-23'],
                ['1 Under','Mike Willoughby','6-11-24'],
              ].map(([score, player, dates], i) => (
                <tr key={i}>
                  <Td className="font-semibold text-rox-text1 whitespace-nowrap">{score}</Td>
                  <Td>{player}</Td>
                  <Td className="text-rox-text3 text-[0.82rem]">{dates}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[0.7rem] uppercase tracking-wider text-rox-text3 font-semibold mt-3 mb-1.5">Even Par Club</p>
        <p className="text-[0.82rem] text-rox-text2 leading-relaxed">
          Paul Coultas, Jason Klein, Dave Perry, Jon Walsh, Karsten Farrell, Jim Mitchell, Paul Shanta, Taylor Pawlish, Russ Picard, Bill Rusnak, Brandon Tonkovich, Doug Dombroski, Jim Picard, Nathan Buick, Eric Amato, Mike Olszewski, Mark Black
        </p>
        <p className="text-[0.7rem] uppercase tracking-wider text-rox-text3 font-semibold mt-3 mb-1.5">Hole in One — League Play</p>
        <p className="text-[0.87rem] text-rox-text2">
          Quicksilver #14 — 161y, 9-Iron — <strong>Paul Coultas</strong>, 5-30-2007
        </p>
      </Card>
    </>
  )
}
