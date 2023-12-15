import { EntityRepository, Repository } from 'typeorm';
import AnaliseCobertura from '../entities/AnaliseCobertura';

@EntityRepository(AnaliseCobertura)
class AnaliseCoberturaRepository extends Repository<AnaliseCobertura> {
  async findByCep(cep: string): Promise<AnaliseCobertura | undefined> {
    return this.findOne({ where: { cep } });
  }
}

export default AnaliseCoberturaRepository;
