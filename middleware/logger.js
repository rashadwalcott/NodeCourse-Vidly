const { createLogger, transports } = require('winston');
require('winston-mongodb');

(module.exports = createLogger({
  transports: new transports.File({
    filename: 'logfile.log',
  }),
})),
  new transports.MongoDB({
    db: 'mongodb://localhost:27017/vidly',
    level: 'error',
  });
