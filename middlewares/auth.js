var jwt = require('jsonwebtoken');
var config = require('../config');
var Logger = require('../logger');
var log = Logger.getLogger("API::Auth");

function validate(req, res, next) {
  // check header or url parameters for token
  var token = req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    log.debug("Validate following token: %s", token);

    // verifies secret and checks exp
    return jwt.verify(token, config.get('auth').secret, function(err, claims) {
      if (err) {
        log.debug("Failled to authenticate token with error", error);

        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      }

      // if everything is good, save to request for use in other routes
      log.info("The following token was verified successfully with: %j", claims);
      req.user = claims;
      next();
    });
  }

  log.debug("Token not provided");

  // if there is no token
  // return an error
  return res.status(403).send({
      success: false,
      message: 'No token provided.'
  });
}

module.exports = validate;
