const express = require('express');
const winston = require('winston');
const app = express();

require('express-async-errors');
require('./startup/logger')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});
