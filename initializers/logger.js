var Logger = require('logger-facade-nodejs'),
    LoggerConsolePlugin = require('logger-facade-console-plugin-nodejs'),
    config = require('../config');

var loggingConfig = config.get('logging');
if (loggingConfig) {
  var plugin = new LoggerConsolePlugin(loggingConfig);
  Logger.use(plugin);
}

module.exports = Logger;
