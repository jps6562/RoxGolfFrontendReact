import { useParams } from 'react-router-dom'
import Card from '@/components/layout/Card'

const content: Record<string, { title: string; text: string }> = {
  'all-time': {
    title: 'Trip All-Time Scores',
    text: 'All-time records and champions from the McKees Rocks MASTERS.',
  },
  '2024-2026': {
    title: 'Trip Archives 2024 – 2026',
    text: '2026 Cup Champion: Dan Patterson · 2026 Runner-Up: Andrew Taylor. Results from the 2024 and 2025 McKees Rocks MASTERS coming soon.',
  },
  '2017-2023': {
    title: 'Trip Archives 2017 – 2023',
    text: 'Results from the 2017 through 2023 McKees Rocks MASTERS.',
  },
  '2013-2016': {
    title: 'Trip Archives 2013 – 2016',
    text: 'Results from the 2013 through 2016 trips.',
  },
  '2006-2012': {
    title: 'Trip Archives 2006 – 2012',
    text: 'Results from the 2006 through 2012 trips.',
  },
  '1999-2005': {
    title: 'Trip Archives 1999 – 2005',
    text: 'Results from the 1999 through 2005 trips.',
  },
}

export default function TripArchiveYearPage() {
  const { range } = useParams<{ range: string }>()
  const page = content[range ?? ''] ?? { title: 'Trip Archive', text: 'Archive content coming soon.' }

  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{page.title}</h3>
      <p className="text-[0.9rem] text-rox-text2 leading-relaxed">{page.text}</p>
    </Card>
  )
}
