const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const db= mongoose.connection;


const UserSchema = mongoose.Schema({
    user_id : {
        type : Number,
        require : true
    },
    token : {
        type: String,
        require : true
    },
	email : {
        type: String,
        require : true
    },
	password: {
        type: String,
        require : true
    },
	
	studentType: {
        type: Boolean,
        require : true
    },
	userName:{
        type: String,
        require : true
    },
	userBirthday:{
        type: String,
        require : true
    },
	userGender:{
        type: Boolean,
        require : true
    },
	userNRIC:{
        type: String,
        require : true
    },
	
	studentStatus: {
        type: Boolean,
        require : true
    },
	currentSchool:{
        type: String,
        require : true
    },
	
	contactNo:{
        type: String,
        require : true
    },
	address1: {
        type: String,
        require : true
    },
	address2:{
        type: String,
        require : true
    },
	
	emergencyContactNo:{
        type: String,
        require : true
    },
	emergencyContactName:{
        type: String,
        require : true
    },
	relationToEmergencyContact:{
        type: String,
        require : true
    },
	
	bankName:{
        type: String,
        require : true
    },
	accountNo:{
        type: String,
        require : true
    },	
	asWaiter: {
        type: Boolean,
        require : true
    },
	dyedHair: {
        type: Boolean,
        require : true
    },
	visibleTattoo: {
        type: Boolean,
        require : true
    },
    workPassPhoto: {
        type: String,
        require : true
    },
	studentCardFront:{
        type: String,
        require : true
    },
	studentCardBack:{
        type: String,
        require : true
    },
	NRICFront:{
        type: String,
        require : true
    },
	NRICBack:{
        type: String,
        require : true
    },
    timeStamp:{
        type: String,
        require : true
    },
    visitTimeStamp: {
        type: String,
        require : true
    },
    jobsDone: {
        type : Number,
        require : true
    },
    userConfirmed: {
        type : Number,
        require : true
    },
    userSkirt: {
        type: String,
        require : true
    },
    userPants: {
        type: String,
        require : true
    },
    userShoes: {
        type: String,
        require : true
    },
    userSkirtApproved: {
        type: Boolean,
        require : true
    },
    userShoesApproved: {
        type: Boolean,
        require : true
    },
    userPantsApproved: {
        type: Boolean,
        require : true
    },
    
    device_token : {
        type: String,
        require : true
    },
    device_type : {
        type : Boolean,
        require : true
    },
    verifyCode: {
        type: String,
        require : true
    }
});

// console.log("----------Schema-----------");
// console.log(AdminUserSchema);

const User = module.exports = mongoose.model('User', UserSchema);

// console.log("----------User-----------");
// console.log(User);


module.exports.isEmailThere = function( email, callback){
    const query = { email : email };
    db.collection('users').findOne(query, callback);
}

module.exports.getUserData = function(callback){
    db.collection('users').find(callback);
}

module.exports.getUserDataWithId = function( id, callback ){
    const query = { user_id : id};
    // db.findById(query, callback);
    db.collection('users').findOne(query, callback);
}

module.exports.setUserApprove = function (id, value, callback){
    console.log("Patch");
    db.collection('users').findOneAndUpdate( { "user_id" : id}, {$inc: { "userConfirmed" : value}}, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username : username};
    User.findOne(query, callback);
}

module.exports.addCustomUser = function(newUser, callback){
    
    bcrypt.genSalt(10,(err, salt)=> {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

