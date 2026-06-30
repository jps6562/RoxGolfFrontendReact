import Card from '@/components/layout/Card'
import SectionLabel from '@/components/layout/SectionLabel'

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{children}</h3>
)
const P = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[0.9rem] text-rox-text2 leading-relaxed mb-2.5 last:mb-0 ${className ?? ''}`}>{children}</p>
)
const RLI = ({ children }: { children: React.ReactNode }) => (
  <li className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2.5 text-[0.87rem] text-rox-text2 leading-snug border-l-2 border-rox-border">
    {children}
  </li>
)
const RL = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-1.5 mt-1.5 list-none p-0">{children}</ul>
)

export default function RgARulesPage() {
  return (
    <>
      <Card>
        <H3>RgA Rules — Recreational Golfers of America</H3>
        <P>RgA Rules are a unified set of relaxed rules better suited to speeding up play, eliminating unfortunate lies, and making the game a little bit easier and <strong>MUCH MORE FUN</strong>, while keeping things fair for gamblers.</P>
        <P>The USGA Rules can be difficult to understand and apply — strict and procedural, leading to slow play. RgA Rules simplify penalty situations so players can keep moving.</P>
      </Card>

      <SectionLabel>Rules 1 – 5</SectionLabel>

      <Card>
        <H3>Rule 1 — Breakfast Ball</H3>
        <P>Every player has the option to hit a second tee shot on their first hole of the day. Why ruin your entire day with a bad first shot?</P>
        <RL>
          <RLI>If you choose to hit a second tee shot, you <strong>MUST</strong> play it — you may not play the better of the two.</RLI>
          <RLI>The decision must be made while still on the tee. No going back.</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Rule 2 — Improved Lies</H3>
        <P>"Lift, Clean, and Place" is permitted in the fairways, rough, woods, weeds, penalty areas, and bunkers (see Rule 3 for bunkers). You may place your ball on the best spot within a few inches of where it was at rest, as long as you don't change your cut of grass, move your ball from water or mud in penalty areas, or improve your line of sight or swing around trees, weeds, etc.</P>
        <RL>
          <RLI>You may <strong>not</strong> touch your ball if it is on rocks, in water, or in mud in a penalty area.</RLI>
          <RLI>You may <strong>not</strong> move any rock that would cause your ball to move.</RLI>
          <RLI>You <strong>may</strong> move rocks impeding your line of sight or swing — even in a penalty area.</RLI>
          <RLI>No penalty for accidentally making your ball move — replace it and play on.</RLI>
          <RLI>You may <strong>not</strong> break branches or stomp weeds. If unplayable, take an unplayable lie, add a penalty, and play on.</RLI>
        </RL>
        <p className="mt-2.5 text-[0.82rem] text-rox-text3 italic">Rule 2 eliminates cheating — "fluffing" when nobody is looking is the #1 way cheaters gain an advantage.</p>
      </Card>

      <Card>
        <H3>Rule 3 — Bunkers</H3>
        <P>"Rake and Place" in all bunkers, even "fried eggs." Rake a fresh spot (or scrape with your spikes) then place your ball where it was originally at rest.</P>
        <RL>
          <RLI>If there's no fair spot due to water, erosion, etc., you may remove the ball from the bunker and drop equidistant (or further) from the hole.</RLI>
          <RLI>A downhill lie to avoid water is <strong>not</strong> a fair spot — you may remove the ball from the bunker.</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Rule 4 — Lost Balls and OB</H3>
        <P>If your ball is lost or unplayable in a penalty area (staked or un-staked: woods, weeds, water, deep grass, high fescue, etc.) or Out of Bounds — add a penalty stroke, then choose one of the following:</P>
        <RL>
          <RLI>Re-hit from the original spot.</RLI>
          <RLI>Drop within 2 club lengths of the point the ball <strong>entered</strong> the penalty area or OB.</RLI>
          <RLI>Drop on a line keeping the entry point directly between your ball and the hole, going back as far as you want.</RLI>
          <RLI>Take lateral relief by dropping on the opposite side of a RED penalty area, equidistant from the hole.</RLI>
          <RLI><strong>NEW</strong> — Drop on your "line of flight" somewhere between where the ball entered the penalty area and where you hit it. (If ball went past the pin, you may only go back 2 club lengths from the entry point.)</RLI>
        </RL>
        <P className="mt-2.5">In all cases, it is where the ball <strong>ENTERED</strong> the area — not the total distance traveled. When dropping, you get relief from overhanging limbs, but not from trees further down the tree line.</P>
        <p className="text-[0.7rem] uppercase tracking-wider text-rox-text3 font-semibold mt-3 mb-1.5">Rule 4b — No Penalty Exceptions</p>
        <RL>
          <RLI><strong>Plugged Balls</strong></RLI>
          <RLI><strong>Leaves</strong></RLI>
          <RLI><strong>Thick Rough along fairway</strong></RLI>
          <RLI><strong>Taken by Someone</strong></RLI>
          <RLI><strong>Darkness</strong></RLI>
        </RL>
        <P className="mt-2.5">If your ball can't be found and the foursome agrees it <strong>DEFINITELY</strong> should have been found, drop in the believed area with no penalty. However, if it's <em>possible</em> it's in an intended penalty area, add a penalty stroke.</P>
      </Card>

      <Card>
        <H3>Rule 5 — Root Rule</H3>
        <P>You may take relief from roots that grow along the ground, but <strong>not</strong> the portion growing upward connected to the trunk. Nearest point of complete relief, no nearer the hole.</P>
        <P>Relief is granted if the root affects your line of swing, line of sight, or stance — so nobody gets hurt. You don't necessarily get a clear shot. You get relief from roots, not from branches or trunks.</P>
      </Card>

      <SectionLabel>Rules 6 – 10</SectionLabel>

      <Card>
        <H3>Rule 6 — Man Made Objects</H3>
        <P>If your ball lands near a man-made object (post, bench, OB fence, garbage can, cart path, etc.) you may take complete FREE relief. Determine the nearest point of complete relief — even if closer to the hole — place your ball there, and play on.</P>
        <RL>
          <RLI>Relief applies if the object hinders your stance, swing, or line of sight.</RLI>
          <RLI>Includes all flower beds and decorative areas where plants are at risk of serious damage from a swing.</RLI>
        </RL>
      </Card>

      <Card>
        <H3>Rule 7 — Accidental Ball Contact</H3>
        <P>No penalty for accidentally striking your ball or causing it to move during a practice stroke or at address. Since we play "Lift, Clean, and Place," quickly re-set your ball to your liking and play on.</P>
      </Card>

      <Card>
        <H3>Rule 8 — Hitting the Wrong Ball</H3>
        <P>No penalty for hitting the wrong ball <strong>once</strong>. Quickly replace it and proceed with the correct ball.</P>
        <P>However, if you hit the wrong ball two consecutive shots, you must finish with it, count your strokes, and <strong>ADD A PENALTY</strong>. Be mindful of holding up play and fix errors as quickly as possible.</P>
      </Card>

      <Card>
        <H3>Rule 9 — Sharing Information</H3>
        <P>To speed up play, discussion of yardages and club selection between players is encouraged. GPS devices and laser range-finders (including slope models) are permitted and may be shared.</P>
      </Card>

      <Card>
        <H3>Rule 10 — Equipment</H3>
        <P>Any commercially available club (no maximum in your bag) or ball is acceptable. Players may swap out their ball at any time during play. However, you may not have separate balls for driving and putting, continually switching between the two.</P>
      </Card>

      <SectionLabel>Rules 11 – 15</SectionLabel>

      <Card>
        <H3>Rule 11 — Touching Surfaces</H3>
        <P>No penalty for touching the surface of a bunker or penalty area with your club. You <strong>may</strong> touch your club to the sand or ground at address.</P>
        <p className="text-[0.85rem] font-semibold text-rox-text1 mt-2 mb-1">You may NOT:</p>
        <RL>
          <RLI>Intentionally take practice swings that test the surface (accidents happen — intent to test is the breach).</RLI>
          <RLI>Break branches or stomp weeds.</RLI>
          <RLI>Excessively depress the sand behind the ball to make it easier to hit.</RLI>
          <RLI>Move rocks in intended penalty areas that would cause your ball to move.</RLI>
        </RL>
        <P className="mt-2.5">Any of the above = 1 stroke penalty.</P>
      </Card>

      <Card>
        <H3>Rule 12 — Don't Be a Jagoff</H3>
        <P>Players may not use obscure USGA rules for infractions that don't grossly affect play — playing out of order, not marking your ball on the green, accidentally hitting someone's equipment, etc. Just play on.</P>
      </Card>

      <Card>
        <H3>Rule 13 — Hole-In-One</H3>
        <P>Unlike regular golf tradition, the maker of a Hole-In-One is entitled to <strong>free drinks for the rest of the evening</strong>, paid for by the foursome or group (everyone on a golf trip or at an outing). Everyone should chip in to celebrate the achievement.</P>
      </Card>

      <Card>
        <H3>Rule 14 — RgA Shambles</H3>
        <P>Everyone in the group hits their tee shot. Then, each player may choose to play in from <em>any</em> of the tee shots — not everyone has to play from the same one.</P>
        <RL>
          <RLI>Once you select a tee shot, place your ball within one club length of it and play to the hole per RgA rules.</RLI>
          <RLI><strong>No Breakfast Balls in Shambles.</strong></RLI>
        </RL>
      </Card>

      <Card>
        <H3>Rule 15 — RgA Scrambles</H3>
        <P>Players should mark the spot of the chosen ball. Each player may place their ball within one club length of the marked spot, no closer to the hole.</P>
        <RL>
          <RLI>Within one club length, you <strong>may</strong> change your cut of grass, move from behind a tree, from water, from a bunker, or from OB.</RLI>
          <RLI>You only get one club length — no extra space for your stance.</RLI>
          <RLI>On the putting green, you may only move your ball a maximum of 6", no closer to the hole.</RLI>
          <RLI><strong>No Breakfast Balls in Scrambles.</strong></RLI>
        </RL>
      </Card>

      <SectionLabel>Speedy Play</SectionLabel>

      <Card>
        <H3>RgA Tips for Speedy Play</H3>
        <RL>
          <RLI>Don't always mark your ball on the green — only mark when in someone's way or when cleaning.</RLI>
          <RLI>Putt out whenever possible instead of always marking and waiting. Excessive marking really slows play.</RLI>
          <RLI>Always know when you are next. Be ready to play when it's your turn.</RLI>
          <RLI>Play "Ready Golf" — respect honors on the tee if the player is ready, but hit if they're not.</RLI>
          <RLI>Watch your playing partners' shots and help search for lost balls.</RLI>
          <RLI>Limit your time at the turn to food, drinks, supplies, and restrooms. Eat while playing.</RLI>
          <RLI>Use smartphone apps, GPS devices, or laser range-finders for yardages.</RLI>
          <RLI>Tee it forward — play from the appropriate tees for your skill level.</RLI>
          <RLI>When sharing a cart, drop off your partner at their ball with their club, then go to your ball and hit. Meet up further down the fairway.</RLI>
          <RLI>Learn to putt with the flag in — it really saves time.</RLI>
        </RL>
      </Card>

      <SectionLabel>Etiquette</SectionLabel>

      <Card>
        <H3>RgA Guide to Golf Etiquette</H3>
        <p className="font-semibold text-rox-text1 text-[0.9rem] mb-1.5">Dress Code</p>
        <RL>
          <RLI>No denim blue jeans. Wear khakis, slacks, or Bermuda-style shorts. Cargo shorts are fine at public courses.</RLI>
          <RLI>Collared shirts are best, but nice collarless shirts (not t-shirts) are typically fine at public courses.</RLI>
          <RLI>Sleeveless shirts are typically acceptable for women golfers only.</RLI>
          <RLI>Soft spike golf shoes or sneakers are the norm. Most courses do not allow metal spikes.</RLI>
        </RL>
        <p className="font-semibold text-rox-text1 text-[0.9rem] mt-3 mb-1.5">Tee Times</p>
        <RL>
          <RLI>Arrive 30 minutes before your tee time, check in at the pro shop, and be at the Starter 10 minutes early.</RLI>
          <RLI>Arrive 45–60 minutes early if you plan to hit the range.</RLI>
        </RL>
        <p className="font-semibold text-rox-text1 text-[0.9rem] mt-3 mb-1.5">Speed of Play</p>
        <RL>
          <RLI>Always keep up with the group ahead. Golf is much more enjoyable when played in 4 hours or less.</RLI>
          <RLI>If unable to keep pace, allow faster groups to play through — but keep playing as they do.</RLI>
        </RL>
      </Card>

      <SectionLabel>Skins</SectionLabel>

      <Card>
        <H3>RgA Rules for Skins</H3>
        <P>Single foursomes should play two separate games — a Front 9 Skins Game and a Back 9 Skins Game.</P>
        <RL>
          <RLI><strong>PAR or better</strong> to win a Skin. Two tie, all tie — the Skin is cancelled. No carry-overs.</RLI>
          <RLI>Whoever earns the most Skins after 9 holes <strong>WINS</strong> and collects from the 2 players with the fewest Skins.</RLI>
          <RLI>2nd place (4 or 5 players) = No Pay. If 2 tie for 2nd, they split and pay half each. With 3 players, there is no 2nd Place No Pay.</RLI>
          <RLI>Everyone tying for the fewest Skins pays the full amount — the Bonanza.</RLI>
        </RL>
        <P className="mt-2.5"><strong>Foursome/fivesome:</strong> If 2 tie for 1st, they split. If 3 tie for 1st, the game is null.<br /><strong>Threesome:</strong> If 2 tie for 1st, the game is null.</P>
      </Card>

      <Card>
        <p className="text-[0.8rem] text-rox-text3 leading-relaxed">
          A big thank you to: Don Coultas, John Huber, Taylor Pawlish, Bucky Cline, Doug Warzinski, Mike Bell, Mark Broda, Jon Walsh, Shawn Liguori, Jason Klein, Jason Corrado, Chuck Kuzniewski, Bob Colantoni, Bo Hand, Chuck Landa, Justin Rubb, Eric Amato, Matt Ginella, and Charlie Rymer.
        </p>
      </Card>
    </>
  )
}
