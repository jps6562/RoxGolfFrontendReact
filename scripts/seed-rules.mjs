import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'et5qapmh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// ── Portable Text helpers ─────────────────────────────────────────────────────

let k = 0
const key = () => `k${++k}`

const span   = (text, marks = []) => ({ _type: 'span', _key: key(), marks, text })
const strong = (text) => span(text, ['strong'])
const em     = (text) => span(text, ['em'])

const block = (style, listItem, ...parts) => ({
  _type: 'block',
  _key: key(),
  style,
  ...(listItem ? { listItem, level: 1 } : {}),
  children: parts.map(p => (typeof p === 'string' ? span(p) : p)),
  markDefs: [],
})

const p    = (...parts) => block('normal',    null,     ...parts)
const li   = (...parts) => block('normal',    'bullet', ...parts)
const h4   = (text)     => block('h4',        null,     text)
const note = (text)     => block('blockquote',null,     text)

// ── Rule documents ────────────────────────────────────────────────────────────

const rules = [
  {
    _type: 'rule', ruleNumber: '1', title: 'Breakfast Ball',
    sectionGroup: 'Rules 1–5', order: 1,
    body: [
      p('Every player has the option to hit a second tee shot on their first hole of the day. Why ruin your entire day with a bad first shot?'),
      li('If you choose to hit a second tee shot, you ', strong('MUST'), ' play it — you may not play the better of the two.'),
      li('The decision must be made while still on the tee. No going back.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '2', title: 'Improved Lies',
    sectionGroup: 'Rules 1–5', order: 2,
    body: [
      p('“Lift, Clean, and Place” is permitted in the fairways, rough, woods, weeds, penalty areas, and bunkers (see Rule 3 for bunkers). You may place your ball on the best spot within a few inches of where it was at rest, as long as you don’t change your cut of grass, move your ball from water or mud in penalty areas, or improve your line of sight or swing around trees, weeds, etc.'),
      li('You may ', strong('not'), ' touch your ball if it is on rocks, in water, or in mud in a penalty area.'),
      li('You may ', strong('not'), ' move any rock that would cause your ball to move.'),
      li('You ', strong('may'), ' move rocks impeding your line of sight or swing — even in a penalty area.'),
      li('No penalty for accidentally making your ball move — replace it and play on.'),
      li('You may ', strong('not'), ' break branches or stomp weeds. If unplayable, take an unplayable lie, add a penalty, and play on.'),
      note('Rule 2 eliminates cheating — “fluffing” when nobody is looking is the #1 way cheaters gain an advantage.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '3', title: 'Bunkers',
    sectionGroup: 'Rules 1–5', order: 3,
    body: [
      p('“Rake and Place” in all bunkers, even “fried eggs.” Rake a fresh spot (or scrape with your spikes) then place your ball where it was originally at rest.'),
      li('If there’s no fair spot due to water, erosion, etc., you may remove the ball from the bunker and drop equidistant (or further) from the hole.'),
      li('A downhill lie to avoid water is ', strong('not'), ' a fair spot — you may remove the ball from the bunker.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '4', title: 'Lost Balls and OB',
    sectionGroup: 'Rules 1–5', order: 4,
    body: [
      p('If your ball is lost or unplayable in a penalty area (staked or un-staked: woods, weeds, water, deep grass, high fescue, etc.) or Out of Bounds — add a penalty stroke, then choose one of the following:'),
      li('Re-hit from the original spot.'),
      li('Drop within 2 club lengths of the point the ball ', strong('entered'), ' the penalty area or OB.'),
      li('Drop on a line keeping the entry point directly between your ball and the hole, going back as far as you want.'),
      li('Take lateral relief by dropping on the opposite side of a RED penalty area, equidistant from the hole.'),
      li(strong('NEW'), ' — Drop on your “line of flight” somewhere between where the ball entered the penalty area and where you hit it. (If ball went past the pin, you may only go back 2 club lengths from the entry point.)'),
      p('In all cases, it is where the ball ', strong('ENTERED'), ' the area — not the total distance traveled. When dropping, you get relief from overhanging limbs, but not from trees further down the tree line.'),
      h4('Rule 4b — No Penalty Exceptions'),
      li(strong('Plugged Balls')),
      li(strong('Leaves')),
      li(strong('Thick Rough along fairway')),
      li(strong('Taken by Someone')),
      li(strong('Darkness')),
      p('If your ball can’t be found and the foursome agrees it ', strong('DEFINITELY'), ' should have been found, drop in the believed area with no penalty. However, if it’s ', em('possible'), ' it’s in an intended penalty area, add a penalty stroke.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '5', title: 'Root Rule',
    sectionGroup: 'Rules 1–5', order: 5,
    body: [
      p('You may take relief from roots that grow along the ground, but ', strong('not'), ' the portion growing upward connected to the trunk. Nearest point of complete relief, no nearer the hole.'),
      p('Relief is granted if the root affects your line of swing, line of sight, or stance — so nobody gets hurt. You don’t necessarily get a clear shot. You get relief from roots, not from branches or trunks.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '6', title: 'Man Made Objects',
    sectionGroup: 'Rules 6–10', order: 6,
    body: [
      p('If your ball lands near a man-made object (post, bench, OB fence, garbage can, cart path, etc.) you may take complete FREE relief. Determine the nearest point of complete relief — even if closer to the hole — place your ball there, and play on.'),
      li('Relief applies if the object hinders your stance, swing, or line of sight.'),
      li('Includes all flower beds and decorative areas where plants are at risk of serious damage from a swing.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '7', title: 'Accidental Ball Contact',
    sectionGroup: 'Rules 6–10', order: 7,
    body: [
      p('No penalty for accidentally striking your ball or causing it to move during a practice stroke or at address. Since we play “Lift, Clean, and Place,” quickly re-set your ball to your liking and play on.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '8', title: 'Hitting the Wrong Ball',
    sectionGroup: 'Rules 6–10', order: 8,
    body: [
      p('No penalty for hitting the wrong ball ', strong('once'), '. Quickly replace it and proceed with the correct ball.'),
      p('However, if you hit the wrong ball two consecutive shots, you must finish with it, count your strokes, and ', strong('ADD A PENALTY'), '. Be mindful of holding up play and fix errors as quickly as possible.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '9', title: 'Sharing Information',
    sectionGroup: 'Rules 6–10', order: 9,
    body: [
      p('To speed up play, discussion of yardages and club selection between players is encouraged. GPS devices and laser range-finders (including slope models) are permitted and may be shared.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '10', title: 'Equipment',
    sectionGroup: 'Rules 6–10', order: 10,
    body: [
      p('Any commercially available club (no maximum in your bag) or ball is acceptable. Players may swap out their ball at any time during play. However, you may not have separate balls for driving and putting, continually switching between the two.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '11', title: 'Touching Surfaces',
    sectionGroup: 'Rules 11–15', order: 11,
    body: [
      p('No penalty for touching the surface of a bunker or penalty area with your club. You ', strong('may'), ' touch your club to the sand or ground at address.'),
      h4('You may NOT:'),
      li('Intentionally take practice swings that test the surface (accidents happen — intent to test is the breach).'),
      li('Break branches or stomp weeds.'),
      li('Excessively depress the sand behind the ball to make it easier to hit.'),
      li('Move rocks in intended penalty areas that would cause your ball to move.'),
      p('Any of the above = 1 stroke penalty.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '12', title: "Don't Be a Jagoff",
    sectionGroup: 'Rules 11–15', order: 12,
    body: [
      p('Players may not use obscure USGA rules for infractions that don’t grossly affect play — playing out of order, not marking your ball on the green, accidentally hitting someone’s equipment, etc. Just play on.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '13', title: 'Hole-In-One',
    sectionGroup: 'Rules 11–15', order: 13,
    body: [
      p('Unlike regular golf tradition, the maker of a Hole-In-One is entitled to ', strong('free drinks for the rest of the evening'), ', paid for by the foursome or group (everyone on a golf trip or at an outing). Everyone should chip in to celebrate the achievement.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: '14', title: 'RgA Shambles',
    sectionGroup: 'Rules 11–15', order: 14,
    body: [
      p('Everyone in the group hits their tee shot. Then, each player may choose to play in from ', em('any'), ' of the tee shots — not everyone has to play from the same one.'),
      li('Once you select a tee shot, place your ball within one club length of it and play to the hole per RgA rules.'),
      li(strong('No Breakfast Balls in Shambles.')),
    ],
  },
  {
    _type: 'rule', ruleNumber: '15', title: 'RgA Scrambles',
    sectionGroup: 'Rules 11–15', order: 15,
    body: [
      p('Players should mark the spot of the chosen ball. Each player may place their ball within one club length of the marked spot, no closer to the hole.'),
      li('Within one club length, you ', strong('may'), ' change your cut of grass, move from behind a tree, from water, from a bunker, or from OB.'),
      li('You only get one club length — no extra space for your stance.'),
      li('On the putting green, you may only move your ball a maximum of 6”, no closer to the hole.'),
      li(strong('No Breakfast Balls in Scrambles.')),
    ],
  },
  {
    _type: 'rule', ruleNumber: 'Speedy Play', title: 'RgA Tips for Speedy Play',
    sectionGroup: 'Speedy Play', order: 16,
    body: [
      li('Don’t always mark your ball on the green — only mark when in someone’s way or when cleaning.'),
      li('Putt out whenever possible instead of always marking and waiting. Excessive marking really slows play.'),
      li('Always know when you are next. Be ready to play when it’s your turn.'),
      li('Play “Ready Golf” — respect honors on the tee if the player is ready, but hit if they’re not.'),
      li('Watch your playing partners’ shots and help search for lost balls.'),
      li('Limit your time at the turn to food, drinks, supplies, and restrooms. Eat while playing.'),
      li('Use smartphone apps, GPS devices, or laser range-finders for yardages.'),
      li('Tee it forward — play from the appropriate tees for your skill level.'),
      li('When sharing a cart, drop off your partner at their ball with their club, then go to your ball and hit. Meet up further down the fairway.'),
      li('Learn to putt with the flag in — it really saves time.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: 'Etiquette', title: 'RgA Guide to Golf Etiquette',
    sectionGroup: 'Etiquette', order: 17,
    body: [
      h4('Dress Code'),
      li('No denim blue jeans. Wear khakis, slacks, or Bermuda-style shorts. Cargo shorts are fine at public courses.'),
      li('Collared shirts are best, but nice collarless shirts (not t-shirts) are typically fine at public courses.'),
      li('Sleeveless shirts are typically acceptable for women golfers only.'),
      li('Soft spike golf shoes or sneakers are the norm. Most courses do not allow metal spikes.'),
      h4('Tee Times'),
      li('Arrive 30 minutes before your tee time, check in at the pro shop, and be at the Starter 10 minutes early.'),
      li('Arrive 45–60 minutes early if you plan to hit the range.'),
      h4('Speed of Play'),
      li('Always keep up with the group ahead. Golf is much more enjoyable when played in 4 hours or less.'),
      li('If unable to keep pace, allow faster groups to play through — but keep playing as they do.'),
    ],
  },
  {
    _type: 'rule', ruleNumber: 'Skins', title: 'RgA Rules for Skins',
    sectionGroup: 'Skins', order: 18,
    body: [
      p('Single foursomes should play two separate games — a Front 9 Skins Game and a Back 9 Skins Game.'),
      li(strong('PAR or better'), ' to win a Skin. Two tie, all tie — the Skin is cancelled. No carry-overs.'),
      li('Whoever earns the most Skins after 9 holes ', strong('WINS'), ' and collects from the 2 players with the fewest Skins.'),
      li('2nd place (4 or 5 players) = No Pay. If 2 tie for 2nd, they split and pay half each. With 3 players, there is no 2nd Place No Pay.'),
      li('Everyone tying for the fewest Skins pays the full amount — the Bonanza.'),
      p(strong('Foursome/fivesome:'), ' If 2 tie for 1st, they split. If 3 tie for 1st, the game is null. ', strong('Threesome:'), ' If 2 tie for 1st, the game is null.'),
    ],
  },
]

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('Missing SANITY_WRITE_TOKEN env var')
    process.exit(1)
  }
  console.log(`Seeding ${rules.length} rules into Sanity...`)
  for (const rule of rules) {
    const result = await client.create(rule)
    console.log(`  ✓  Rule ${rule.ruleNumber} — ${rule.title} (${result._id})`)
  }
  console.log('\nDone! All rules are now in Sanity as drafts — go to /studio and publish them.')
}

seed().catch(err => {
  console.error(err)
  process.exit(1)
})
