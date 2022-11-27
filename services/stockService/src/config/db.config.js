const mongoose = require('mongoose')

const logger = require('./winston.config')

mongoose.connect(process.env.DATABASE_URI)
mongoose.connection.once('open', ()=>{
    logger.info('Database server connected successfully')
    console.log('Database server connected successfully')
}).on('error', (error)=>{
    throw error
})