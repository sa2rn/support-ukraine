const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'next',
    'airbnb-base/rules/best-practices',
    'airbnb-base/rules/errors',
    'airbnb-base/rules/es6',
    'airbnb-base/rules/imports',
    'airbnb-base/rules/node',
    'airbnb-base/rules/style',
    'airbnb-base/rules/variables',
  ],
  settings: {
    next: {
      rootDir: path.resolve(__dirname, './'),
    },
  },
};
