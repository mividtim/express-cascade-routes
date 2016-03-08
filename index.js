var express = require('express');
var fs = require('fs');

module.exports = function(dirname) {
  var router = express.Router({ mergeParams: true });
  fs.readdirSync(dirname).forEach(function(file) {
    if(file === 'index.js'
        || file.substr(file.lastIndexOf('.') + 1) !== 'js'
        || file.substr(0, 1) === '_')
      return;
    routeName = file.substr(0, file.indexOf('.'));
    subRouter = require(dirname + '/' + routeName);
    console.log(subRouter);
    router.use('/' + routeName, subRouter);
  });
  return router;
};

