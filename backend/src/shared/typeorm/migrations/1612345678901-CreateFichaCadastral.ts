import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFichaCadastral1612345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ficha_cadastral',
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
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'data_nascimento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone_secundario',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'numero',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'referencia',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_pai',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_mae',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado_civil',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'genero',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nacionalidade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'profissao',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'vendedor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dia_vencimento',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'observacao',
            type: 'text',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ficha_cadastral');
  }
}
