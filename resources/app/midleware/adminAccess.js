function adminAcess(req, res, next){
    if(res.locals._logged.enable){
        if(res.locals._logged.user.admin){
            next();
        }
        else{
            res.redirect('/');
        }
    }
    else{
        res.redirect('/');
    }
};

module.exports = adminAcess;