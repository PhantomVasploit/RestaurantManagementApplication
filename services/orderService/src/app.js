const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const winston = require('winston')
require('dotenv').config()

winston.exceptions.handle(new winston.transports.File({ filename: 'Exceptions.log' }))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

const app = express()
const port = process.env.PORT || 5004
require('./config/db.config')
const {errorLogger} = require('./middleware/errorLogging')
const routes = require('./routes/routes')

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/orders' ,routes)
app.use(errorLogger)

const server = app.listen(port, ()=>{
    console.log(`Order service running on: http://127.0.0.1:${port}`)
})

module.exports = server