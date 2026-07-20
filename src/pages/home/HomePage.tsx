import { useQuery } from '@tanstack/react-query'
import NavButton from '@/components/layout/NavButton'
import NavGrid from '@/components/layout/NavGrid'
import Card from '@/components/layout/Card'
import SectionLabel from '@/components/layout/SectionLabel'
import { client } from '@/sanity/client'
import logo from '@/assets/logo.jpeg'

interface Announcement {
  _id: string
  title: string
  body: string
  section?: string
  publishedAt?: string
}

function useAnnouncements() {
  return useQuery({
    queryKey: ['announcements'],
    queryFn: () =>
      client.fetch<Announcement[]>(
        `*[_type == "announcement"] | order(publishedAt desc)[0...5]`
      ),
  })
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function HomePage() {
  const { data: announcements } = useAnnouncements()
  const hasAnnouncements = announcements && announcements.length > 0

  return (
    <>
      <Card className="flex items-center gap-4">
        <img src={logo} alt="RoxGolf" className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
        <div>
          <div className="text-[1.9rem] font-extrabold tracking-tight text-rox-text1 leading-none">
            Rox<span className="text-rox-gold">Golf</span>.com
          </div>
          <div className="text-[0.72rem] text-rox-text3 uppercase tracking-wider mt-1.5">
            McKees Rocks, PA · Western PA & Eastern Ohio
          </div>
        </div>
      </Card>

      {hasAnnouncements && (
        <>
          <SectionLabel>Announcements</SectionLabel>
          {announcements.map((a) => (
            <Card key={a._id}>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="text-[0.95rem] font-bold text-rox-text1 leading-snug">{a.title}</p>
                {a.publishedAt && (
                  <span className="text-[0.68rem] text-rox-text3 uppercase tracking-wide whitespace-nowrap flex-shrink-0 mt-0.5">
                    {formatDate(a.publishedAt)}
                  </span>
                )}
              </div>
              {a.section && (
                <span className="inline-block text-[0.63rem] font-semibold uppercase tracking-wider bg-rox-green-light text-rox-green px-1.5 py-0.5 rounded mb-2">
                  {a.section}
                </span>
              )}
              <p className="text-[0.88rem] text-rox-text2 leading-relaxed whitespace-pre-wrap">{a.body}</p>
            </Card>
          ))}
        </>
      )}

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
