export default async function cleanData(data) {
    if (data instanceof Array) {
        const dataClean = data.map((item) => {
            return {
                status: item.Status,
                id: item.ID,
                data: item.Data,
                nome: item.Nome,
                formadepagamento: item['Forma de Pagamento'],
                email: item.Email,
                valorRs: item['Valor (R$)'],
                clientenovo: item['Cliente Novo'],
            };
        });
        return dataClean;
    }
    return false;
}
//# sourceMappingURL=cleanData.js.map