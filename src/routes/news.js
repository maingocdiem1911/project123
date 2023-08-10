const express = require('express');
const newRouter = express.Router();

const newController = require('../app/controllers/newsController');
newRouter .get('/search', newController.search);
newRouter .get('/:slug', newController.show);
newRouter .get('/', newController.index);



module.exports = newRouter ;