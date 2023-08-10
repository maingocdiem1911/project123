
class CoursesController{
    show(req,res) {
        res.send('COURSES DETAIL');
    }
}
module.exports = new CoursesController();