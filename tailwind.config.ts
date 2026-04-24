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
        slate: {
          750: '#293548',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '900' }],
        'h2': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'stat': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)`,
        'grid-pattern-light': `linear-gradient(rgba(10,22,40,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.04) 1px, transparent 1px)`,
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      },
      backgroundSize: {
        'grid': '56px 56px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-up-delay-1': 'fadeUp 0.8s ease 0.1s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.2s forwards',
        'fade-up-delay-3': 'fadeUp 0.8s ease 0.3s forwards',
        'line-grow': 'lineGrow 1.2s ease 0.5s forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;