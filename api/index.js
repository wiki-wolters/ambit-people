'use strict';

require('dotenv').config();
require('./log');

var express = require('express');
const router = require('./router');

var app = express();

app.use('/api/v1', router);

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('App listening on port ' + port);
});
