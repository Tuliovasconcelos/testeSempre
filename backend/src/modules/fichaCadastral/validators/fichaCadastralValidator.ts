import { celebrate, Joi, Segments } from 'celebrate';


export const fichaCadastralCreateValidator = celebrate({
  [Segments.BODY]: {
    planoId: Joi.string().required(),
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    rg: Joi.string().required(),
    data_nascimento: Joi.string().required(),
    telefone: Joi.string().required(),
    telefone_secundario: Joi.string().allow(''),
    email: Joi.string().email().required(),
    endereco: Joi.string().required(),
    bairro: Joi.string().required(),
    numero: Joi.string().required(),
    complemento: Joi.string().allow(''),
    referencia: Joi.string().allow(''),
    nome_pai: Joi.string().required(),
    nome_mae: Joi.string().required(),
    estado_civil: Joi.string().required(),
    genero: Joi.string().required(),
    nacionalidade: Joi.string().required(),
    profissao: Joi.string().required(),
    vendedor: Joi.string().required(),
    dia_vencimento: Joi.string().required(),
    observacao: Joi.string().allow(''),
  },
});
