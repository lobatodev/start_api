import Jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt";
import User from "../app/models/User";
import RefreshToken from "../app/models/RefreshToken";

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
export default generateToken;
