import { getCustomRepository } from 'typeorm';
import AnaliseCobertura from '../typeorm/entities/AnaliseCobertura';
import AnaliseCoberturaRepository from '../typeorm/repositories/AnaliseCoberturaRepository';
import { IRequest } from '../interfaces/ShowAnaliseCoberturaInterface'

class ShowAnaliseCoberturaService {
  public async execute({ cep }: IRequest): Promise<AnaliseCobertura | undefined> {

    const analiseCoberturaRepository = getCustomRepository(AnaliseCoberturaRepository);

    const analise = await analiseCoberturaRepository.findByCep(cep);

    return analise;

  }
}

export default ShowAnaliseCoberturaService;
