// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from 'prettier';
import 'prettier-plugin-tailwindcss';

const config: Config = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'none',
  semi: true,
  singleQuote: true
};

export default config;
