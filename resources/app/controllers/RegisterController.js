const UserModel = require('../models/users');
class RegisterController{
    // [GET] /register
    index(req, res, next){
        res.render('register/index');
    }

    //[POST] /register/process
    process(req, res, next){
        if(!req.body.submit){
            res.redirect('/');
        }
        else{
            UserModel.storeRegister(req.body)
                .then(flag=>{
                    if(flag){
                        res.send('Đăng ký thành công ');
                    }
                    else{
                        res.send('no');
                    }
                });    
        }

    }
}

module.exports = new RegisterController;