import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AnaliseCoberturaController from '../controllers/AnaliseCoberturaController';

const analiseCoberturaRouter = Router();
const analiseCoberturaController = new AnaliseCoberturaController();

analiseCoberturaRouter.get('/', analiseCoberturaController.list);

analiseCoberturaRouter.get(
  '/:cep',
  celebrate({
    [Segments.PARAMS]: {
      cep: Joi.string().required(),
    },
  }),
  analiseCoberturaController.show,
);

export default analiseCoberturaRouter;
