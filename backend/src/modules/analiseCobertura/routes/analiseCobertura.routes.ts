import { Router } from 'express';
import AnaliseCoberturaController from '../controllers/AnaliseCoberturaController';
import { analiseCoberturaShowValidator } from '../validators/analiseCoberturaValidator';

const analiseCoberturaRouter = Router();
const analiseCoberturaController = new AnaliseCoberturaController();

analiseCoberturaRouter.get('/', analiseCoberturaController.list);
analiseCoberturaRouter.get('/:cep', analiseCoberturaShowValidator, analiseCoberturaController.show);

export default analiseCoberturaRouter;
