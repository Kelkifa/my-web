const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/anime_movie', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`Connect to db successfully`);
    }catch(error){
        console.log('Fail to connect db')
    }
}

module.exports = {connect};