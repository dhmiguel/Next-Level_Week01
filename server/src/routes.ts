import express, { request, response } from 'express';

import PointController from './controllers/points_controller';
import PointsController from './controllers/points_controller';
import ItemsController from './controllers/items_controller';

//Index se for uma listagem, show se for exibir um único registro daquele, update, delete
//Padrões da comunidade

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

routes.post('/points', pointsController.create);

export default routes;
