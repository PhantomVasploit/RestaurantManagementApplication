const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const winston = require('winston');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5003;
const logger = require('./config/winston.config');
require("./config/db.config");
const { errorLogging } = require('./middleware/errorLogging');
const routes = require('./routes/routes');

winston.exceptions.handle(new winston.transports.File({filename: 'Exception.log'}));
process.on('unhandledRejection', (ex)=>{
  throw ex;
});

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/menu', routes);
app.use(errorLogging);

const server = app.listen(port, ()=>{
  logger.info(`Food Menu Service running on: http://127.0.0.1:${port}`);
  console.log(`Food Menu Service running on: http://127.0.0.1:${port}`);
});

module.exports = server;
