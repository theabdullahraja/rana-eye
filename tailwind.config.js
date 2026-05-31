/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm:    '480px',
      md:    '768px',
      lg:    '1024px',
      xl:    '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0198CD',
          light:   '#33B5E5',
          dim:     'rgba(1,152,205,0.12)',
          muted:   'rgba(1,152,205,0.05)',
          dark:    '#0179A8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          2:       '#F4F8FB',
          3:       '#EBF3F8',
        },
        ink: {
          DEFAULT: '#0B2233',
          muted:   '#4E6A7A',
          label:   '#7A9BB0',
          dim:     '#A8BDC9',
        },
        border: {
          DEFAULT: 'rgba(1,152,205,0.12)',
          strong:  'rgba(1,152,205,0.25)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        xl:   '24px',
        '2xl':'32px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 3px rgba(0,0,0,0.06)',
        sm: '0 2px 8px rgba(0,0,0,0.08)',
        md: '0 4px 16px rgba(0,0,0,0.10)',
        lg: '0 8px 30px rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
};

