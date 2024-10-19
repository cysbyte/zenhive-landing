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
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
        },
        '.hide-scrollbar': {
          /* For most modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        }
      });
    }
  ],
}