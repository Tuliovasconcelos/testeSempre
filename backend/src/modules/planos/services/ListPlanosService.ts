import { getCustomRepository } from 'typeorm';
import Plano from '../typeorm/entities/Planos';
import PlanoRepository from '../typeorm/repositories/PlanosRepository';

class ListPlanosService {
  public async execute(): Promise<Plano[]> {

    const planoRepository = getCustomRepository(PlanoRepository);

    const planos = await planoRepository.find();

    return planos;
  }
}

export default ListPlanosService;
