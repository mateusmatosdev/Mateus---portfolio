/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F1E4',
        surface: '#FFFFFF',
        ink: '#1C2333',
        muted: '#6B6558',
        brand: '#2454E0',
        brandDark: '#1E46C4',
        brandSoft: '#DCE6FF',
        line: '#E4DBC8',
      },
      fontFamily: {
        display: ['"Special Elite"', 'monospace'],
        sans: ['"Special Elite"', 'monospace'],
      },
    },
  },
  plugins: [],
}
