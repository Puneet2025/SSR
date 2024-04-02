const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/FullStackExam')
.then(()=>{console.log('DATABASE CONNECTED')})
.catch((err)=>console.log(err));

const Schema = new mongoose.Schema({
    universityName:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    affiliateBy:{
        type: Number,
        require: true,
        trim: true,
    },
    location:{
        type: String,
        require: true,
        trim: true,
    },
    numberOfCourses:{
        type: Number,
        require: true,
    },
    ImagesUrl:{
        type: String,
        require: true,
        trim: true,
    }
})

const University = mongoose.model('university', Schema);

module.exports = University;