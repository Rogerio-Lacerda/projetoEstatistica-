import { somarTotal } from './somarTotal';

interface Formas {
  texto: string;
  quantidade: number;
}

function isFormas(data: unknown): data is Formas {
  if (
    data &&
    typeof data === 'object' &&
    'texto' in data &&
    'quantidade' in data
  ) {
    return true;
  } else {
    return false;
  }
}

function isTransacoes(data: unknown): data is Transacoes {
  if (data && typeof data === 'object' && 'status' in data) {
    return true;
  } else {
    return false;
  }
}

interface Data {
  dadosLimpos: unknown;
  somaTotal: string;
  formas: unknown;
  status: unknown;
  dia: string;
}

export default function mostrarDados(data: Data) {
  const total = document.querySelector('.total');
  if (total && total instanceof HTMLElement) {
    total.innerHTML = `<p>Total: ${data.somaTotal}</p>`;
  }

  const formas = document.querySelector('.formasPagamento');
  if (formas && formas instanceof HTMLElement && Array.isArray(data.formas)) {
    data.formas
      .filter(isFormas)
      .map((item) => {
        return (formas.innerHTML += `<p>${item.texto}: ${item.quantidade}</p>`);
      })
      .join('');
  }

  const status = document.querySelector('.status');
  if (status && status instanceof HTMLElement && Array.isArray(data.status)) {
    data.status
      .filter(isFormas)
      .map((item) => {
        return (status.innerHTML += `<p>${item.texto}: ${item.quantidade}</p>`);
      })
      .join('');

    status.innerHTML += `<p>Dia com mais vendas: ${data.dia}</p>`;
  }

  const table = document.querySelector('.dados tbody');
  if (
    table &&
    table instanceof HTMLElement &&
    Array.isArray(data.dadosLimpos)
  ) {
    data.dadosLimpos
      .filter(isTransacoes)
      .map((item) => {
        return (table.innerHTML += `<tr>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>R$ ${item.valorRs}</td>
        <td>${item.formadepagamento}</td>
        <td>${item.status}</td>
      </tr>`);
      })
      .join('');
  }
}
