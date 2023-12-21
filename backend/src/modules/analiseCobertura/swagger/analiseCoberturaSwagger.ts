// swaggerDefinitions.js
/**
 * @swagger
 * tags:
 *   name: AnaliseCobertura
 *   description: Endpoints para análise de cobertura
 */
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
