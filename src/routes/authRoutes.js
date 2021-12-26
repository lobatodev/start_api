const express = require("express");
const routes = express.Router();

const isAuthenticated = require("../app/middlewares/isAuthenticated");

const UserController = require("../app/controllers/UserController");

routes.use(isAuthenticated);

routes.get("/users", UserController.getList);
routes.post("/users", UserController.insert);

module.exports = routes;
