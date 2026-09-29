/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1A0C04',
        mahogany: '#3D1F0A',
        sienna: '#7A3B10',
        amber: '#C4712A',
        golden: '#E09A50',
        sand: '#D4B88A',
        parchment: '#F2E0C0',
        terracotta: '#C4412A',
        rose: '#D4845C',
        umber: '#8A6040',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Courier Prime"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
