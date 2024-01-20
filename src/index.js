const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = async () => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
};

prepareAndStartServer();
