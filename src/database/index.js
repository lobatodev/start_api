const Sequelize = require("sequelize");
const dbConfigSchool = require("../config/database");

const User = require("../app/models/User");
const UserType = require("../app/models/UserType");
const RefreshToken = require("../app/models/RefreshToken");

const models = [User, UserType, RefreshToken];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfigSchool);

    models.map((model) => model.init(this.connection));

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();
