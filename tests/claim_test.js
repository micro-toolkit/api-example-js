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

describe('Integration: Claim Endpoints', function(){
  var token, clientStub;

  before(function () {
    token = helper.token();
    clientStub = helper.client;
  });

  describe('GET /v1/admin/claims', function(){
    afterEach(function(){
      clientStub.list.restore();
    });

    it('return a model collection', function(done){
      var stub = sinon.stub().resolves([stubs.claim]);
      sinon.stub(clientStub, 'list').returns(stub());

      request(app)
        .get('/v1/admin/claims?token=' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect([blueprints.claim])
        .end(done);
    });
  });
});
