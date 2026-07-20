import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: { list: ['General', 'Golf League', 'Golf Trip', 'Bowling'] },
    }),
    defineField({ name: 'publishedAt', title: 'Date', type: 'datetime' }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
