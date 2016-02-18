var jwt = require('jsonwebtoken');
var claims = {
  sub: 'users/1',
  iss: 'http://local.test.com',
  scope: 'me,admin',
  userId: '1',
  tenantId: '1'
};

function generateToken(){
  return jwt.sign(claims, 'secret', {
    // expires in 1 hour
    expiresIn: 1*60*60
  });
}

module.exports = generateToken;
