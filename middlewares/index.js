var fs = require('fs'),
    path = require('path');

/**
* This is a clever convenience for accessing our middlewares
* In your code, you can just do something like:
*
*     var middlewares = require('./middlewares/index');
*     app.use(middlewares.cors);
*
* Inspired by the way Express/Connect loads middleware.
*/
fs.readdirSync(__dirname).forEach(function(filename) {
  if (filename === 'index.js') { return; }
  var modelName = path.basename(filename, '.js');
  function load(){ return require('./' + modelName); }
  exports.__defineGetter__(modelName, load);
});
