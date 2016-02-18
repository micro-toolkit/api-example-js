var clientHelper = require('./client_helper');
var token = require('./token_generator');
var stub = clientHelper.init();

after(function () {
  clientHelper.restore();
});

module.exports = {
  client: stub,
  token: token
};
