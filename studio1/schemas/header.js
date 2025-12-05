
export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'headerContent',
      title: 'Header Content',
      type: 'text',

    }
  ]

}