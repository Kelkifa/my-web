class HomeController{
    index(req, res, next){
        var user = null;
        if(req.session.user){
            user = req.session.user;
        }
        res.render('home/index');
    }
}

module.exports = new HomeController;
