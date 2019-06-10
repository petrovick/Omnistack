/*
const { override } = require('react-app-rewired');
module.exports = override()
*/
const { injectBabelPlugin } = require('react-app-rewired');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

module.exports = config => injectBabelPlugin(rootImport, config);
