module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
        ],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{next**,next/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@chakra-ui/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
          orderImportKind: 'asc',
        },
        distinctGroup: true,
      },
    ],
  },
}
