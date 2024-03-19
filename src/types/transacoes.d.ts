interface TransacoesAPI {
  Status: string;
  ID: number;
  Nome: string;
  Data: string;
  'Forma de Pagamento': string;
  'Cliente Novo': number;
  Email: string;
  'Valor (R$)': string;
}

interface Transacoes {
  status: string;
  id: number;
  data: string;
  nome: string;
  formadepagamento: string;
  email: string;
  valorRs: string;
  clientenovo: number;
}
