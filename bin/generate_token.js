// generate a token example valid for 24 hours
var jwt = require('jsonwebtoken');
var claims = {
  sub: 'users/1',
  iss: 'http://app.com',
  scope: 'me,admin',
  userId: '1',
  tenantId: '1'
};
var token = jwt.sign(claims, 'secret', {
  // expires in 24 hours
  expiresIn: 24*60*60
});

console.log("API Token (valid for 24 hours)\n%s", token);
