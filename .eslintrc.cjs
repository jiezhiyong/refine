/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['!**/.server', '!**/.client'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
      settings: {
        react: { version: 'detect' },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': { typescript: {} },
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: { extensions: ['.ts', '.tsx'] },
          typescript: { alwaysTryTypes: true },
        },
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
    },
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
