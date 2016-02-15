var fs = require('fs'),
    path = require('path');

/**
* This is a clever convenience for accessing our custom metadata.
* In your app, you can just do something like:
*
*     var metadata = require('./metadata/index');
*     var v1Metadata = metadata.v1;
*
* Inspired by the way Express/Connect loads middleware.
*/
fs.readdirSync(__dirname).forEach(function(filename) {
  if (filename === 'index.js') { return; }
  function load(){ return require('./' + filename + '/index'); }
  exports.__defineGetter__(filename, load);
});
