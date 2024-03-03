import { Config } from 'tailwindcss';

import { CustomClassesPlugin } from './src/styles/themes/plugins';

const tailwindConfig: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          bg: '#FFFFFF',
          font: '#04285C',
        },

        secondary: {
          bg: '#006AA4',
          accent: '#86AADE',
          font: '#FFF',
        },
      },
    },
  },
  plugins: [CustomClassesPlugin()],
};

export default tailwindConfig;
