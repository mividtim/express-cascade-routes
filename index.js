var express = require('express');
var fs = require('fs');

module.exports = function(dirname) {
  var router = express.Router({ mergeParams: true });
  console.log('======');
  console.log(dirname);
  console.log('------');
  fs.readdirSync(dirname).forEach(function(file) {
    console.log(file);
    if(file === 'index.js'
        || file.substr(file.lastIndexOf('.') + 1) !== 'js'
        || file.substr(0, 1) === '_')
      return;
    routeName = '/' + file.substr(0, file.lastIndexOf('.'));
    console.log(routeName);
    subRouter = require(dirname + routeName);
    console.log(JSON.stringify(subRouter.stack[0].route));
    router.use(routeName, subRouter);
    console.log(JSON.stringify(router.stack[0].route));
  });
  return router;
};

