var path = require('path');
var containerPath = path.resolve('./');

var alias = {
  tip: path.resolve(containerPath, './app/src/custom_plugins/tip'),
  'vux-components': path.resolve(containerPath, './app/src/plugins/vux/dist/components'),
  'vue-router': path.resolve(containerPath, './app/src/plugins/vue-router/dist/vue-router.min.js')
};

console.log('alias = ', alias);

module.exports = alias;
