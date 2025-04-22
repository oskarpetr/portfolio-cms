import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const inquiryType = defineType({
  name: 'inquiry',
  title: 'Inquiries',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'service',
      type: 'string',
    }),
    defineField({
      name: 'budget',
      type: 'string',
    }),
    defineField({
      name: 'timeframe',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
  ],
})
