const validteUserSingup = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      meassage: "Something went wrong",
      err: "Please enter your email  and password",
    });
  }
  next();
};
module.exports = {
  validteUserSingup,
};
