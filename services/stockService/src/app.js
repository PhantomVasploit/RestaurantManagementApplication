const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const winston = require('winston')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT
require('./config/db.config')
const routes = require('./routes/routes')
const logger = require('./config/winston.config')
const { errorLogger } = require('./middleware/errorLogger')

winston.exceptions.handle(new winston.transports.File({filename: 'exceptions.log'}))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/stock', routes)
app.use(errorLogger)

const server = app.listen(port, ()=>{
    console.log(`Stock service running on:http://127.0.0.1:${port}`)
    logger.info(`Stock service running on:http://127.0.0.1${port}`)
})

module.exports = server