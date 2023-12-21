import { Router } from 'express';
import FichaCadastralController from '../controllers/FichaCadastralController';
import { fichaCadastralCreateValidator } from '../validators/fichaCadastralValidator';

const fichaCadastralRouter = Router();

const fichaCadastralController = new FichaCadastralController();

fichaCadastralRouter.post('/', fichaCadastralCreateValidator, fichaCadastralController.create);

export default fichaCadastralRouter;
