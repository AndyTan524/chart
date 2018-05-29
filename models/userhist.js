const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//AdminUser Schema
const UserHistorySchema = mongoose.Schema({
    emailorphone:{
        type : String
    },
    filename:{
        type : String,
        required: true
    },
    path : { 
        type : String,
        required: true
    }
});

// console.log("----------Schema-----------");
// console.log(UserHistorySchema);

const UserHistory = module.exports = mongoose.model('UserHistory', UserHistorySchema);

console.log("----------UserHistory-----------");
// console.log(UserHistory);

module.exports.addHistory = function(history, callback){
    // puser.save(callback);
    history.save(callback);
}
