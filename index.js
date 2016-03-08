var express = require("express");
var fs = require("fs");

var router = express.Router();

fs.readdirSync(__dirname).forEach(function(file) {
  if (file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js" || file.substr(0, 1) === "_")
    return;
  return router.use(require("./" + file.substr(0, file.indexOf("."))));
});

module.exports = router;

