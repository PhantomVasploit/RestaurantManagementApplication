const logger = require('../config/winston.config')

module.exports.errorLogger = (err, req, res, next)=>{
    logger.error(err.message, err)
    res.status(500).json({message: `Internal server error`})
    console.log('Internal server error')
    next()
}