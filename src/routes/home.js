const express = require('express');
const homerouter = express.Router();

const homeControllers = require('../app/controllers/homeController');
homerouter.get('/', homeControllers.index);



module.exports = homerouter;