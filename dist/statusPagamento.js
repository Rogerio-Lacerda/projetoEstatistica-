function isTransacoes(data) {
    if (data && typeof data === 'object' && 'status' in data) {
        return true;
    }
    else {
        return false;
    }
}
export function statusPagamento(data) {
    if (Array.isArray(data)) {
        let paga = 0;
        let recusadaCartao = 0;
        let aguardandoPagamento = 0;
        let estornada = 0;
        const status = data.filter(isTransacoes).reduce((acc, item) => {
            if (item.status === 'Paga') {
                paga += 1;
            }
            else if (item.status === 'Recusada pela operadora de cartão') {
                recusadaCartao += 1;
            }
            else if (item.status === 'Aguardando pagamento') {
                aguardandoPagamento += 1;
            }
            else if (item.status === 'Estornada') {
                estornada += 1;
            }
            return [
                { texto: 'Paga', quantidade: paga },
                {
                    texto: 'Recusada pela operadora de cartão',
                    quantidade: recusadaCartao,
                },
                { texto: 'Aguardando pagamento', quantidade: aguardandoPagamento },
                { texto: 'Estornada', quantidade: estornada },
            ];
        }, [{}]);
        return status;
    }
    return false;
}
//# sourceMappingURL=statusPagamento.js.map