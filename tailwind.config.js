import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#f8f7fc',
        ink: '#15142b',
        muted: '#5b5b72',
        accent: '#5b4fe0',
        'accent-light': '#7c72ea',
        navy: '#12122a',
        'navy-muted': '#9795b5',
        line: '#e7e5f2',
        icon1: '#5b4fe0',
        icon2: '#0ea5e9',
        icon3: '#f0a93a',
        icon4: '#e0526b',
        icon5: '#22b573',
        icon6: '#14b8a6',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 1.2s',
      },
    },
  },
  plugins: [
    typography,
  ],
};
