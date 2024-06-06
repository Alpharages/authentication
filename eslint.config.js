import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import typescript from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescript,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettier,
      import: importPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
        },
      ],
      'arrow-parens': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      complexity: ['error', 10],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          offsetTernaryExpressions: true,
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],
      'comma-dangle': ['error', 'always-multiline'],
      'no-await-in-loop': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prefer-promise-reject-errors': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      camelcase: [
        'error',
        {
          properties: 'never',
        },
      ],
      'no-extra-parens': 'error',
      'no-const-assign': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-inner-declarations': ['error', 'both'],
      'no-unsafe-optional-chaining': 'error',
      'no-unused-vars': 'error',
      'no-unused-private-class-members': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'func-style': ['error', 'expression'],
      'no-console': 'error',
      'no-confusing-arrow': 'error',
      'no-delete-var': 'error',
      'no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],
      'no-inline-comments': 'error',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
];
