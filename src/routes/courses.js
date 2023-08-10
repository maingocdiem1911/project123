const express = require('express');
const coursesrouter = express.Router();

const coursesControllers = require('../app/controllers/coursesController');
coursesrouter.get('/:slug', coursesControllers .show);
module.exports = coursesrouter;