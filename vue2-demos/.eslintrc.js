module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 0,
    'semi': 0,
    'comma-dangle': 0,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'indent': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    'camelcase': 0,
    'space-before-function-paren': 0,
    'dot-notation': 0
  }
}
