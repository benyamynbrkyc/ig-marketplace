module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, trailingComma: 'never' },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
