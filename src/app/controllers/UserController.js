import User from '../../app/models/User';
import UserType from '../../app/models/UserType';

class UserControler {
  async getList(req, res) {
    const users = await User.findAll({
      includes: [{ model: UserType, attributes: ['description'] }],
    });
    if (users.length) {
      return res.json(users);
    }
    return res.status(204).json({ msg: 'Nenhum usuário encontrado' });
  }
  async insert(req, res) {
    const { uuid, name, username, email, password, id_user_type } = req.body;
    try {
      const user = await User.create({
        uuid,
        name,
        username,
        email,
        password,
        id_user_type,
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ msg: 'Erro ao gerar usuário. ' });
    }
  }
}
export default new UserControler();
