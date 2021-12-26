const express = require("express");
const routes = express.Router();

const AuthController = require("../app/controllers/AuthController");

routes.get("/", (req, res) => {
  const port = process.env.PORT;
  return res.json({ message: `Rodando na porta ${port}` });
});

routes.post("/auth", AuthController.auth);
routes.post("/refresh-token", AuthController.refreshToken);

module.exports = routes;
