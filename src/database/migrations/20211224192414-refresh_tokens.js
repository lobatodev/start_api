module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("refresh_tokens", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      refresh_token: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
      },
      expires_in: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("refresh_tokens");
  },
};
