/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            DEFAULT: '#D4AF37', // Metallic Gold
            50: '#FDFBF2',
            100: '#F9F5E0',
            200: '#F2E8BC',
            300: '#EAD995',
            400: '#E1C96D',
            500: '#D4AF37',
            600: '#AA8C2C',
            700: '#806921',
            800: '#554616',
            900: '#2B230B',
          },
          black: '#1C1917', // Warm Black (Stone-900)
          dark: '#0C0A09',  // Deepest Black (Stone-950)
          surface: '#292524', // Stone-800
          accent: '#CE1126', // Ghana Red
          success: '#006B3F', // Ghana Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // For legal text
      }
    },
  },
  plugins: [],
}
