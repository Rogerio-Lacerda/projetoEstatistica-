import cleanData from './cleanData.js';
import { diasVendas } from './diasVendas.js';
import fetchData, { url, Data } from './fetchData.js';
import { formaPagamento } from './formaPagamento.js';
import mostrarDados from './mostrarDados.js';
import { somarTotal } from './somarTotal.js';
import { statusPagamento } from './statusPagamento.js';

async function estatisticas(data: Data) {
  const { json, error, load } = data;
  const loading = document.querySelector('.load');
  const erro = document.querySelector('.error');

  if (load) {
    if (loading && loading instanceof HTMLElement) {
      loading.classList.add('ativo');
    }
  } else if (error) {
    if (
      loading &&
      loading instanceof HTMLElement &&
      erro &&
      erro instanceof HTMLElement
    ) {
      loading.classList.remove('ativo');
      erro.classList.add('ativo');
      erro.innerText = error;
    }
  } else if (Array.isArray(json)) {
    const dadosLimpos = await cleanData(json);
    const somaTotal = somarTotal(dadosLimpos);
    const formas = formaPagamento(dadosLimpos);
    const status = statusPagamento(dadosLimpos);
    const dia = diasVendas(dadosLimpos);
    if (loading && loading instanceof HTMLElement) {
      loading.classList.remove('ativo');
    }
    if (dadosLimpos && somaTotal && formas && status && dia) {
      mostrarDados({ dadosLimpos, somaTotal, formas, status, dia });
    } else if (erro && erro instanceof HTMLElement) {
      erro.classList.add('ativo');
      erro.innerText = 'Erro ao fazer requisição';
    }
  }
}
fetchData(url, estatisticas);
