'use strict';

module.exports = (packageConf) => {
  const metapakData = packageConf.metapak && packageConf.metapak.data ?
    packageConf.metapak.data :
    {};

  // Adding documentation generation script
  packageConf.scripts = packageConf.scripts || {};
  packageConf.scripts.doc = 'mkdir -p .readme;' +
    ' echo "# API" > .readme/API.md;' +
    ' jsdoc2md ' + metapakData.files + ' >> .readme/API.md';

  // Add doc deps
  packageConf.devDependencies = packageConf.devDependencies || {};
  packageConf.devDependencies['jsdoc-to-markdown'] = '^3.0.0';

  return packageConf;
};
