import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  content: ['index.html', './src/**/*.tsx'],
  presets: [sharedConfig],
} satisfies Pick<Config, 'content' | 'presets'>;
