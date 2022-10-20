const winston = require('winston')
require('winston-mongodb')

const logger = winston.createLogger({
    level: 'verbose',
    format: winston.format.json(),
    defaultMeta: {Service: 'payment-service'},
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
        new winston.transports.MongoDB({
            db: process.env.DATABASE_URI_LOGS,
            options: {
                useUnifiedTopology: true
            }
        })
    ]
})

module.exports = logger