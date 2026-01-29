import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#1e3a6a',
          700: '#162d54',
          800: '#0f2140',
          900: '#0a1628',
        },
        gold: {
          300: '#e0c36d',
          400: '#d4b14a',
          500: '#c9a227',
        },
        cream: {
          100: '#faf8f5',
          200: '#f5f0e8',
        },
      },
      fontFamily: {
        display: ['Libre Baskerville', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config