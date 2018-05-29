const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//AdminUser Schema
const PhoneUserSchema = mongoose.Schema({
    phonenumber:{
        type : String
    },
    verifycode:{
        type : String,
        required: true
    }
});

// console.log("----------Schema-----------");
// console.log(PhoneUserSchema);

const PhoneUser = module.exports = mongoose.model('PhoneUser', PhoneUserSchema);

console.log("----------PhoneUser-----------");
// console.log(PhoneUser);

module.exports.addUser = function(puser, callback){
    // puser.save(callback);
    console.log(puser);
    PhoneUser.findOne( {phonenumber : puser.phonenumber}, (req, res, next) => {
        if(res == null) {
            puser.save(callback);
        }
        else {
            console.log('should update');
            PhoneUser.findOneAndUpdate( {phonenumber : puser.phonenumber}, { $set : {verifycode : puser.verifycode}}, callback);
        }
    });
}
module.exports.getUserByPhone = function(phone, callback) {
    // console.log("Phone:")
    // console.log(phone);
    PhoneUser.findOne( { phonenumber: phone}, callback );
}
