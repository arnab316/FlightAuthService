const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user-controller");
const { authRequestValidators } = require("../../middlewares");
//? created a  singUp route
router.post(
  "/singup",
  authRequestValidators.validteUserSingup,
  UserController.create
);
// ? create    a singin route
router.post(
  "/singin",
  authRequestValidators.validteUserSingup,
  UserController.singIn
);

module.exports = router;
