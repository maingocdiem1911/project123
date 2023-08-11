//news control
class NewController {

    // [GET] news
    index (req, res) {
        res.render('search');
    }
    search (req, res){

        res.render('search');
    }
   show (req, res){

        res.render('show');
    }
    
}
module.exports = new NewController;
//home control
// class homeControllers {

//     index (req, res){

//         res.render('home');
//     }
    
//}
//module.exports = new homeControllers;