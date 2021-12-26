require("dotenv").config();
module.exports = {
  dialect: process.env.DB_DIALECT_SCHOOL,
  host: process.env.DB_HOST_SCHOOL,
  username: process.env.DB_USER_SCHOOL,
  port: process.env.DB_PORT_SCHOOL,
  password: process.env.DB_PASS_SCHOOL,
  database: process.env.DB_DATABASE_SCHOOL,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: false,
};
