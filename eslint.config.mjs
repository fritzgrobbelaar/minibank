import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin, // Add Prettier plugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // Ban explicit 'any'
      'prettier/prettier': 'error', // Enable Prettier as an ESLint rule
      // Disable conflicting ESLint rules (handled by Prettier)
      indent: 'off', // Let Prettier handle indentation
      quotes: 'off',
      semi: 'off',
    },
  },
  eslintConfigPrettier, // Disable ESLint rules that conflict with Prettier
];
