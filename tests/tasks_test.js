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

describe('Integration: Tasks Endpoints', function(){
  var token, clientStub;

  before(function () {
    token = helper.token();
    clientStub = helper.client;
  });

  describe('GET /v1/tasks', function(){
    afterEach(function(){
      clientStub.list.restore();
    });

    it('return a collection', function(done){
      var stub = sinon.stub().resolves([stubs.task]);
      sinon.stub(clientStub, 'list').returns(stub());

      request(app)
        .get('/v1/tasks?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([blueprints.task])
        .end(done);
    });
  });

  describe('GET /v1/tasks/:id', function(){
    afterEach(function(){
      clientStub.get.restore();
    });

    it('return a model resource', function(done){
      var stub = sinon.stub().resolves(stubs.task);
      sinon.stub(clientStub, 'get')
        .withArgs('1')
        .returns(stub());

      request(app)
        .get('/v1/tasks/1?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(blueprints.task)
        .end(done);
    });
  });

  describe('GET /v1/users/1/tasks', function(){
    afterEach(function(){
      clientStub.list.restore();
    });

    it('return a collection', function(done){
      var stub = sinon.stub().resolves([stubs.task]);
      sinon.stub(clientStub, 'list')
        .withArgs(sinon.match({ userId: '1' }))
        .returns(stub());

      request(app)
        .get('/v1/users/1/tasks?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([blueprints.task])
        .end(done);
    });
  });

});
