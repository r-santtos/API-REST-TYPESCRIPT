import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classsControllers = new ClassesController();

routes.get('/classes', classsControllers.index);
routes.post('/classes', classsControllers.create);

export default routes;