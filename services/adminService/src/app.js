const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const winston = require('winston');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const swaggerJSDocs = require('../swagger.json');
require('./config/db.config');
const logger= require('./config/winston.config');
const routes = require('./routes/routes');
const { errorLogging } = require('./middleware/errorLogging');

winston.exceptions.handle(new winston.transports.File({filename: 'Exceptions.log'}));
process.on('unhandledRejection', (ex)=>{
  throw ex;
});

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/admin', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
app.use(errorLogging);


const server = app.listen(port, ()=>{
    logger.info(`Administrator service running on http://127.0.0.1:${port}`);
    console.log(`Administrator service running on http://127.0.0.1:${port}`);
})

module.exports = server;
