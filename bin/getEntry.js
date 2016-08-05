var path = require('path');
var glob = require('glob');


function getEntry(sourcePath) {
  var entrys = {};
  var basename;
  sourcePath = sourcePath || './app/src/*/*.js';
  glob.sync(sourcePath).forEach(function (entry) {
    if (!/\/_\/|\/plugins\/|\/custom_plugins\//g.test(entry)) {
      var basename = entry.replace('./app/src/', '');
      basename = basename.substr(0, basename.lastIndexOf('.'));
      entrys[basename] = entry;
    }
  });
  return entrys;
}

// var result = getEntry();
// console.log(result);

module.exports = getEntry;
