const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user-controller");
//? created a  singUp route
router.post("/singup", UserController.create);
// ? create    a singin route
router.post("/singin", UserController.singIn);

module.exports = router;
