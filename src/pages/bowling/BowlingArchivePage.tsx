import { useParams } from 'react-router-dom'
import Card from '@/components/layout/Card'

const titles: Record<string, string> = {
  '2018-2025': 'Bowling 2018/19 – 2024/25',
  '2013-2018': 'Bowling 2013/14 – 2017/18',
}

export default function BowlingArchivePage() {
  const { range } = useParams<{ range: string }>()
  const title = titles[range ?? ''] ?? 'Bowling Archives'

  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">{title}</h3>
      <p className="text-[0.9rem] text-rox-text2 leading-relaxed">Season results coming soon.</p>
    </Card>
  )
}
