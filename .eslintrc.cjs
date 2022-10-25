module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: [
    'build'
  ],
  overrides: [
    // Base rules to override as needed in the below groups.
    {
      files: [
        '**/*.cjs',
        '**/*.js',
        '**/*.ts',
        '**/*.tsx'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          'vars': 'all',
          'varsIgnorePattern': '_.*',
          'args': 'all',
          'ignoreRestSiblings': false,
          'argsIgnorePattern': '_.*',
          'destructuredArrayIgnorePattern': '_.*',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '_.*'
        }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
          'before': false,
          'after': true
        }],
        'eol-last': ['error', 'always'],
        'indent': ['error', 2, {
          'SwitchCase': 1
        }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
      }
    },
    // Rules for TS code.
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', {
          'ts-expect-error': false,
          'ts-ignore': false,
          'ts-nocheck': false,
          'ts-check': false
        }],
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        '@typescript-eslint/comma-spacing': ['error', {
          'before': false,
          'after': true
        }],
        // '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': ['error', {
          'assertionStyle': 'as',
          'objectLiteralTypeAssertions': 'never'
        }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': ['error', {
          'allowConciseArrowFunctionExpressionsStartingWithVoid': false,
          'allowDirectConstAssertionInArrowFunctions': false,
          'allowExpressions': false,
          'allowHigherOrderFunctions': false,
          'allowTypedFunctionExpressions': true
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'semi': 'off'
      }
    },
    // Rules for unit tests.
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': ['error', {
          'ts-expect-error': true,
          'ts-ignore': false,
          'ts-nocheck': false,
          'ts-check': false
        }]
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    ecmaVersion: 'latest',
    project: [
      './tsconfig.json'
    ],
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  root: true
};
