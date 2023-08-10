const express = require('express');
const coursesrouter = express.Router();

const coursesControllers = require('../app/controllers/coursesController');
coursesrouter.get('/create', coursesControllers .create);
coursesrouter.post('/store', coursesControllers .store);
coursesrouter.get('/:slug', coursesControllers .show);
module.exports = coursesrouter;