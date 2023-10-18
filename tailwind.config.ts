import { EColor, EDarkColor, ELightColor } from './src/configs/color.enum';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /text-[a-z]/,
    },
    {
      pattern: /h-[a-z]/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': {
          dark: EDarkColor['primary-text'],
          light: ELightColor['primary-text'],
        },
        'main-bg': {
          dark: EDarkColor['main-bg'],
          light: ELightColor['main-bg'],
        },
        'blue-highlight': EColor['blue-highlight'],
        'main-bg-highlight': {
          dark: EDarkColor['main-bg-highlight'],
          light: ELightColor['main-bg-highlight'],
        },
        'extra-bg-2': {
          dark: EDarkColor['extra-bg-2'],
          light: ELightColor['extra-bg'],
        },
        'extra-bg-column': {
          dark: EDarkColor['extra-bg-column'],
          light: ELightColor['extra-bg'],
        },
        grey: EColor.grey,
        'red-warning': EColor['red-warning'],
      },
    },
  },
  plugins: [],
};
export default config;
