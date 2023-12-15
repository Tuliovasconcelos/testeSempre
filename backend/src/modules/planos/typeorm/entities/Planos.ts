import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('planos')
export default class Plano {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'int' })
  velocidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;
}
