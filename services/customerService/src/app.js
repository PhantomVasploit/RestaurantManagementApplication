const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const winston = require('winston');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

winston.exceptions.handle(new winston.transports.File({filename: 'Exceptions.log'}));
process.on('unhandledRejection', (ex)=>{
  throw ex;
});

const app = express();
const port = process.env.PORT || 5001;
const {errorLogging} = require('./middleware/errorLogging');
require('./config/db.config');
const routes = require('./routes/routes');
const logger = require('./config/winston.config');
const swaggerDoc = require('../swagger.json');

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/customer', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(errorLogging);


const server = app.listen(port, ()=>{
  logger.info(`Customer service running on: http://127.0.0.1:${port}`);
  console.log(`Customer service running on: http://127.0.0.1:${port}`);
});

module.exports = server;
