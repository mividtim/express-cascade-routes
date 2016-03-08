Cascade Express routes in a directory hierarchy

If the current directory has routes to add, as well as subdirectories with
routes, build up your index.js as follows:

    var cascadeRoutes = require('express-cascade-routes');
    var express = require('express');
    var router = express.Router();
    router.post('/', function(req, res) {
        // ...
    });
    router.use(cascadeRoutes(__dirname));
    module.exports = router;

If the current directory has no routes, but needs to cascade routes
contained in subfolders, just place an index.js with the following:

    module.exports = require('express-cascade-routes')(__dirname)

