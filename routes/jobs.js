const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config  = require('../config/database');

const Job = require('../models/job');


// router.get('/getjobdata', (req, res, next) => {
//     var data = [];
//     Job.getJobData((err, jobdata)=>{
//         if(err){
//             console.log('Error Occur');
//             throw err;
//         }
//         else {
//             var count;
//             jobdata.count().then(function(result){
//                 count = result;
//             });
            
//             jobdata.forEach(function(element) {
//                 data.push({
//                     _id : element._id,
//                     job_id: element.job_id,
//                     hotel_id : element.hotel_id,
//                     job_type_id : element.job_type_id,
//                     slot : element.slot,
//                     current_slot : element.current_slot,
//                     start_time : element.start_time,
//                     end_time : element.end_time,
//                     start_date: element.start_date,
//                     timestamp: element.timestamp
//                 });
//                 if( count == data.length)
//                     return res.json({success:true, data : data});
//             });
//         }
//     });
// });

router.get('/getjobdata', (req, res, next) => {
    var data = [];
    Job.getJobData((err, jobdata)=>{
        if(err){
            console.log('Error Occur');
            throw err;
        }
        else {
            console.log(jobdata);
            var count;
            // jobdata.count().then(function(result){
            //     count = result;
            // });
            
            jobdata.forEach(function(element) {
                data.push({
                    _id : element._id,
                    job_id: element.job_id,
                    hotel_id : element.hotel_id,
                    job_type_id : element.job_type_id,
                    slot : element.slot,
                    current_slot : element.current_slot,
                    start_time : element.start_time,
                    end_time : element.end_time,
                    start_date: element.start_date,
                    timestamp: element.timestamp,
                    hotel : element.hotel,
                    job : element.job
                });
                if( jobdata.length == data.length)
                    return res.json({success:true, data : data});
            });
        }
    });
});
//Add Job
router.post('/addjob', (req, res, next)=>{
    console.log(req.body.start_date);
    console.log(req.body.timestamp);
    let newJob = new Job({
        job_id :req.body.job_id,
        hotel_id : req.body.hotel_id,
        job_type_id : req.body.job_type_id,
        slot : req.body.slot,
        current_slot :req.body.current_slot,
        start_time : req.body.start_time,
        end_time : req.body.end_time,
        start_date : req.body.start_date,
        timestamp : req.body.timestamp,
    });

    Job.addJob(newJob, (err, job)=>{
        if(err){
            res.json({success: false, msg:'Failed to Add Job'});
        } else {
            res.json({success:true, msg:'Job Added'});
        }
    });
});

router.get('/gethotelname', (req, res, next) => {
    var data = [];
    Job.getHotelName((err, hotel)=>{
        if(err){
            console.log('Error Occur');
            throw err;
        }
        else {
            var count;
            hotel.count().then(function(result){count = result;})
            hotel.forEach(function(element) {
                data.push({
                    hotel_id: element.hotel_id,
                    hotel_name : element.hotel_name
                });
                if( count == data.length)
                    return res.json({success:true, data : data});
            });
        }
    });
});

router.get('/getjobtype', (req, res, next) => {
    var data = [];
    Job.getJobType((err, jobtype)=>{
        if(err){
            console.log('Error Occur');
            throw err;
        }
        else {
            var count;
            jobtype.count().then(function(result){count = result;})
            jobtype.forEach(function(element) {
                data.push({
                    job_type_id: element.job_type_id,
                    job_type_name : element.job_type_name
                });
                console.log(data.length == count);
                
                if( count == data.length)
                    return res.json({success:true, data : data});
            });
        }
    });
});


module.exports = router;