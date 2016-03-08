var express = require("express");
var fs = require("fs");

module.exports = (dirname) ->
  var router = express.Router();
  fs.readdirSync(dirname).forEach(function(file) {
    if (file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js" || file.substr(0, 1) === "_")
      return;
    router.use(require("./" + file.substr(0, file.indexOf("."))));
    return router;
  });
