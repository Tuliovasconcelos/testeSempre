import { getCustomRepository } from 'typeorm';
import Plano from '../typeorm/entities/Planos';
import PlanoRepository from '../typeorm/repositories/PlanosRepository';
import { IRequest } from '@modules/planos/interfaces/ShowPlanoInterface';

class ShowPlanoService {

  public async execute({ planoId }: IRequest): Promise<Plano | undefined> {
    const planoRepository = getCustomRepository(PlanoRepository);

    const plano = await planoRepository.findById(planoId);

    return plano;
  }
}

export default ShowPlanoService;
