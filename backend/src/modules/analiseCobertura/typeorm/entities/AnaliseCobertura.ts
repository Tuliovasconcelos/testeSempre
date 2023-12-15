import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('analise_cobertura')
export default class AnaliseCobertura {
  @PrimaryColumn({ type: 'varchar' })
  cep: string;

  @Column({ type: 'varchar' })
  status: string;
}
