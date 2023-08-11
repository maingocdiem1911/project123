const express = require('express');
const coursesrouter = express.Router();

const coursesControllers = require('../app/controllers/coursesController');
coursesrouter.get('/create', coursesControllers .create);
coursesrouter.post('/store', coursesControllers .store);
coursesrouter.get('/:slug', coursesControllers .show);
coursesrouter.get('/:id/edit', coursesControllers .edit);
coursesrouter.put('/:id', coursesControllers .update);
coursesrouter.delete('/:id', coursesControllers .delete);
coursesrouter.patch('/:id/restore', coursesControllers .restore);

module.exports = coursesrouter;