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

describe('Integration: Me Endpoints', function(){
  var token, clientStub;

  before(function () {
    token = helper.token();
    clientStub = helper.client;
  });

  describe('GET /v1/me', function () {
    afterEach(function () {
      clientStub.get.restore();
    });

    it('return a model resource', function (done) {
      sinon.stub(clientStub, 'get')
        .withArgs({id:'pjanuario'})
        .resolves(stubs.user);

      request(app)
        .get('/v1/me?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(blueprints.me)
        .end(done);
    });
  });
});
