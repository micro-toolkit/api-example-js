var Logger = require('logger-facade-nodejs'),
    LoggerConsolePlugin = require('logger-facade-console-plugin-nodejs'),
    config = require('../config');

var plugin = new LoggerConsolePlugin(config.get('logging'));
Logger.use(plugin);

module.exports = Logger;
