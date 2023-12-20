/**
 * @swagger
 * tags:
 *   name: AnaliseCobertura
 *   description: Endpoints para analise de cobertura
 */

import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AnaliseCoberturaController from '../controllers/AnaliseCoberturaController';

const analiseCoberturaRouter = Router();
const analiseCoberturaController = new AnaliseCoberturaController();

/**
 * @swagger
 * /analiseCobertura:
 *   get:
 *     summary: Retorna uma lista de análises de cobertura.
 *     tags: [AnaliseCobertura]
 *     responses:
 *       200:
 *         description: Lista de análises de cobertura retornada com sucesso.
 */
analiseCoberturaRouter.get('/', analiseCoberturaController.list);

/**
 * @swagger
 * /analiseCobertura/{cep}:
 *   get:
 *     summary: Retorna uma análise de cobertura específica com base no CEP.
 *     tags: [AnaliseCobertura]
 *     parameters:
 *       - in: path
 *         name: cep
 *         required: true
 *         description: CEP para buscar a análise de cobertura.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Análise de cobertura retornada com sucesso.
 *       400:
 *         description: CEP inválido ou não fornecido.
 */
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
