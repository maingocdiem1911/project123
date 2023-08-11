const Courses = require("../models/Courses");
const {mutipleMongooseToObject} = require('../../util/mongoose');


class  MeControllers {

        //[GET] me/stored/courses
    storedCourses (req, res,next){
        Courses.find({})
            .then(courses => res.render('me/stored-courses',{
                courses:mutipleMongooseToObject(courses)
                
            }))
            .catch(next);
   
}    
       //[GET] me/trash/courses
    trashCourses (req,res,next){
        Courses.findDeleted({})
        .then(courses => res.render('me/trash-courses',{
            courses:mutipleMongooseToObject(courses)
            
        }))
        .catch(next);

    }

}

module.exports = new MeControllers;
