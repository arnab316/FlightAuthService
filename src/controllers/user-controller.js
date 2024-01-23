const UserService = require("../services/user-service");
const userService = new UserService();
const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      success: true,
      meassage: "Successfully created a new user",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      meassage: "Something went wrong in contoller",
      error: error,
    });
  }
};

const singIn = async (req, res) => {
  try {
    const response = await userService.singIn(
      req.body.email,
      req.body.password
    );
    return res.status(200).json({
      success: true,
      data: response,
      error: {},
      meassage: "Successfully singed in",
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      meassage: "Something went wrong in contoller",
      error: error,
    });
  }
};

module.exports = {
  create,
  singIn,
};
