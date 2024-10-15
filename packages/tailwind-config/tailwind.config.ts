import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  theme: {
    colors: {
      bg: {
        DEFAULT: '#FFFFFF',
        shade: '#F7F7F7',
        border: '#EFEFEF',
      },
      label: {
        DEFAULT: '#2C2B27',
        muted: '#474747',
        light: '#979797',
        faint: '#C1C1C1',
        secondary: '#FFFFFF',
      },
      control: {
        DEFAULT: '#EFEFEF',
        shade: '#E7E7E7',
        icon: '#CACACA',
        primary: {
          DEFAULT: '#000000',
          muted: '#272727',
          light: '#373737',
        },
      },
      blue: {
        DEFAULT: '#00A3FF',
        muted: '#49B9F8',
      },
      green: {
        DEFAULT: '#08E68C',
        muted: '#5CE6AE',
      },
      red: {
        DEFAULT: '#FC515B',
        muted: '#FF756C',
      },
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.icon-sm': { width: '16px', height: '16px' },
        '.icon-md': { width: '18px', height: '18px' },
        '.icon-lg': { width: '24px', height: '24px' },
      });
    }),
  ],
} satisfies Pick<Config, 'theme' | 'plugins'>;
