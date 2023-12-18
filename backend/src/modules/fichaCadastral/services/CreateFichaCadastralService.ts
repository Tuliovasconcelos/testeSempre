import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import FichaCadastral from '../typeorm/entities/FichaCadastral';
import FichaCadastralRepository from '../typeorm/repositories/FichaCadastralRepository';
import { IRequest } from '../interfaces/CreateFichaCadastralInterface';
import { enviarEmail } from 'src/mail/mailSend';

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

    // const fichaCadastralSempre: string = `
    //               **Ficha Cadastral para Solicitação de Compra de Plano de Internet - Sempre Internet**

    //               1. **Dados Pessoais:**
    //                 - Nome completo: ${nome}
    //                 - CPF: ${cpf}
    //                 - RG: ${rg}
    //                 - Data de nascimento: ${data_nascimento}
    //                 - Telefone: ${telefone}
    //                 - Telefone secundário: ${telefone_secundario}
    //                 - E-mail: ${email}

    //               2. **Endereço Residencial:**
    //                 - Endereço: ${endereco}
    //                 - Número: ${numero}  Complemento: ${complemento}
    //                 - Bairro: ${bairro}|
    //                 - Ponto de referência: ${referencia}

    //               3. **Informações Familiares:**
    //                 - Nome do pai: ${nome_pai}
    //                 - Nome da mãe: ${nome_mae}

    //               4. **Estado Civil e Dados Adicionais:**
    //                 - Estado civil: ${estado_civil}
    //                 - Gênero: ${genero}
    //                 - Nacionalidade: ${nacionalidade}
    //                 - Profissão: ${profissao}

    //               5. **Informações Comerciais:**
    //                 - Nome do vendedor: ${vendedor}

    //               6. **Detalhes do Contrato:**
    //                 - Dia de vencimento desejado: ${dia_vencimento}
    //                 - Observações: ${observacao}
    //               `;

    // await enviarEmail('tuliorad4@gmail.com', 'Solicitação de compra', fichaCadastralSempre);

    return fichaCadastral;
  }
}

export default CreateFichaCadastralService;
