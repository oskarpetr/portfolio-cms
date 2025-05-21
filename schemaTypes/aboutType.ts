import {InfoOutlineIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'cs',
          title: 'Czech',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'subtitle',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
        },
        {
          name: 'cs',
          title: 'Czech',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'process',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
        },
        {
          name: 'cs',
          title: 'Czech',
          type: 'text',
        },
      ],
    }),
  ],
})
