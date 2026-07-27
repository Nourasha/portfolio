import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'credential',
  title: 'Credential (Education & Certifications)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'e.g. "Master\'s in Cybersecurity — Governance, Risk & Compliance" or "ISO 27001 Foundation"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { value: 'degree', title: 'Degree' },
          { value: 'certification', title: 'Certification' },
        ],
      },
      initialValue: 'degree',
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      description: 'University or certification body',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period',
      description: 'e.g. "2024 – Expected 2026" or "Completed 2023"',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Focus areas / what it covers',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description: 'Lower numbers appear first',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'institution',
    },
  },
});
