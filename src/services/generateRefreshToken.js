import RefreshToken from "../app/models/RefreshToken";

async function generateRefreshToken(id_user) {
  const refreshToken = await RefreshToken.create({
    id_user,
  });
  return refreshToken.refresh_token;
}

export default generateRefreshToken;
