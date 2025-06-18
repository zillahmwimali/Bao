import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // ✅ 1. Separate the `ignores` block
  {
    ignores: [
      'node_modules',
      'public',
      'dist',
      'build',
      '**/vite-dev/**',
      'vendor/**',
      '**/vendor/**',
      '**/.vitepress/**',
      '**/*.d.ts',
      '**/*.min.js',
      '**/docs/.vitepress/**',
      '**/vendor/bundle/**',
    ],
  },

  // ✅ 2. Base JS recommended rules
  js.configs.recommended,

  // ✅ 3. TypeScript + React
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: true,
        console: true,
        document: true,
        navigator: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'no-prototype-builtins': 'off',
      'no-empty': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/vite.config.{js,ts}',
            '**/*.test.{js,ts,jsx,tsx}',
            '**/*.spec.{js,ts,jsx,tsx}',
            'eslint.config.js',
          ],
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // ✅ 4. JavaScript + React
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: true,
        console: true,
        document: true,
        navigator: true,
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'no-prototype-builtins': 'off',
      'no-empty': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // ✅ 5. Node-style config files (like Vite config)
  {
    files: ['vite.config.{js,ts}'],
    languageOptions: {
      globals: {
        __dirname: true,
        module: true,
        require: true,
        process: true,
      },
    },
  },
];
