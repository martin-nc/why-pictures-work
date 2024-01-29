import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './articles/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      'magenta': '#C93096',
      teal: colors.teal,
      zinc: colors.zinc,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            body: {
              color:'#222',
            },
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontWeight: '600',
              marginTop: '1em',
            },
            h2: {
              marginTop: '1.5em',
              marginBottom: '0.7em',
              fontWeight: '600',
            },
            figcaption: {
              color: '#222',
            },
            'li::marker': {
              color: '#222',
            }
          },
        },
      },
    },
  },
  plugins: [
     require('@tailwindcss/typography')
  ],
}
export default config
