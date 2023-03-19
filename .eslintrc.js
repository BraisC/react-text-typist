module.exports = {
  extends: '@braisc',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
    'react/function-component-definition': [0],
    '@typescript-eslint/comma-dangle': 0,
  },
};
