module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier', // Turn off eslint rules that conflict with prettier
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
