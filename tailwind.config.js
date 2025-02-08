/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#CAE6FF',
          DEFAULT: '#54A7ED',
          dark: '#2480F0',
        },
        secondary: {
          light: '#D1ECE3',
          DEFAULT: '#00B698',
          dark: '#0F7C67',
        },
        navy: {
          DEFAULT: '#20344B',
          dark: '#165185',
        },
        forest: {
          DEFAULT: '#1A3E38',
          dark: '#0F7C67',
        },
        accent: {
          teal: '#00DBA2',
          gold: '#E4C472',
        },
        dark: '#202124',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}