/**
 * @swagger
 * tags:
 *   name: Planos
 *   description: Endpoints para planos
 */

import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PlanosController from '../controllers/PlanosController';

const planosRouter = Router();
const planosController = new PlanosController();

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Retorna uma lista de planos.
 *     tags: [Planos]
 *     responses:
 *       200:
 *         description: Lista de planos retornada com sucesso.
 */
planosRouter.get('/', planosController.index);

/**
 * @swagger
 * /planos/{id}:
 *   get:
 *     summary: Retorna um plano específico com base no ID.
 *     tags: [Planos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do plano a ser buscado.
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Plano retornado com sucesso.
 *       400:
 *         description: ID de plano inválido ou não fornecido.
 */
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
