/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ora-maroon': '#7A1C39', // Exact button/brand color from image
        'ora-plum': '#531324',   // Exact Footer & CTA background color
        'ora-cream': '#FAF9F6',  // Hero background
        'ora-gray-bg': '#F3F4F6',// Alternative section background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // Professional academic serif
      }
    },
  },
  plugins: [],
}