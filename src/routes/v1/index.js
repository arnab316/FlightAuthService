const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user-controller");
//? created a  create user route
router.post("/singup", UserController.create);

module.exports = router;
