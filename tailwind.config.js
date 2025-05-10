/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f7f2',
          100: '#e8ece3',
          200: '#d1dac8',
          300: '#b3c1a2',
          400: '#94a77e',
          500: '#798d62',
          600: '#5f7049', // olive green
          700: '#4a5839',
          800: '#3f4932',
          900: '#363e2d',
          950: '#1c2118',
        },
        beige: {
          50: '#fcf9f5',
          100: '#f7f1e8',
          200: '#f0e3d1',
          300: '#e6cea9',
          400: '#dab57d', // sand beige
          500: '#d09c58',
          600: '#c38440',
          700: '#a26832',
          800: '#85532d',
          900: '#6e4628',
          950: '#3c2412',
        },
        success: {
          50: '#eefbf3',
          100: '#d7f4e2',
          200: '#b0e9c7',
          300: '#7cd8a5',
          400: '#48be7d',
          500: '#2da162', // success green
          600: '#1e8950',
          700: '#1b6d42',
          800: '#1a5737',
          900: '#17472f',
          950: '#08281b',
        },
        warning: {
          50: '#fff9ed',
          100: '#ffefd2',
          200: '#ffdca4',
          300: '#ffc16b',
          400: '#ff9d33', // warning orange
          500: '#ff7e0d',
          600: '#f45e00',
          700: '#c94104',
          800: '#9f3a0b',
          900: '#81300d',
          950: '#461701',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // error red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};