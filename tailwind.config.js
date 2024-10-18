/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif'],
        dmsans: ['DMSans', 'sans-serif'],
        clashGrotesk: ['ClashGrotesk', 'sans-serif'],
        cabinetGrotesk: ['CabinetGrotesk', 'sans-serif'],
        spaceGrotesk: ['SpaceGrotesk', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}