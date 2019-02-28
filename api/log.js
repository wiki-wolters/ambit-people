'use strict';

const winston = require('winston');
const { simple } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: simple(),
  transports: [
    new winston.transports.Console(),
  ],
});

global.log = logger;

module.exports = logger;
