var express = require('express');
var fs = require('fs');

module.exports = function(dirname) {
  var router = express.Router({ mergeParams: true });
  fs.readdirSync(dirname).forEach(function(file) {
    try {
      fullPath = dirname + '/' + file;
      var isDir = fs.lstatSync(fullPath).isDirectory();
      if(isDir)
        fullPath += '/' + 'index.js'
      var routeName = '/' + (isDir ? file : file.substr(0, file.lastIndexOf('.')));
      if(!fs.lstatSync(fullPath).isFile()
          || file === 'index.js'
          || !isDir && file.substr(file.lastIndexOf('.') + 1) !== 'js'
          || file.substr(0, 1) === '_')
        return;
    }
    catch(ex) {
      console.log(ex);
      return;
    }
    subRouter = require(fullPath);
    router.use(routeName, subRouter);
  });
  return router;
};
