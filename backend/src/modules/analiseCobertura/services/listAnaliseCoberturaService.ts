import { getCustomRepository } from 'typeorm';
import AnaliseCobertura from '../typeorm/entities/AnaliseCobertura';
import AnaliseCoberturaRepository from '../typeorm/repositories/AnaliseCoberturaRepository';

class ListAnaliseCoberturaService {
  public async execute(): Promise<AnaliseCobertura[]> {

    const analiseCoberturaRepository = getCustomRepository(AnaliseCoberturaRepository);

    const analises = await analiseCoberturaRepository.find();

    return analises;
    
  }

}

export default ListAnaliseCoberturaService;
