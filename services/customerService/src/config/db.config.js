const mongoose = require('mongoose');

const logger = require('./winston.config');

mongoose.connect(process.env.DATABASE_URI, {useunifiedTopology: true});

mongoose.connection.once('open', ()=>{
  console.log(`Database server connected successfully`);
  logger.info(`Database server connected successfully`)
}).on('error', (error)=>{
  logger.error(error.message, error);
  console.log(`Error connecting to the database server: ${error.message}`);
})
