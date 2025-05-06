import {defineField, defineType} from 'sanity'
import {BillIcon} from '@sanity/icons'

export const invoiceType = defineType({
  name: 'invoice',
  title: 'Invoices',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'client',
      type: 'string',
    }),
    defineField({
      name: 'invoice',
      type: 'file',
    }),
  ],
})
