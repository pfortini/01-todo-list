import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'semi': ['error', 'always'],
      'curly': ['error', 'multi-or-nest'],
      'space-before-function-paren': 'off',
      'eqeqeq': 'off',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'object-curly-newline': ['error', { multiline: true }],
      'no-throw-literal': 'off',
      'new-cap': 'off',
      'comma-dangle': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
      'padded-blocks': ['error', 'never'],
      'no-unused-vars': ['error', { args: 'none' }],
      'key-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': 'error',
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'prefer-const': 'error',
      'quote-props': ['error', 'consistent-as-needed']
    },
  },
)
