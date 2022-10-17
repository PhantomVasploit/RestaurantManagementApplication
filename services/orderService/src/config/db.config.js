const mongoose = require('mongoose')

const logger = require('./winston.config')

mongoose.connect(process.env.DATABASE_URI)

mongoose.connection.once('open', ()=>{
    console.log(`Database server connected sucessfully`)
    logger.info(`Database server connected sucessfully`)
}).on('error', (error)=>{
    console.log(`Error connecting to the database server: ${error.message}`)
    logger.info(`Error connecting to the database server: ${error.message}`)
})