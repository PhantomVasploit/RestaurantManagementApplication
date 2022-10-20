const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const winston = require('winston')
require('dotenv').config()

const app = express()
const port = process.env.PORT
require('./config/db.config')

const routes = require('./routes/routes')
const { errorLogger } = require('./middleware/errorLogger')
const logger = require('./config/winston.config')


winston.exceptions.handle(new winston.transports.File({filename: 'Exceptions.log'}))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/payment', routes)
app.use(errorLogger)



const server = app.listen(port, ()=>{
    console.log(`Payment service running on: http://127.0.0.1:${port}`)
    logger.info(`Payment service running on: http://127.0.0.1:${port}`)
})

module.exports = server