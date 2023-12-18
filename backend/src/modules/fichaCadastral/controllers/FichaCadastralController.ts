import { Request, Response } from 'express';
import CreateFichaCadastralService from '../services/CreateFichaCadastralService';
import { instanceToInstance } from 'class-transformer';

export default class FichaCadastralController {

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      cpf,
      rg,
      data_nascimento,
      telefone,
      telefone_secundario,
      email,
      endereco,
      bairro,
      numero,
      complemento,
      referencia,
      nome_pai,
      nome_mae,
      estado_civil,
      genero,
      nacionalidade,
      profissao,
      vendedor,
      dia_vencimento,
      observacao,
    } = request.body;

    const createFichaCadastral = new CreateFichaCadastralService();

    const fichaCadastral = await createFichaCadastral.execute({
      nome,
      cpf,
      rg,
      data_nascimento,
      telefone,
      telefone_secundario,
      email,
      endereco,
      bairro,
      numero,
      complemento,
      referencia,
      nome_pai,
      nome_mae,
      estado_civil,
      genero,
      nacionalidade,
      profissao,
      vendedor,
      dia_vencimento,
      observacao,
    });

    return response.json(instanceToInstance(fichaCadastral));

  }

}
