import { celebrate, Joi, Segments } from 'celebrate';

export const analiseCoberturaShowValidator = celebrate({
  [Segments.PARAMS]: {
    cep: Joi.string().required(),
  },
});
