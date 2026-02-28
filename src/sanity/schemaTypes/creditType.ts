import {defineField, defineType} from 'sanity'
import { StarIcon } from "@sanity/icons";

export const creditType = defineType({
  name: 'credit',
  title: 'Credit',
  type: 'document',
  icon: StarIcon,
  preview: {
    select: {
      title: "title",
      media: "thumbnail",
    },
    prepare({title, media}) {
      return {
        title: title,
        subtitle: "Credit",
        media: media ?? StarIcon,
      };
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'acting',
      type: 'boolean',
    }),
    defineField({
      name: 'voiceover',
      type: 'boolean',
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