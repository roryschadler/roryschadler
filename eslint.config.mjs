import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/node_modules/**/*']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended'
      )
    ),

    plugins: {
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {
          project: ['tsconfig.json'],
        },
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      eqeqeq: 'error',
      'import/no-unresolved': 'error',

      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },

          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],

      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      strict: 'off',
      'jsx-a11y/no-autofocus': 'off',
    },
  },
  {
    files: ['**/*.spec.{ts,tsx}'],
    ignores: ['cypress/**'],
    plugins: {
      vitest,
    },
  },
]);
