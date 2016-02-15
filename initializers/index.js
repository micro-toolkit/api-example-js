var fs = require('fs'),
    path = require('path');

/**
* This is a clever convenience for loading all initializers placed in this directory.
*/
function load(){
  fs.readdirSync(__dirname).forEach(function(filename) {
    if (filename === 'index.js') { return; }
    var modelName = path.basename(filename, '.js');
    require('./' + modelName);
  });
}

module.exports = load;
