const basePath = `${__dirname}/node_modules/@brass-raven/core/eslint/eslintrc.cjs`;
const { parserOptions } = require(basePath);

module.exports = {
  extends: [
    basePath
  ],
  parserOptions: {
    ...parserOptions,
    project: [
      './tsconfig.json'
    ]
  },
  root: true
};
