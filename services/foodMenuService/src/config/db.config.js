const mongoose = require('mongoose');

const logger = require("./winston.config");

mongoose.connect(process.env.DATABASE_URI);
mongoose.connection.once('open', ()=>{
  logger.info(`Database server connection initiated`);
  console.log(`Database server connection initiated`);
}).on('error', (error)=>{
  logger.error(error.message, error);
  console.log(`Error connecting to database server: ${error.message}`);
})
