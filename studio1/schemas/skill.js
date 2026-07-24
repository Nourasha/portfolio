import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { value: 'Frontend', title: 'Frontend' },
          { value: 'Language', title: 'Language' },
          { value: 'ORM', title: 'ORM' },
          { value: 'Database', title: 'Database' },
          { value: 'Styling', title: 'Styling' },
          { value: 'CMS', title: 'CMS' },
          { value: 'Backend', title: 'Backend' },
          { value: 'Version control', title: 'Version control' },
          { value: 'Deployment', title: 'Deployment' },
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'Lowercase icon key — must match an entry in src/lib/skillIcons.js (e.g. react, typescript, nodejs, html). Ask for a new one to be added if it\'s missing.',
      type: 'string',
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
      title: 'name',
      subtitle: 'category',
    },
  },
});
