import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'headerContent',
      title: 'Header Content',
      type: 'text',
    }),
  ],
});
