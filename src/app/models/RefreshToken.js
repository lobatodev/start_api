import Sequelize, { Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

class RefreshToken extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        refresh_token: {
          type: Sequelize.UUID,
          unique: true,
        },
        expires_in: Sequelize.INTEGER,
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: 'refresh_tokens',
      }
    );
    this.addHook('beforeCreate', async (model) => {
      await this.destroy({ where: { id_user: model.id_user } });
      model.refresh_token = uuidv4();
      model.expires_in = dayjs().add(3, 'day').unix();
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_user',
    });
  }
}
export default RefreshToken;
