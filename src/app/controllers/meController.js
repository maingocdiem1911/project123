const Courses = require("../models/Courses");
const {mutipleMongooseToObject} = require('../../util/mongoose');


class  MeControllers {

        //[GET] me/stored/courses
    storedCourses (req, res){

    res.render('me/stored-courses');
}


}

module.exports = new MeControllers;
