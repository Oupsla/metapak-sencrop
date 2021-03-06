'use strict';

const { getMetapakConfig } = require('../utils');

module.exports = packageConf => {
  const { data } = getMetapakConfig(packageConf);

  if (!data.files) {
    throw new Error('E_NO_FILES');
  }

  packageConf.scripts = packageConf.scripts || {};
  packageConf.scripts.lint = 'eslint ' + data.files;
  packageConf.scripts.prettier = 'prettier --write ' + data.files;

  // Add the MUST HAVE dev dependencies
  packageConf.devDependencies = packageConf.devDependencies || {};
  packageConf.devDependencies.eslint = '^5.12.0';
  packageConf.devDependencies.prettier = '^1.15.3';
  packageConf.devDependencies['eslint-plugin-prettier'] = '^3.0.1';
  packageConf.devDependencies['eslint-plugin-import'] = '^2.14.0';

  // Add eslint config
  packageConf.eslintConfig = {
    extends: 'eslint:recommended',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 9,
    },
    env: {
      es6: true,
      node: true,
      jest: true,
      mocha: true,
    },
    plugins: ['prettier', 'import'],
    rules: {
      'prettier/prettier': 'error',
    },
  };

  // Add prettier config
  packageConf.prettier = {
    semi: true,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'all',
    proseWrap: 'always',
  };

  return packageConf;
};
