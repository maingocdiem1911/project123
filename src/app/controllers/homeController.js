//home control

const Courses = require("../models/Courses");
const {mutipleMongooseToObject} = require('../../util/mongoose');
//const Course = require('../models/Courses');
class HomeControllers {

        index(req,res, next) {
            Courses.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
        }





    // index (req, res) {

    //     Course.find({}, function (err, courses){
    //         if (!err) {
    //             res.json(courses);
    //         }
    //         else{
    //             res.status(400).json({error: 'ERROR!!!'});
    //         }


    //     }
    // )}
}
module.exports = new HomeControllers;