import { EntityRepository, Repository } from 'typeorm';
import FichaCadastral from '../entities/FichaCadastral';

@EntityRepository(FichaCadastral)
class FichaCadastralRepository extends Repository<FichaCadastral> {

  async findByCpf(cpf: string): Promise<FichaCadastral | undefined> {

    return this.findOne({ where: { cpf } });

  }
}

export default FichaCadastralRepository;
