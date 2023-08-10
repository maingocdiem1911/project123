//news control
class NewController {
  // [GET] news
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send("hôm nay là thứ 4");
  }
  search(req, res) {
    res.send("tesst");
  }

}
module.exports = new NewController();
