const newRouter = require('./news');
const homerouter = require('./home');
const coursesrouter = require('./courses');
const meRouter = require('./me');

function route(app) {

    app.use('/news', newRouter);
    app.use('/', homerouter);
    app.use('/courses', coursesrouter);
    app.use('/me', meRouter);
    app.use('/home', homerouter);
    // Local host ---Hosting
    
    // app.get('/search',  (req, res)  => {
    //   res.render('search');
    // });
    
}
module.exports = route;