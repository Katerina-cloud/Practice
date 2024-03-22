module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    useJSXTextNode: true,
    tsconfigRootDir: '.',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'unused-imports',
    'simple-import-sort',
    'jsx-helpers',
    'enforce-destruction-limits',
  ],
  extends: [
    'airbnb',
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['**/__generated__/*.ts'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    complexity: ['error', 8],
    'import/order': 'off',
    'import/no-unresolved': 2,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-bind': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['jest.setup.*', '**/*.test.tsx', '**/*.test.ts', 'storybook/**'],
      },
    ],
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '_', varsIgnorePattern: '_' },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
          Function: false,
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
    'class-methods-use-this': 0,
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-nocheck': 'allow-with-description' }],
    'import/no-cycle': 0,
    'no-shadow': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-shadow': ['error'],
    'no-restricted-imports': [1],
    'enforce-destruction-limits/enforce-destruction-limits': [
      'error',
      { patterns: ['theme.components'] },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  overrides: [
    {
      files: ['*.style.ts', '*.styles.ts'],
    },
    {
      files: ['src/brands/**'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['..*', '.*'],
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx', 'App.ts', 'index.js', 'translationManager.ts'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['src/**/*'],
      excludedFiles: ['src/**/*.test.*'],
      rules: {
        'jsx-helpers/jsx-enforce-attribute': [
          'error',
          {
            attributeName: 'testID',
            elementMatchers: [
              'Pressable',
              'Touchable*',
              '^(Base)?Button$',
              'CheckBox',
              'Switch',
              '^Text$',
              'TextInput',
              '^(Fast)?Image$',
              'Icon',
            ],
          },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/prefer-find-by': 'off',
        'testing-library/prefer-presence-queries': 'off',
        'testing-library/prefer-query-by-disappearance': 'off',
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/render-result-naming-convention': 'off',
      },
    },
  ],
};
