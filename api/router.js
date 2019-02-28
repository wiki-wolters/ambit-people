'use strict';

var express = require('express');
var router = express.Router();

const { middleware: peopleGet } = require('./controllers/peopleGet');

// get people list
router.get('/people', peopleGet);

module.exports = router;
