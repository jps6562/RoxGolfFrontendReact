import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'rule',
  title: 'RgA Rule',
  type: 'document',
  fields: [
    defineField({
      name: 'ruleNumber',
      title: 'Rule Number / Label',
      type: 'string',
      description: 'e.g. "1", "2" — or "Speedy Play", "Etiquette", "Skins" for non-numbered sections',
    }),
    defineField({ name: 'title', title: 'Rule Title', type: 'string' }),
    defineField({
      name: 'sectionGroup',
      title: 'Section Group',
      type: 'string',
      options: {
        list: ['Rules 1–5', 'Rules 6–10', 'Rules 11–15', 'Speedy Play', 'Etiquette', 'Skins'],
      },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Sub-heading', value: 'h4' },
            { title: 'Note (italic)', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'ruleNumber' },
    prepare(selection: Record<string, string>) {
      return { title: selection.subtitle ? `Rule ${selection.subtitle} — ${selection.title}` : selection.title }
    },
  },
})
