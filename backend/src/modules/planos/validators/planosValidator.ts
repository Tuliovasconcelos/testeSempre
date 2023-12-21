import { celebrate, Joi, Segments } from 'celebrate';

export const planosShowValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});
