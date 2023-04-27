/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // This is for the Cockroach Labs logo
    'fill-brand-white',
    // This is for the Silo Logo
    'fill-brand-iridescent-blue',
    // This is for the nav link
    'border-brand-iridescent-blue',
    // These are for the logo position
    'top-2',
    'left-2',
    'right-2',
    'bottom-2',
    // These are for the silo themes
    'fill-brand-black',
    'fill-brand-white',
    'fill-brand-electric-purple',
    // This is for the global table
    'bg-depth-3',
    'table-scale-inactive',
    'table-scale-active',
    'table-blur-inactive',
    'table-blur-active'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0788ff',
          indigo: '#6610f2',
          purple: '#6f42c1',
          pink: '#db4891',
          red: '#dc3545',
          orange: '#fd7e14',
          yellow: '#ffc107',
          green: '#37a806',
          teal: '#20c997',
          cyan: '#0dcaf0',
          white: '#fcfcfc',
          gray: '#6e6e6e',
          'gray-dark': '#343a40',
          primary: '#6933ff',
          secondary: '#6e6e6e',
          success: '#37a806',
          info: '#0dcaf0',
          warning: '#ffc107',
          danger: '#dc3545',
          light: '#f8f9fa',
          dark: '#212529',
          black: '#000',
          'electric-purple': '#6933ff',
          'deep-purple': '#190f33',
          'dark-blue': '#0037a5',
          'cloud-blue': '#0788ff',
          'iridescent-blue': '#00fced',
          'gray-f4': '#f4f4f4',
          'neutral-400': '#c0c6d9',
          'bright-turquoise': '#1bf8ec',
          'cerebral-grey': '#ccc',
          'starfleet-blue': '#0496ff',
          'gray-b': '#bebbce',
          'white-smoke': '#f5f5f5',
          'hidden-sapphire': '#475872',
          'narwhal-grey': '#060c12',
          'evening-hush': '#7e89a9',
          'chaos-black': '#101010',
          'not-tonight': '#0b0717',
          'ocean-green': '#033457',
          'ocean-border': '#00538f',
          'neutral-100': '#dee4fa'
        },
        depth: {
          0: '#1e1437',
          1: '#22183b',
          2: '#271d3f',
          3: '#302748'
        }
      },
      fontFamily: {
        anton: 'var(--font-anton)'
      },
      boxShadow: {
        '3xl': '0px 0px 100px 0px rgba(0,0,0,0.75)'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*:not(h1, h2, h3, h4, h5, h6, svg, path)': {
              color: theme('colors.brand.white')
            },
            code: {
              color: `${theme('colors.brand.yellow')}!important`
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            h1: {
              fontFamily: theme('fontFamily.anton'),
              // fontSize: theme('fontSize.6xl')[0],
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple'),
              letterSpacing: '0.6em',
              paddingLeft: '0.6em'
            },
            h2: {
              fontFamily: theme('fontFamily.anton'),
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple'),
              letterSpacing: '0.6em',
              paddingLeft: '0.6em'
            },
            h3: {
              fontFamily: theme('fontFamily.anton'),
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple'),
              letterSpacing: '0.6em',
              paddingLeft: '0.6em'
            },
            h4: {
              fontFamily: theme('fontFamily.anton'),
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple')
            },
            h5: {
              fontFamily: theme('fontFamily.anton'),
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple')
            },
            h6: {
              fontFamily: theme('fontFamily.anton'),
              textTransform: 'uppercase',
              color: theme('colors.brand.electric-purple')
            },
            p: {
              lineHeight: '1.5rem'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
