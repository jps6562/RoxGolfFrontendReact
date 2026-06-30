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
  <p className={`text-[0.9rem] text-rox-text2 leading-relaxed mt-2.5 ${className ?? ''}`}>{children}</p>
)

export default function DonniePage() {
  return (
    <>
      <Card>
        <H3>Donnie Coultas Memorial Golf Tour</H3>
        <P className="mt-0">Played once a month, May through September, at courses all over Western Pennsylvania and Eastern Ohio. Dedicated to the memory of Donnie Coultas, Taylor Pawlish, and all of our friends — golfers or not — that left us too soon.</P>
        <P>The Skins game format is used because Donnie and Taylor hated giving strokes. With a Main Game Skins game and a B Flight Skins game at each event, everyone can compete and handicap strokes don't determine the outcome. That's how they always wanted it.</P>
      </Card>

      <Card>
        <H3>Event Fee Breakdown</H3>
        <RL>
          <RLI><strong>$35 event fee</strong> covers administration and entry into the Skins Game ($20/pp) and Closest-to-the-Pins on par 3s ($10/pp).</RLI>
          <RLI>B Flight Players' $20 Skins fee is divided between the Main Game and the B Flight Skins Game.</RLI>
          <RLI>B Flight = bottom 50% in HCP average playing at the event.</RLI>
          <RLI>Only <strong>24 spots</strong> at each event — reserve your spot early.</RLI>
        </RL>
      </Card>

      <SectionLabel>2026 Events</SectionLabel>

      <Card>
        <H3>Event #1 — Yankee Run</H3>
        <RL>
          <RLI><strong>Date</strong> — Saturday, May 9, 2026 · 10:39am – 11:24am</RLI>
          <RLI><strong>Green Fee</strong> — $50 for golf + $35 event fee</RLI>
          <RLI><strong>Celebrating</strong> — Donnie Coultas 1948–2024 (age 75)</RLI>
        </RL>
        <P>Over the years, Donnie made many friends playing with us in Ryder Cups and at the Tuesday Night League at Quicksilver. He brought guys from the Rocks, from the Air National Guard Base, and from Florida into our golf group — many of them regulars at the McKees Rocks Masters.</P>
        <P>He attended 19 times between 1999 and 2018, and was the 1999, 2000, and 2003 Champion. He loved it at the beach. Donnie finished his career dominating the Golf-A-Holics League in Pittsburgh and the VFW League he played in Florida.</P>
      </Card>

      <Card>
        <H3>Event #2 — Oak Tree Golf Club</H3>
        <RL>
          <RLI><strong>Date</strong> — Saturday, June 6, 2026 · 10:30am – 11:15am</RLI>
          <RLI><strong>Green Fee</strong> — $59 for golf + $35 event fee</RLI>
          <RLI><strong>Celebrating</strong> — The 2 Brians</RLI>
        </RL>
        <P><strong>Brian Cook 1980–2021 (age 40)</strong><br />
        "Cookie" came to our group through the Tuesday Night League at Quicksilver. He attended the McKees Rocks Masters 3 times between 2019 and 2021, and is known for yelling "Myrtle Beach!" every time he hit a good shot.</P>
        <P><strong>Brian Webb 1972–2023 (age 50)</strong><br />
        Known as "B Flight Webb" and "Silk" — a name he gave himself, for how smooth he was. A regular at the McKees Rocks Masters, attending 7 times between 2016 and 2022. Known for his fancy shirts and fancy jeans at dinner and always good for a laugh.</P>
      </Card>

      <Card>
        <H3>Event #3 — "The Taylor" at Lake Arthur</H3>
        <RL>
          <RLI><strong>Date</strong> — Sunday, July 12, 2026 · 10:30am – 11:10am</RLI>
          <RLI><strong>Green Fee</strong> — $55 for golf + $35 event fee</RLI>
          <RLI><strong>Celebrating</strong> — Taylor Pawlish 1980–2023 (age 42)</RLI>
        </RL>
        <P>Taylor came to our group at a Ryder Cup at Lake Arthur CC. He played with us in Ryder Cups and the Tuesday Night League at Quicksilver and Shadow Lakes, where he was the 2021 Champion. He attended the McKees Rocks Masters 6 times between 2015 and 2022, winning in 2015 and 2022.</P>
        <P>Taylor was one of my best golf buds — one of the few guys that would walk 9 holes with me. He was super-competitive and always wanted to win. We actually created this tour together before his passing; the goal was to give everyone a chance to play with him monthly after his move out to New Kensington. Who knew it would become a Memorial tour.</P>
      </Card>

      <Card>
        <H3>Event #4 — Moon Golf Club</H3>
        <p className="text-[0.85rem] text-rox-text3 italic mb-2">Base &amp; Paul's Birthday Blowout</p>
        <RL>
          <RLI><strong>Date</strong> — Sunday, August 16, 2026 · 10:00am – 10:50am</RLI>
          <RLI><strong>Event Fee</strong> — $35 (green fee TBD)</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Event #5 — North Park Golf Club</H3>
        <p className="text-[0.85rem] text-rox-text3 italic mb-2">Cux Classic</p>
        <RL>
          <RLI><strong>Date</strong> — Saturday, September 19, 2026 · 10:00am – 10:50am</RLI>
          <RLI><strong>Green Fee</strong> — $50 for golf + $35 event fee</RLI>
          <RLI><strong>Celebrating</strong> — All of our friends that left too soon</RLI>
        </RL>
        <P>Danny Debold, Jimmy Sarracino, Danny Baker, Mark Pilotta, JJ Morton, John Salamon, Albert Deltondo, Brian Adamski, and all those we miss on the course.</P>
        <p className="text-[0.82rem] text-rox-text3 mt-2">To add a friend to the list, email Paul at <strong>roxgolf@live.com</strong></p>
      </Card>
    </>
  )
}
