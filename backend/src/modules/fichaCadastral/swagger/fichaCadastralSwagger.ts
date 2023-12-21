/**
 * @swagger
 * tags:
 *   name: FichaCadastral
 *   description: Endpoints para ficha cadastral
 */

/**
 * @swagger
 * /fichaCadastral:
 *   post:
 *     summary: Cria uma nova ficha cadastral.
 *     tags: [FichaCadastral]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               planoId:
 *                 type: string
 *                 description: ID do plano associado à ficha.
 *               nome:
 *                 type: string
 *                 description: Nome do titular da ficha.
 *               cpf:
 *                 type: string
 *                 description: CPF do titular da ficha.
 *               rg:
 *                 type: string
 *                 description: RG do titular da ficha.
 *               data_nascimento:
 *                 type: string
 *                 description: Data de nascimento do titular da ficha.
 *               telefone:
 *                 type: string
 *                 description: Número de telefone do titular da ficha.
 *               telefone_secundario:
 *                 type: string
 *                 description: Número de telefone secundário do titular da ficha (opcional).
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do titular da ficha.
 *               endereco:
 *                 type: string
 *                 description: Endereço do titular da ficha.
 *               bairro:
 *                 type: string
 *                 description: Bairro do titular da ficha.
 *               numero:
 *                 type: string
 *                 description: Número do endereço do titular da ficha.
 *               complemento:
 *                 type: string
 *                 description: Complemento do endereço do titular da ficha (opcional).
 *               referencia:
 *                 type: string
 *                 description: Ponto de referência do endereço do titular da ficha (opcional).
 *               nome_pai:
 *                 type: string
 *                 description: Nome do pai do titular da ficha.
 *               nome_mae:
 *                 type: string
 *                 description: Nome da mãe do titular da ficha.
 *               estado_civil:
 *                 type: string
 *                 description: Estado civil do titular da ficha.
 *               genero:
 *                 type: string
 *                 description: Gênero do titular da ficha.
 *               nacionalidade:
 *                 type: string
 *                 description: Nacionalidade do titular da ficha.
 *               profissao:
 *                 type: string
 *                 description: Profissão do titular da ficha.
 *               vendedor:
 *                 type: string
 *                 description: Nome do vendedor responsável pela ficha.
 *               dia_vencimento:
 *                 type: string
 *                 description: Dia de vencimento do plano associado à ficha.
 *               observacao:
 *                 type: string
 *                 description: Observações adicionais sobre a ficha (opcional).
 *             required:
 *               - planoId
 *               - nome
 *               - cpf
 *               - rg
 *               - data_nascimento
 *               - telefone
 *               - email
 *               - endereco
 *               - bairro
 *               - numero
 *               - nome_pai
 *               - nome_mae
 *               - estado_civil
 *               - genero
 *               - nacionalidade
 *               - profissao
 *               - vendedor
 *               - dia_vencimento
 *     responses:
 *       201:
 *         description: Ficha cadastral criada com sucesso.
 *       400:
 *         description: Dados inválidos ou ausentes na requisição.
 */
