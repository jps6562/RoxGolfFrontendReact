interface RuleItem {
  label?: string
  text: string
}

interface RuleListProps {
  items: RuleItem[]
  className?: string
}

export default function RuleList({ items, className }: RuleListProps) {
  return (
    <ul className={`flex flex-col gap-1.5 mt-0.5 list-none p-0 ${className ?? ''}`}>
      {items.map((item, i) => (
        <li key={i} className="bg-[#F5FAF6] rounded-rox-sm px-3 py-2.5 text-[0.87rem] text-rox-text2 leading-snug border-l-2 border-rox-border">
          {item.label && <strong className="text-rox-text1 font-semibold">{item.label}</strong>}
          {item.label ? ` — ${item.text}` : item.text}
        </li>
      ))}
    </ul>
  )
}
