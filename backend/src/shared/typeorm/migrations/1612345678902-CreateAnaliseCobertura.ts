import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAnaliseCobertura1612345678902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'analise_cobertura',
        columns: [
          {
            name: 'cep',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'status',
            type: 'varchar',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('analise_cobertura');
  }
}
