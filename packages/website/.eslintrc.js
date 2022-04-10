module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'next',
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
