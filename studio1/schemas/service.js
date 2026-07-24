import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service (What I do)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Icon color',
      type: 'string',
      options: {
        list: [
          { value: 'icon1', title: 'Indigo' },
          { value: 'icon2', title: 'Sky' },
          { value: 'icon3', title: 'Amber' },
          { value: 'icon4', title: 'Rose' },
          { value: 'icon5', title: 'Emerald' },
          { value: 'icon6', title: 'Teal' },
        ],
      },
      initialValue: 'icon1',
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
      subtitle: 'color',
    },
  },
});
