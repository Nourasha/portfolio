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
      name: 'icon',
      title: 'Icon',
      description:
        'Each option maps to an entry in src/lib/skillIcons.js. To add a new one, the key must be added there first — otherwise the skill renders without an icon.',
      type: 'string',
      options: {
        list: [
          { value: 'html', title: 'HTML' },
          { value: 'css', title: 'CSS' },
          { value: 'javascript', title: 'JavaScript' },
          { value: 'typescript', title: 'TypeScript' },
          { value: 'react', title: 'React' },
          { value: 'nextjs', title: 'Next.js' },
          { value: 'tailwind', title: 'Tailwind CSS' },
          { value: 'nodejs', title: 'Node.js' },
          { value: 'prisma', title: 'Prisma' },
          { value: 'sql', title: 'SQL / database' },
          { value: 'sanity', title: 'Sanity' },
          { value: 'git', title: 'Git' },
          { value: 'api', title: 'API / networking' },
        ],
      },
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
