import { useParams } from 'react-router-dom'
import Card from '@/components/layout/Card'

const galleryTitles: Record<string, string> = {
  trip:   'Trip Player Photos',
  fun:    'Fun Photos',
  former: 'Former Player Photos',
  league: 'League Photos',
}

const galleryDesc: Record<string, string> = {
  trip:   'Photos of players from the annual McKees Rocks MASTERS Golf Trip.',
  fun:    'Fun photos from events, outings, and gatherings.',
  former: 'Photos of former players and members of the RgA group.',
  league: 'Photos from Tuesday Golf League nights and events.',
}

export default function PhotoGalleryPage() {
  const { album } = useParams<{ album: string }>()
  const title = galleryTitles[album ?? ''] ?? 'Photo Gallery'
  const desc = galleryDesc[album ?? ''] ?? 'Photos coming soon.'

  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{title}</h3>
      <p className="text-[0.9rem] text-rox-text2 leading-relaxed">{desc}</p>
    </Card>
  )
}
