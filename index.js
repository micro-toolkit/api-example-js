// load initializers
require('./initializers/index')();

var express = require('express'),
    morgan = require('morgan'),
    config = require('./config'),
    app = express(),
    middlewares = require('./middlewares/index')
    Logger = require('./logger'),
    log = Logger.getLogger("API"),
    microApiGenerator = require('micro-toolkit-api-generators');

log.info('Loading API...');

// first load api semantic and then read meatadata
var router = require('./routes');

var isTest = process.env.NODE_ENV == 'test';

// configure logging middleware
if (!isTest) {
  app.use(morgan('dev'));
}

// Allow CORS to be used by any client
app.use(middlewares.cors);

// configure application routes
app.use(router);

// configure micro api routes
var metadata = require('./metadata/index');
var microConfig = { metadata: metadata, runtimeConfig: config.getProperties() };
var microApi = microApiGenerator(microConfig);
app.use(microApi);

// hook application into the specified port
app.listen(config.get('port'));

log.info('Server running on port %d', config.get('port'));

module.exports = app;
