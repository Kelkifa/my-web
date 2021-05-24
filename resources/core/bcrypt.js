const bcrypt = require('bcrypt');
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

// function bcrypFc(password){
//     return bcrypt.hash(password, saltRounds)
//         .then(function(hash) {
//             return hash;
//         });
// }

// function bcrypCompareFC(hash){
//     return bcrypt.compare(myPlaintextPassword, hash)
//         .then(result=> {
//             return result;
//         });
// }
module.exports = {
    bcrypFc: function(password){
        return bcrypt.hash(password, saltRounds)
        .then(function(hash) {
            return hash;
        });
    } , 
    bcrypCompareFC: function(hash, myPlaintextPassword){
        return bcrypt.compare(myPlaintextPassword, hash)
            .then(result=> {
                return result;
            });
    }
};