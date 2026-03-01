import {defineField, defineType} from 'sanity'
import { BlockContentIcon } from '@sanity/icons';

export const textblockType = defineType({
  name: 'textblock',
  title: 'Textblock',
  type: 'object',
    icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({title, media}) {
      return {
        title: title,
        subtitle: "Credit",
        media: media ?? BlockContentIcon,
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
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})