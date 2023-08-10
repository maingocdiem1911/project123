//news control
class NewController {

    // [GET] news
    index (req, res) {
        res.render('search');
    }
   
}
module.exports = new NewController;
//home control
class homeControllers {

    index (req, res){

        res.render('home');
    }
    search (req, res){

        res.render('search');
    }
   show (req, res){

        res.render('show');
    }
    
}
module.exports = new homeControllers;