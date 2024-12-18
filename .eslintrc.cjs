/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'markdown'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: ['./tsconfig.eslint.json'] },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/internal-regex': '^~/',
    formComponents: ['Form'],
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
      { name: 'NavLink', linkAttribute: 'to' },
    ],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-props-no-spreading': 'off',
    'global-require': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-require-imports': 'off',
  },
  ignorePatterns: ['node_modules', 'build', 'public', '*.css', '*.scss', '.cache', 'coverage'],
};
