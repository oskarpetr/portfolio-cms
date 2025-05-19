import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const clientType = defineType({
  name: 'client',
  title: 'Clients',
  type: 'document',
  icon: UserIcon,
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
      name: 'projectProposal',
      title: 'Project Proposal',
      type: 'file',
    }),
    defineField({
      name: 'projectOnboarding',
      title: 'Project Onboarding',
      type: 'file',
    }),
    defineField({
      name: 'invoice',
      type: 'file',
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms and Conditions',
      type: 'file',
    }),
  ],
})
