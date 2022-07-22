const logger = require('../config/winston.config');

module.exports.errorLogging = (err, req, res, next)=>{
  logger.error(err.message, err);
  console.log(`Internal server error: ${err.message}`);
  res.status(500).json({message: `Internal server error: ${err.message}`});
}
