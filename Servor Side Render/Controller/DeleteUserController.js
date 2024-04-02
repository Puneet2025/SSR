const university = require("../Models/database.js");


const deleteUser = async(req, res)=>{
    const id = req.params.id;

    const result = await university.deleteOne({ _id: id });
    res.redirect('/university');
}

module.exports = {deleteUser};