import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#152038',
          800: '#0F1D32',
          900: '#0A1628',
          950: '#060E1A',
        },
        gold: {
          300: '#E8D07A',
          400: '#D4B44A',
          500: '#C9A227',
          600: '#A8861F',
        },
        cream: {
          50: '#FDFCF9',
          100: '#F7F5F0',
          200: '#EDEAE2',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)`,
        'grid-pattern-light': `linear-gradient(rgba(10,22,40,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '56px 56px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-up-1': 'fadeUp 0.7s ease 0.1s forwards',
        'fade-up-2': 'fadeUp 0.7s ease 0.2s forwards',
        'fade-up-3': 'fadeUp 0.7s ease 0.3s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;