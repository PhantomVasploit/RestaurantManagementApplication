const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
require('./config/db.config');
const logger= require('./config/winston.config');

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));


app.listen(port, ()=>{
    logger.info(`Administrator service running on http://127.0.0.1:${port}`);
    console.log(`Administrator service running on http://127.0.0.1:${port}`);
})