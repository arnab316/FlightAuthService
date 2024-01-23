const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_KEY } = require("../config/serverConfig");
const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  //? created a new user service
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  } //? create a sing in user service
  async singIn(email, plainPassword) {
    try {
      // step 1: fetch the user using  email
      const user = await this.userRepository.getByEmail(email);
      // step 2: compare the password with store encrypted password
      const passwordsMatch = await this.checkpasword(
        plainPassword,
        user.password
      );
      if (!passwordsMatch) {
        console.log("Password doesn't match");
        throw { error: "Incorrect password" };
      }
      // step 3: generate a  token and send it to the user
      const newJwt = this.createToken({ email: user.email, id: user.id });
      return newJwt;
    } catch (error) {
      console.log("Something went wrong in Singin process");
      throw error;
    }
  }
  //? create a new token service
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
      throw error;
    }
  }
  //? create a varyfytoken token service
  veryfyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation");
      throw error;
    }
  }
  // ? validate password
  checkpasword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password validation");
      throw error;
    }
  }
}
module.exports = UserService;
