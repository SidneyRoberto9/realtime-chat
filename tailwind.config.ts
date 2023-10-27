import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        discord: '#5B6DAE',
        'dark-blue': {
          primary: '#141721',
          second: '#2B2E37',
        },
      },
      backgroundImage: {
        primary:
          'linear-gradient(75deg, rgb(20, 23, 33) 0%, rgb(20, 23, 33) 50%, rgba(20, 23, 33,0.8) 100%);',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
