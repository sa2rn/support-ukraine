module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { mjs: 'always' }],
    'no-underscore-dangle': 'off',
  },
};
