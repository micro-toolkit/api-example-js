var helper = require('./support/helper'),
    request = require('supertest'),
    chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    stubs = require('./stubs/index'),
    blueprints = require('./blueprints/index'),
    app = require('../index');

chai.should();
chai.use(sinonChai);

describe('Integration: User Endpoints', function(){
  var token, clientStub;

  before(function () {
    token = helper.token();
    clientStub = helper.client;
  });

  describe('GET /v1/users/:id', function () {
    afterEach(function () {
      clientStub.get.restore();
    });

    it('return a model resource', function (done) {
      var stub = sinon.stub().resolves(stubs.user);
      sinon.stub(clientStub, 'get')
        .withArgs('pjanuario')
        .returns(stub());

      request(app)
        .get('/v1/users/pjanuario?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(blueprints.user)
        .end(done);
    });
  });
});
