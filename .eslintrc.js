module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    strict: 0,
    'react/prop-types': 1,
    'no-unused-vars': 1,
  },
}
