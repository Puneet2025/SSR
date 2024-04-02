const university = require("../Models/database.js");

const showUser = async(req, res)=>{
    const id = req.params.id;
    const data = await university.findById(id);
    console.log(data);

    res.render('ShowUser.ejs',{data});
}

module.exports = {showUser};