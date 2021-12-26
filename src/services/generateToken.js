const Jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");
const User = require("../app/models/User");
const RefreshToken = require("../app/models/RefreshToken");

async function generateToken(playload = {}, uuid, byRefreshToken = false) {
  if (byRefreshToken) {
    const userData = await User.findOne({ where: { uuid } });
    const refreshTokenData = await RefreshToken.findOne({
      where: { id_user: userData.id },
    });
    if (refreshTokenData) {
      await RefreshToken.destroy({ where: { id_user: userData.id } });
    }
  }
  const token = Jwt.sign({ playload }, jwtConfig.secret, {
    subject: uuid,
    ...jwtConfig.expires,
  });
  return token;
}

module.exports = generateToken;
