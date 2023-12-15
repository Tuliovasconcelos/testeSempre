import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlanos1612345678903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'planos',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'velocidade',
            type: 'int',
          },
          {
            name: 'preco',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('planos');
  }
}
