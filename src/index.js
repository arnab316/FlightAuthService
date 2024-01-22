const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");
// const UserService = require("./services/user-service");
const prepareAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRouter);
  app.listen(PORT, async () => {
    console.log(`server running on port ${PORT}`);
    // const service = new UserService();
    // const newService = service.createToken({ email: "foo@bar.com", id: 1 });
    // console.log("new token is " + newService);
  });
};

prepareAndStartServer();
