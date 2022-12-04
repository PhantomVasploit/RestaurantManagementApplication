const winston = require("winston");

const logger = winston.createLogger({
  level: 'verbose',
  format: winston.format.json(),
  defaultMeta: {service: 'food-menu-service'},
  transports: [
    new winston.transports.File({filename: 'mails.log'})
  ]
});

module.exports = logger;