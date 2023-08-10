const express = require('express');
const merouter = express.Router();

const meControllers = require('../app/controllers/meController');
merouter.get('/stored/courses', meControllers.storedCourses);



module.exports = merouter;