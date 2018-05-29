const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//AdminUser Schema
const SiteDataSchema = mongoose.Schema({
    emailorphone:{
        type : String
    },
    testmotional:{
        type : String,
        required: true
    },
    path : { 
        type : String,
        required: true
    }
});

// console.log("----------Schema-----------");
// console.log(SiteDataSchema);

const SiteData = module.exports = mongoose.model('SiteData', SiteDataSchema);

console.log("----------SiteData-----------");
// console.log(SiteData);

module.exports.updateSiteData = function(sitedata, callback){
    SiteData.findOne({emailorphone: sitedata.emailorphone}, (err, data) => {
        if(err) {
            throw err;
        }
        if(!data) {
            sitedata.save(callback);
        } else {
            SiteData.findOneAndUpdate({ emailorphone : sitedata.emailorphone }, { $set : {
                testmotional : sitedata.testmotional,
                path : sitedata.path
            }}, callback);
        }
    });    
}

module.exports.getData = function(callback){
    SiteData.find(callback);
}
