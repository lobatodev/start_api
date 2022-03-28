import { Router } from 'express';
import isAuthenticated from '../app/middlewares/isAuthenticated';
import UserController from '../app/controllers/UserController';

const routes = new Router();

routes.use(isAuthenticated);

routes.get('/users', UserController.getList);
routes.post('/users', UserController.insert);

export default routes;
