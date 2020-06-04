import { Router } from 'express';
import PostController from './controllers/PostController/PostController'
import UserController from './controllers/UserController/UserController'

const routes = Router();

routes.get('/posts', PostController.index);
routes.get('/users/:id', UserController.index);

export default routes;