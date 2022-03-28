import { Router } from 'express';
import AuthController from '../app/controllers/AuthController';
const routes = new Router();

routes.get('/', (req, res) => {
  const port = process.env.PORT;
  return res.json({ message: `Rodando na porta ${port}` });
});

routes.post('/auth', AuthController.auth);
routes.post('/refresh-token', AuthController.refreshToken);

export default routes;
