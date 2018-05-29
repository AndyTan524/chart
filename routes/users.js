const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config  = require('../config/database');
const multer = require('multer');
const md5 = require('md5');

const User = require('../models/user');

var fs = require('file-system');

//Email check
router.post('/emailcheck', (req, res, next) => {
    const email = req.body.email;
    console.log(email);
    User.isEmailThere(email, (err, user) => {
        if(err) throw err;
       
        if(!user){
            console.log(true);
            return res.json({ success : true });
        }
        else {
            console.log(false);
            return res.json({ success : false });
        }
    });
});

//Register

router.post('/register', (req, res, next) => {
        var storage = multer.diskStorage({
            destination: 'userData'
        });
        var upload = multer({
            storage: storage
        }).any();
        var data, count = 0;
        upload(req, res, function(err) {
            
            if (err) {
                console.log(err);
                return res.end('Error');
            } else {
                let newUser = new User({
                    email: req.body.email,
                    password: req.body.password,
                    studentType: (req.body.studentType=="true"?true:false),
                    userName: req.body.userName,
                    userNRIC: req.body.userNRIC,
                    userBirthday: req.body.userBirthday,
                    userGender: (req.body.userGender=="true"?true:false),
                    studentStatus: (req.body.studentStatus=="true"?true:false),
                    currentSchool: req.body.currentSchool,
                    contactNo: req.body.contactNo,
                    address1: req.body.address1,
                    address2: req.body.address2,
                    emergencyContactNo: req.body.emergencyContactNo,
                    emergencyContactName: req.body.emergencyContactName,
                    relactionToEmergencyContact: req.body.relactionToEmergencyContact,
                    bankName: req.body.bankName,
                    accountNo: req.body.accountNo,
                    asWaiter: (req.body.asWaiter=="true"?true:false),
                    dyedHair: (req.body.dyedHair=="true"?true:false),
                    visibleTattoo: (req.body.visibleTattoo=="true"?true:false),
                    workPassPhoto: 'workPassPhoto',
                    studentCardFront: 'studentCardFront',
                    studentCardBack: 'studentCardBack',
                    NRICFront: 'NRICFront',
                    NRICBack: 'NRICBack',
                    
                    timeStamp:'',
                    visitTimeStamp: '',

                    jobsDone: 0,
                    userConfirmed: 0,

                    userSkirt: '',
                    userPants: '',
                    userShoes: '',
                    userSkirtApproved: false,
                    userShoesApproved: false,
                    userPantsApproved: false,
                    
                    device_token : '',
                    device_type : false,//false:android

                    verifyCode: '',
                    user_id : 0
                });
                req.files.forEach(function(item) {
                    // console.log(item);
                    if(newUser.workPassPhoto == item.fieldname)
                        newUser.workPassPhoto = item.path;
                    if(newUser.studentCardFront == item.fieldname)
                        newUser.studentCardFront = item.path;
                    if(newUser.studentCardBack == item.fieldname)
                        newUser.studentCardBack = item.path;
                    if(newUser.NRICFront == item.fieldname)
                        newUser.NRICFront = item.path;
                    if(newUser.NRICBack == item.fieldname)
                        newUser.NRICBack = item.path;
                    // move your file to destination
                });
                
                //User.getMaxId();
                // newUser.user_id = md5(newUser.email);
                let m_Added = false;

                User.getUserData((err, sortuser)=>{
                    if(err) throw err;
                    sortuser.sort({user_id : -1}).forEach(function(element){
                        if (m_Added == false) {
                            newUser.user_id = element.user_id + 1;
                            User.addCustomUser(newUser, (err, user)=>{
                                if(err){
                                    res.json({success: false, msg:'Failed to register user'});
                                } else {
                                    res.json({success:true}); // true 
                                }
                            });
                            m_Added = true;
                        }
                    });
                    
                });
                
            }
        });
        
});

router.post('/approveuser' , (req, res, next) =>{
    const id = req.body.id;
    const value = req.body.value;
    User.setUserApprove(id, value, (err, id) => {
        if(err) throw err;
        res.json({ success : true , msg : 'User Approved Successfully'});
    });
});
//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.getUserByUsername(username, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'User not found'});
        }
        
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({ user }, 'secret', {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true, 
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else{
                return res.json( { success:false, msg:'Wrong Password'});
            }
        });
    });
});

router.get('/getuserdata', (req, res, next) => {
    var data = [];
    User.getUserData((err, userdata)=>{
        if(err){
            console.log('Error Occur');
            throw err;
        }
        else {
            var count;
            userdata.count().then(function(result){
                count = result;
            });
            
            userdata.forEach(function(element) {
                data.push({
                    _id : element._id,
                    token : element.token,
                    timeStamp : element.timeStamp,
                    visitTimeStamp : element.visitTimeStamp,
                    user_id : element.user_id,
                    email : element.email,
                    password : element.password,
                    studentType : element.studentType,
                    studentCardFront : element.studentCardFront,
                    studentCardBack : element.studentCardBack,
                    NRICFront : element.NRICFront,
                    NRICBack : element.NRICBack,
                    workPassPhoto : element.workPassPhoto,
                    userName : element.userName,
                    userNRIC : element.userNRIC,
                    userBirthday : element.userBirthday,
                    userGender : element.userGender,
                    jobsDone : element.jobsDone,                    
                    studentStatus : element.studentStatus,
                    currentSchool : element.currentSchool,
                    contactNo : element.contactNo,
                    address1 : element.address1,
                    address2 : element.address2,
                    emergencyContactNo : element.emergencyContactNo,
                    emergencyContactName : element.emergencyContactName,
                    relationToEmergencyContact : element.relationToEmergencyContact,
                    bankName : element.bankName,
                    accountNo : element.accountNo,
                    asWaiter : element.asWaiter,
                    dyedHair : element.dyedHair,
                    visibleTattoo : element.visibleTattoo,
                    userConfirmed : element.userConfirmed,
                    userSkirt : element.userSkirturi,
                    userPants : element.userPants,
                    userShoes : element.userShoes,
                    userSkirtApprovedTimeStamp : element.userSkirtApprovedTimeStamp,
                    userShoesApprovedTimeStamp : element.userShoesApprovedTimeStamp,
                    userPantsApprovedTimeStamp : element.userPantsApprovedTimeStamp,
                    device_token : element.device_token,
                    device_type : element.device_type,
                    verifyCode : element.verifyCode
                });
                if( count == data.length)
                    return res.json({success:true, data : data});
            });
        }
    });
});


router.post('/getuserdatawithid', (req, res, next) => {
    var data;
    User.getUserDataWithId( req.body.user_id, (err, element)=>{
        if(err){
            console.log('Error Occur');
            throw err;
        }
        else {
            res.json({ success : true, data : element });
        }
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user : req.user});
});

//Validate
router.get('/validate', (req, res, next)=>{
    res.send('VALIDATE');
});

module.exports = router;