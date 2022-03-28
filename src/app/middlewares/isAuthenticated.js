import jwt from 'jsonwebtoken';

function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: 'Token não fornecido' });
  }

  const [scheme, token] = authHeader.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ msg: 'Token inválido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.username = decoded.playload.username;
    req.userUUID = decoded.sub;
    return next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
}
export default isAuthenticated;
