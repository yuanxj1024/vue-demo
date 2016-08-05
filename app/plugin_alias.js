var path = require('path');
var containerPath = path.resolve('./');

var alias = {
  tip: path.resolve(containerPath, './app/src/custom_plugins/tip'),
  'vux-components': path.resolve(containerPath, './app/src/plugins/vux/dist/components')
};

console.log('alias = ', alias);

module.exports = alias;
