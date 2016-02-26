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

describe('Integration: Roles Endpoints', function(){
  var token, clientStub;

  before(function () {
    token = helper.token();
    clientStub = helper.client;
  });

  describe('GET /v1/users/:userId/roles', function(){
    afterEach(function(){
      clientStub.list.restore();
    });

    it('should return a collection of models', function(done){
      var stub = sinon.stub().resolves([stubs.role]);
      sinon.stub(clientStub, 'list')
        .withArgs(sinon.match({userId:'pjanuario'}))
        .returns(stub());

      request(app)
        .get('/v1/users/pjanuario/roles?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([blueprints.role])
        .end(done);
    });
  });

  describe('GET /v1/users/:userId/roles/:id', function(){
    afterEach(function(){
      clientStub.get.restore();
    });

    it('return a model resource', function(done){
      var stub = sinon.stub().resolves(stubs.role);
      sinon.stub(clientStub, 'get')
        .withArgs({userId:'pjanuario', id: '1'})
        .returns(stub());

      request(app)
        .get('/v1/users/pjanuario/roles/1?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(blueprints.role)
        .end(done);
    });
  });

});
