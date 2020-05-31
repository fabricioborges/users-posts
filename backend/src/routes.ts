import { Router } from 'express';
import ShowController from'./controllers/ShowController';

const routes = Router();

routes.get('/', ShowController.index);

export default routes;