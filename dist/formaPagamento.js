function isTransacoes(data) {
    if (data && typeof data === 'object' && 'status' in data) {
        return true;
    }
    else {
        return false;
    }
}
export function formaPagamento(data) {
    if (Array.isArray(data)) {
        let boleto = 0;
        let credito = 0;
        const formas = data.filter(isTransacoes).reduce((acc, item) => {
            if (item.formadepagamento === 'Boleto') {
                boleto += 1;
            }
            else {
                credito += 1;
            }
            return [
                { texto: 'Cartão de Crédito', quantidade: credito },
                { texto: 'Boleto', quantidade: boleto },
            ];
        }, [{}]);
        return formas;
    }
    return false;
}
//# sourceMappingURL=formaPagamento.js.map