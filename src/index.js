const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routes/index");
const bodyParser = require("body-parser");

const prepareAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRouter);
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
};

prepareAndStartServer();
