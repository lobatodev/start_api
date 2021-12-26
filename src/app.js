require("dotenv").config();
const express = require("express");
const openRoutes = require("./routes/openRoutes");
const authRoutes = require("./routes/authRoutes");
require("./database");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(openRoutes);
    this.server.use(authRoutes);
  }
}
module.exports = new App().server;
