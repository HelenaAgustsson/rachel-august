import {defineField, defineType} from 'sanity'

export const creditType = defineType({
  name: 'credit',
  title: 'Credit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'format',
      type: 'string',
    }),
    defineField({
      name: 'role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      type:'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'attribution',
          type: 'string'
        })
      ]
    }),
  ]
})