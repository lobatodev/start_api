import User from '../models/User';
import UserType from '../models/UserType';
import RefreshToken from '../models/RefreshToken';
import bcrypt from 'bcrypt';
import generateToken from '../../services/generateToken';
import generateRefreshToken from '../../services/generateRefreshToken';
import dayjs from 'dayjs';

class AuthController {
  async auth(req, res) {
    const { username, password } = req.body;
    const userData = await User.findOne({
      where: { username },
      include: [{ model: UserType, attributes: ['description'] }],
    });
    if (!userData) {
      return res
        .status(400)
        .json({ msg: 'Erro ao logar! Verifique seu dados.' });
    }
    if (!(await bcrypt.compare(password, userData.password_hash))) {
      return res
        .status(400)
        .json({ msg: 'Erro ao logar! Verifique seu dados.' });
    }

    return res.status(200).json({
      name: userData.name,
      accessToken: await generateToken(
        { username: username, user_type: userData.UserType.description },
        userData.uuid
      ),
      refreshToken: await generateRefreshToken(userData.id),
      msg: 'Logado com sucesso!',
    });
  }
  async refreshToken(req, res) {
    const { refresh_token } = req.body;
    const refreshTokenData = await RefreshToken.findOne({
      where: { refresh_token },
    });
    if (!refreshTokenData) {
      return res.status(400).json({ msg: 'Refresh Token inválido' });
    }
    if (dayjs().isAfter(dayjs.unix(refreshTokenData.expires_in))) {
      return res.status(400).json({ msg: 'Refresh Token expirado' });
    }
    const userData = await User.findOne({
      where: { id: refreshTokenData.id_user },
      attributes: ['uuid', 'username', 'name'],
      include: [{ model: UserType, attributes: ['description'] }],
    });
    if (!userData) {
      return res.status(400).json({ msg: 'Usuário não encontrado' });
    }
    return res.status(200).json({
      name: userData.name,
      accessToken: await generateToken(
        {
          username: userData.username,
          user_type: userData.UserType.description,
        },
        userData.uuid,
        true
      ),
      refreshToken: await generateRefreshToken(refreshTokenData.id_user),
      msg: 'Token atualizado com sucesso.',
    });
  }
}
export default new AuthController();
