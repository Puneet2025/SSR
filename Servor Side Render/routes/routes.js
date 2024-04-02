const express = require("express");
const path = require("path");
const { getAllUser, createUser } = require("../Controller/userController.js");
const { newUser } = require("../Controller/newUserController.js");
const { getEditUser, patchEditUser } = require("../Controller/EditUserController.js");
const { deleteUser } = require("../Controller/DeleteUserController.js");
const { showUser } = require("../Controller/ShowUserController.js");


const router = express.Router();

router.get ("/university", getAllUser);

router.post ("/university", createUser);

router.get ("/university/create", newUser);

router.get('/university/:id', showUser);

router.get('/university/:id/edit', getEditUser);

router.patch('/university/:id/edit', patchEditUser);

router.get ('/university/:id/delete', deleteUser);


module.exports = router;