import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configDB from '../config/database';

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDB);
    const dir = path.join(__dirname, '..', 'app', 'models');
    fs.readdirSync(dir).forEach((file) => {
      const modelDir = path.join(dir, file);
      const model = require(modelDir);
      models.push(model);
    });
    models.map((model) => model?.default.init(this.connection));

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();

export const connection = new Sequelize(configDB);
