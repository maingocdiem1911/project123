const newRouter = require('./news');
const homerouter = require('./home');
const coursesrouter = require('./courses');

function route(app) {

    app.use('/news', newRouter);
    app.use('/', homerouter);
    app.use('/courses', coursesrouter);
    
    // Local host ---Hosting
    
    // app.get('/search',  (req, res)  => {
    //   res.render('search');
    // });
    
}
module.exports = route;