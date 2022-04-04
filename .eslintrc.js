module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { mjs: 'always' }],
    'class-methods-use-this': ['warn'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsdoc/require-property-description': ['off'],
    'jsdoc/require-param-description': ['off'],
    'jsdoc/require-returns-description': ['off'],
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
