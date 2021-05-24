const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {bcrypFc, bcrypCompareFC} = require('../../core/bcrypt') //Mã hoá password
const users = new Schema(
    {
        username: {type: String},
        password: {type: String},
        fullname: {type: String},
        admin: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
);

var model =  mongoose.model('users', users);

class UserModel{
    getAll(){
        return model.find({});
    }
    checkInput(data){
        return model.findOne({username: data.username})
            .then(value =>{
                if(value == null && data.username != '' && data.password != ''){ //ok
                    return 1;
                }
                else return 0;
            });
    }
    storeRegister(data){
        return this.checkInput(data)
            .then(flag =>{
                if(flag){
                    return bcrypFc(data.password)
                        .then(password =>{
                            data.password = password;
                            var user = new model(data);
                            user.save();
                            return 1;
                        });
                }
                else{
                    return 0;
                }
            });
    }
    checkLogin(data){
        return model.findOne({username: data.username})
            .then(user =>{
                if(user){
                    // if(user.password == data.password)
                    return bcrypCompareFC(user.password, data.password)
                        .then(flag =>{
                            if(flag){
                                return {
                                    username: user.username,
                                    fullname: user.fullname,
                                    admin: user.admin
                                };
                            }
                            else{
                                return 0;
                            }
                        });
                }
                else 
                    return 0;
            });
    }
}

module.exports = new UserModel;