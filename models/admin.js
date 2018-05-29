const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//AdminUser Schema
const AdminUserSchema = mongoose.Schema({
    name:{
        type : String
    },
    emailorphone:{
        type : String,
        required: true
    },
    username:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
});

// console.log("----------Schema-----------");
// console.log(AdminUserSchema);

const AdminUser = module.exports = mongoose.model('AdminUser', AdminUserSchema);

// console.log("----------AdminUser-----------");
// console.log(AdminUser);

module.exports.getUserById = function(id, callback){
    AdminUser.findById(id, callback);
}

module.exports.getUserByEmail = function(emailorphone, callback) {
    console.log(emailorphone);
    const query = { emailorphone };
    AdminUser.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10,(err, salt)=> {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    console.log(candidatePassword);
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.resetPassword = function(phone, password, callback) {
    bcrypt.genSalt(10,(err, salt)=> {
        bcrypt.hash(password, salt, (err, hash)=>{
            if(err) throw err;
            password = hash;
            AdminUser.findOneAndUpdate({ emailorphone : phone }, { $set : { password }}, callback);
        });
    });
}