/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#F1F5F9',
          700: '#122E4D',
          800: '#0D2A47',
          900: '#0A2540',
          950: '#061729',
        },
        emerald: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        ink: {
          muted: '#475569',
          soft: '#64748B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(10, 37, 64, 0.04), 0 8px 24px -8px rgba(10, 37, 64, 0.12)',
        soft: '0 1px 2px 0 rgba(10, 37, 64, 0.05), 0 4px 16px -4px rgba(10, 37, 64, 0.08)',
        float: '0 10px 40px -12px rgba(10, 37, 64, 0.22)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
