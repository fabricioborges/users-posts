import { Router } from 'express';
import ShowController from'./controllers/ShowController';
import PostController from './controllers/PostController/PostController'
import UserController from './controllers/UserController/UserController'

const routes = Router();

routes.get('/', ShowController.index);
routes.get('/posts', PostController.index);
routes.get('/user', UserController.index);

export default routes;