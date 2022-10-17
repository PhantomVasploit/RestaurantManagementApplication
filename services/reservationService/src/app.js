const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const winston = require('winston')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const routes = require('./routes/routes')
const logger = require('./config/winston.config')
const { errorLogging } = require('./middleware/errorLogger')
require('./config/db.config')

winston.exceptions.handle(new winston.transports.File({filename: 'Exceptions.log'}))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/reservations', routes)
app.use(errorLogging)

const server = app.listen(port, ()=>{
    console.log(`Reservation service running on: http://127.0.0.1:${port}`)
    logger.info(`Reservation service running on: http://127.0.0.1:${port}`)
})

module.exports = server