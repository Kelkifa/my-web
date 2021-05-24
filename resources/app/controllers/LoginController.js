
const UserModel = require('../models/users');

class LoginController{
    //[GET] /login
    index(req, res, next){
        res.render('login/index' ,{user: null});
    }
    //[POST] /login/process
    process(req, res, next){
        if(req.body.submit == 'submited'){
            UserModel.checkLogin(req.body)
                .then(user =>{
                    if(user != 0){
                        req.session.user = user;
                        res.redirect('/home');   
                    }
                    else{
                        res.redirect('/login');
                    }
                })
        }
        else{
            res.redirect('/login');
        }
    }

}

module.exports = new LoginController;