export interface ICliente {
  cpf: string;
  nome: string;
  telefone: string;
  endereco : {
    rua: string;
    numero: number;
    cep: string;
  }
  rendimentoMensal: number;
}
