const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");
module.exports = {
  PORT: process.env.PORT || 3002,
  SALT: bcrypt.genSaltSync(10),
};
