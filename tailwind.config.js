/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        desa: {
          dark: '#0B0F19', // Deep dark blue-black
          gray: '#1F2937',
          gold: '#D4AF37', // Metallic Gold
          accent: '#10B981', // Emerald Green for interactions
        },
      },
    },
  },
  plugins: [],

}
