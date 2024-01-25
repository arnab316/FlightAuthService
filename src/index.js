const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");
const db = require("./models/index");
const { User, Role } = require("./models/index");
// const UserService = require("./services/user-service");
const prepareAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRouter);
  app.listen(PORT, async () => {
    console.log(`server running on port ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    const u1 = await User.findByPk(1);
    const r1 = await Role.findByPk(1);
    u1.addRole(r1);
    const res = await r1.getUsers();
    console.log(res);
    // const service = new UserService();
    // const newService = service.createToken({ email: "foo@bar.com", id: 1 });
    // console.log("new token is " + newService);
  });
};

prepareAndStartServer();
