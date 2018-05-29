const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const db = mongoose.connection;

const JobSchema = mongoose.Schema({
    job_id: {
        type : Number,
        required: true
    },
    hotel_id : {
        type : Number,
        required: true
    },
    job_type_id : {
        type : Number,
        required: true
    },
    slot : {
        type : Number,
        required: true
    },
    current_slot : {
        type : Number,
        required: true
    },
    start_time : {
        type : String,
        required: true
    },
    end_time:{
        type : String,
        required: true
    },
    start_date:{
        type : String,
        required: true
    },
    timestamp: {
        type : String,
        required: true
    }
});

const HotelSchema = mongoose.Schema({
    hotel_id: {
        type : Number,
        required: true
    },
    hotel_name : {
        type : Number,
        required: true
    }
});
const Job = module.exports = mongoose.model('Job', JobSchema);

module.exports.addJob = function(newJob, callback){
    // newJob.save(callback);
    db.collection('jobs').save(newJob, callback);
}

module.exports.getHotelName = function(callback){
    db.collection('hotels').find(callback);
}

module.exports.getJobType = function(callback){
    db.collection('job_types').find(callback);
}

module.exports.getJobData = function(callback){
//    db.collection('jobs').find(callback);
    db.collection('jobs').aggregate([
        {
            $lookup:
              {
                from: "hotels",
                localField: "hotel_id",
                foreignField: "hotel_id",
                as: "hotel"
              }
         },
         {
            $lookup:
              {
                from: "job_types",
                localField: "job_type_id",
                foreignField: "job_type_id",
                as: "job"
              }
         }
    ],callback

);
}

