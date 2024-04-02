const university = require("../Models/database.js");

async function getAllUser(req, res){
    const data = await university.find();
    res.render('Delete.ejs', {data});
}

async function createUser(req, res){
    const universityName = req.body.universityName;
    const affiliateBy = req.body.affiliateBy;
    const location = req.body.location;
    const numberOfCourses = req.body.numberOfCourses;
    const ImagesUrl = req.body.ImagesUrl;

    console.log(req.body)

    const newData = new university({
        university: university,
        affiliateBy: affiliateBy,
        location: location,
        numberOfCourses: numberOfCourses,
        ImagesUrl:ImagesUrl,
    })

    await newData.save();
    res.redirect('/university');
}

module.exports = {getAllUser, createUser};