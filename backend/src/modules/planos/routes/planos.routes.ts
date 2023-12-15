import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PlanosController from '../controllers/PlanosController';

const planosRouter = Router();
const planosController = new PlanosController();

planosRouter.get('/', planosController.index);

planosRouter.get(
  '/:id',

  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  planosController.show
);

export default planosRouter;
