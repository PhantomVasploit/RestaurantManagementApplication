const mongoose = require('mongoose')

const logger = require('./winston.config')

mongoose.connect(process.env.DATABASE_URI)

mongoose.connection.once('open', ()=>{
    logger.info('Database server connected')
    console.log('Database server connected')
}).on('error', (error)=>{
    logger.error(error.message, error)
    console.log(`Error connecting tot the database server: ${error.message}`)
})