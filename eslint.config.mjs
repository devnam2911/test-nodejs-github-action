// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'guilde'],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
);
