const mongoose = require('mongoose')

const logger = require('./winston.config')

mongoose.connect(process.env.DATABASE_URI)
mongoose.connection.once('open', ()=>{
    console.log('Database server connected successfully')
    logger.info('Database server connected successfully')
}).on('error', (error)=>{
    console.log(`Error connecting to the database server`)
    throw error
})