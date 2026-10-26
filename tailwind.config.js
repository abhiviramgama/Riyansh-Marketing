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
          red: '#B52B35',
          'red-hover': '#9F232C',
          'red-light': '#FDF2F2',
          'red-muted': '#E0656D',
          charcoal: '#292A30',
          'charcoal-dark': '#1C1D22',
          'charcoal-light': '#3B3D45',
          stone: '#777777',
          'stone-light': '#A1A1A1',
          'off-white': '#F7F7F5',
          border: '#E8E8E8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'tile': '0 4px 20px -2px rgba(41, 42, 48, 0.08), 0 2px 6px -1px rgba(41, 42, 48, 0.04)',
        'tile-hover': '0 12px 32px -4px rgba(181, 43, 53, 0.12), 0 4px 12px -2px rgba(41, 42, 48, 0.08)',
        'elevated': '0 20px 40px -8px rgba(41, 42, 48, 0.14)',
      }
    },
  },
  plugins: [],
}
