const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config  = require('../config/database');
// const https = require('https');
// const fetch = require('node-fetch');
const request = require('request');
const AdminUser = require('../models/admin');
const PhoneUser = require('../models/phone');

const UserHistory = require('../models/userhist');
const SiteData = require('../models/sitedata');

const multer = require('multer');

//Register
router.post('/register', (req, res, next)=>{
    let newUser = new AdminUser({
        name :req.body.name,
        emailorphone : req.body.email,
        username : req.body.username,
        password : req.body.password
    });

    AdminUser.addUser(newUser, (err, user)=>{
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success:true, msg:'User registered'});
        }

    });
});

//Authenticate
router.post('/authenticate', (req, res, next)=>{
    const emailorphone = req.body.emailorphone;
    const password = req.body.password;
    console.log(req.body);
    AdminUser.getUserByEmail(emailorphone, (err, user) =>{
        if(err){ throw err;
            console.log("ERRR");
        }
        if(!user){
            console.log("User not found");
            return res.json({success:false, msg:'User not found'});
        }
        console.log(user);        
        AdminUser.comparePassword(password, user.password, (err, isMatch)=>{
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
                        emailorphone: user.emailorphone
                    }
                });
            }
            else{
                return res.json({success:false, msg:'Wrong Password'});
            }
        });
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

//Authenticate By Verification Code
router.post('/authenticatebyphone', (req, res, next) => {
    const phone = req.body.phone;
    const vcode = req.body.vcode;
    // console.log("Admin's Phone:");
    // console.log(phone);
    PhoneUser.getUserByPhone(phone, (err, user) => {
        if(err) {
            console.log(err);
            throw err;
        }
        if(!user){
            console.log("User not found");
            return res.json({success:false, msg:'User not found'});
        } else {
            if(user.verifycode == vcode) {
                console.log("Verifycod match");
                const token = jwt.sign({ user }, 'secret', {
                    expiresIn: 86400 // 1 day
                });
                return res.json({
                    success: true, 
                    token: 'JWT ' + token
                });            
            }
            else {
                console.log("Verifycod not match");
                return res.json({ success:false, msg:'Check verify code again'} );
            }
        }
    });
});

//Get Password based on the Phone Number
router.post('/resetpass', (req, res, next) => {
    const phone = req.body.phone;
    const password = req.body.password;
    AdminUser.resetPassword(phone, password, (err, user) => {
        if(err) {
            console.log(err);
            throw err;
        }
        if(!user){
            console.log("User not found");
            return res.json({success:false, msg:'User not found'});
        } else {
            return res.json({ success: true, msg: "Password Reset"});
        }
    });
});

router.post('/findsimilarchart', (req, res, next) => {
    console.log('findsimilarchart');
    console.log(req.body);
    let option = {
        // uri : "http://192.168.1.134:8000/api/kchartcomp/",
        uri : "http://47.75.138.128:8000/api/kchartcomp/",
        method : 'POST',
        headers: {
            "Content-type": "application/json"
        },
        json : req.body
    };
    request.post(option, function(error, response, body) {
        if (!error) {
            return res.json({ success: true,  body });
        } else {
            console.log(error);
            return res.json({ success: false, body });
        }
    });
})
//Sending Verification Code
router.post('/sendsms', (req, res, next) => {
    let vcode = Math.random().toString().slice(2, 6);
    console.log(vcode);
    console.log("Sending SMS");
    let option = {
        uri : "https://sh2.ipyy.com/smsJson.aspx?action=send",
        method : 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        formData : {
            userid : "",
            account : "jkwl518",
            password : "jkwl51825",
            mobile : req.body.phone,
            content: "您的验证码是"+ vcode +"【爱克】",
            sendTime : "",
            extno : ""
        }
    };
    request.post(option, function(error, response, body) {
        if (!error) {
            console.log(body);
            
            let puser = new PhoneUser({
                phonenumber : req.body.phone,
                verifycode: vcode 
            });
            PhoneUser.addUser(puser, (err, user) => {
                if(!err) {
                    console.log(res);
                    
                    return res.json({ success: true,  body });
                } 
                else
                    return res.json({success:false})
            });
        } else {
            return res.json({ success: false, body });
        }
    });
});


router.post('/uploadImage', (req, res, next) => {
    console.log(req.file);
    console.log("UPload Image");
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
            let history = new UserHistory({
                emailorphone : req.body.emailorphone,
                filename : req.body.filename
            });
            req.files.forEach(function(item) {
                history.path = item.path;
            });
            console.log(history);
            UserHistory.addHistory(history, (err, user) => {
                if(err){
                    throw err;
                } else {
                    return res.json({success : true});
                }
            });
        }
    });
});

router.get('/getVideo', (req, res, next) => {
    SiteData.getData((err, data) =>{
        if(err){
            throw err;
            return res.json({success:false});
        } 
        if(!data) {
            return res.json({success:false});
        } else {
            console.log(data);
            return res.json({success: true, data});
        }
    });
});

router.post('/uploadVideo', (req, res, next) => {
    console.log("UPload Video");
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '../HighChart/src/assets/video')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '.mp4') //Appending .jpg
        }
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
            console.log("REquest Data");
            console.log(req.body);
            let sitedata = new SiteData({
                emailorphone : req.body.emailorphone,
                testmotional : req.body.testmotional
            });
            req.files.forEach(function(item) {
                sitedata.path = item.path.split('/')[4] + '/' + item.path.split('/')[5];
            });
            console.log("Site Data");
            console.log(sitedata);
            SiteData.updateSiteData(sitedata, (err, data) => {
                if(err){
                    throw err;
                } else {
                    return res.json({success : true});
                }
            });
        }
    });
});
module.exports = router;