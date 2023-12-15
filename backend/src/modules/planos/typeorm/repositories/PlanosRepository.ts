import { EntityRepository, Repository } from 'typeorm';
import Plano from '../entities/Planos';

@EntityRepository(Plano)
class PlanoRepository extends Repository<Plano> {

  async findById(id: number): Promise<Plano | undefined> {
    return this.findOne(id);
  }
}

export default PlanoRepository;
