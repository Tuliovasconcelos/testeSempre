import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('ficha_cadastral')
export default class FichaCadastral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 14 })
  cpf: string;

  @Column({ type: 'varchar', length: 20 })
  rg: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefone: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefone_secundario: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  endereco: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bairro: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  numero: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  complemento: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referencia: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nome_pai: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nome_mae: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  estado_civil: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  genero: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nacionalidade: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  profissao: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  vendedor: string;

  @Column({ type: 'int', nullable: true })
  dia_vencimento: number;

  @Column({ type: 'text', nullable: true })
  observacao: string;
}
