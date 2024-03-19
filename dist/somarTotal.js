function isTransacoes(data) {
    if (data && typeof data === 'object' && 'status' in data) {
        return true;
    }
    else {
        return false;
    }
}
export function somarTotal(data) {
    if (Array.isArray(data)) {
        const valorTotal = data.filter(isTransacoes).reduce((acc, item) => {
            const valorLimpo = item.valorRs
                .replaceAll('.', '')
                .replace(',', '.')
                .replace('-', '')
                .trim();
            if (!isNaN(Number(valorLimpo)) && +valorLimpo !== 0) {
                return acc + Number(valorLimpo);
            }
            else {
                return acc;
            }
        }, 0);
        return valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    return false;
}
//# sourceMappingURL=somarTotal.js.map