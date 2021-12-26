require("dotenv").config();
module.exports = {
  secret: process.env.JWT_KEY,
  expires: {
    expiresIn: "8h",
  },
};
