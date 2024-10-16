module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
      // 'offwhite': '#e0e1dd'
    // },
  },
  corePlugins: {preflight:false,},
  plugins: [require('@tailwindcss/typography'),],
}
