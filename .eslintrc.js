module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:i18next/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'no-tabs': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
