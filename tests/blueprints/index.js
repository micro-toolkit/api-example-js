var fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    config = require('../../config'),
    util = require('util');

function link(path){
  return util.format('%s/v1%s', config.get('baseUrl'), path);
}

/**
* This is a clever convenience for accessing our test api blueprints.
* In your app, you can just do something like:
*
*     var blueprints = require('./tests/blueprints');
*     blueprints.model
*
* Inspired by the way Express/Connect loads middleware.
*/
fs.readdirSync(__dirname).forEach(function(filename) {
  if (filename === 'index.js') { return; }
  var model = path.basename(filename, '.json');
  function load(){
    var blueprint = _.cloneDeep(require('./' + model));
    blueprint._links = _.inject(blueprint._links, function(memo, value, key){
      // TODO: introcude placeholder replacement on links
      memo[key] = link(value);
      return memo;
    }, {});
    return blueprint;
  }
  exports.__defineGetter__(model, load);
});
