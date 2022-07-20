const mongoose = require('mongoose');

const logger = require('./winston.config'); 

mongoose.connect(process.env.DATABASE_URI);

mongoose.connection.once('open', ()=>{
    logger.info(`Database server connected succefully`);
    console.log(`Database server connected succefully`);
}).on('error', (error)=>{
    logger.error(error.message, error);
    console.log(`Error connecting to the database server: ${error.message}`);
})