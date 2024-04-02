const university = require("../Models/database.js");

const getEditUser = async(req, res) =>{
    const id = req.params.id;
    const data = await university.findById(id);

    console.log(data);

    res.render('EditUser.ejs', {data});
}

const patchEditUser = async(req, res)=>{
    const id = req.params.id;
    const universityName = req.body.universityName;
    const affiliateBy = req.body.affiliateBy;
    const location = req.body.location;
    const numberOfCourses = req.body.numberOfCourses;
    const ImagesUrl = req.body.ImagesUrl;


    await university.findByIdAndUpdate(id, {
        university: university,
        affiliateBy: affiliateBy,
        location: location,
        numberOfCourses: numberOfCourses,
        ImagesUrl:ImagesUrl,
    })

    res.redirect('/university');
}

module.exports = {getEditUser, patchEditUser};