import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'scoreImage',
  title: 'Score Image',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "League Standings — Week 6"',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          'Tuesday League — Flight Standings',
          'Tuesday League — Score Sheet',
          'MASTERS Trip — Standings',
          'Bowling — Current Standings',
        ],
      },
    }),
    defineField({ name: 'publishedAt', title: 'Date', type: 'datetime' }),
  ],
})
