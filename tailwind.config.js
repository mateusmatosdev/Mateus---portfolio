/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
        brandDark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
        brandSoft: 'rgb(var(--color-brand-soft) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Special Elite"', 'monospace'],
        sans: ['"Special Elite"', 'monospace'],
      },
    },
  },
  plugins: [],
}
