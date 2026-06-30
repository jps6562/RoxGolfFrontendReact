import Card from '@/components/layout/Card'

export default function LeagueArchivesPage() {
  const seasons = [
    ['2026','Current season'],['2025','Champion: Mark Black'],['2024','See archive'],
    ['2023','See archive'],['2022','See archive'],['2021','See archive'],['2020','See archive'],
    ['2019','See archive'],['2018','See archive'],['2017','See archive'],['2016','See archive'],
    ['2015','See archive'],['2014','See archive'],['2013','See archive'],['2012','See archive'],
    ['2011','See archive'],['2010','See archive'],['2009','See archive'],['2008','See archive'],
    ['2007','See archive'],
  ]

  return (
    <Card>
      <h3 className="text-[0.95rem] font-bold text-rox-green uppercase tracking-wider mb-3">Tuesday Golf League Archives</h3>
      <ul className="flex flex-col gap-1.5 list-none p-0">
        {seasons.map(([yr, note]) => (
          <li key={yr} className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2.5 text-[0.87rem] text-rox-text2 border-l-2 border-rox-border">
            <strong className="text-rox-text1">{yr} Stats</strong> — {note}
          </li>
        ))}
      </ul>
    </Card>
  )
}
