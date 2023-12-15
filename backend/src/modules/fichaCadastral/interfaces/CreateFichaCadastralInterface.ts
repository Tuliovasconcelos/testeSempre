export interface IRequest {
  nome: string;
  cpf: string;
  rg: string;
  data_nascimento?: Date;
  telefone?: string;
  telefone_secundario?: string;
  email?: string;
  endereco?: string;
  bairro?: string;
  numero?: string;
  complemento?: string;
  referencia?: string;
  nome_pai?: string;
  nome_mae?: string;
  estado_civil?: string;
  genero?: string;
  nacionalidade?: string;
  profissao?: string;
  vendedor?: string;
  dia_vencimento?: number;
  observacao?: string;
}
