const express = require("express");

const app = express();

const prepareAndStartServer = () => {
  app.listen(3002, () => {
    console.log("server running on port 3002");
  });
};

prepareAndStartServer();
