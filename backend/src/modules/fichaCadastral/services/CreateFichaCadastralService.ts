import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import FichaCadastral from '../typeorm/entities/FichaCadastral';
import FichaCadastralRepository from '../typeorm/repositories/FichaCadastralRepository';
import { IRequest } from '../interfaces/CreateFichaCadastralInterface';

class CreateFichaCadastralService {
  public async execute({
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
  }: IRequest): Promise<FichaCadastral> {
    const fichaCadastralRepository = getCustomRepository(FichaCadastralRepository);

    const cpfExists = await fichaCadastralRepository.findByCpf(cpf);

    if (cpfExists) {
      throw new AppError('CPF já utilizado.');
    }

    const fichaCadastral = fichaCadastralRepository.create({
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

    await fichaCadastralRepository.save(fichaCadastral);

    return fichaCadastral;
  }
}

export default CreateFichaCadastralService;
