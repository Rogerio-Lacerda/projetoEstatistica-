function isTransacoes(data) {
    if (data && typeof data === 'object' && 'status' in data) {
        return true;
    }
    else {
        return false;
    }
}
function verificarDia(datas, tempo) {
    const [dia, mes, ano] = datas.split('/').map(Number);
    const [horas, minutos] = tempo.split(':').map(Number);
    const diaVenda = new Date(ano, mes - 1, dia, horas, minutos);
    return diaVenda.getDay();
}
function verificaNumero(dia) {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sabádo';
        default:
            return false;
    }
}
function isVenda(data) {
    if (data && typeof data === 'object' && 'vendas' in data && 'dia' in data) {
        return true;
    }
    else {
        return false;
    }
}
let domingo = 0;
let segunda = 0;
let terca = 0;
let quarta = 0;
let quinta = 0;
let sexta = 0;
let sabado = 0;
export function diasVendas(data) {
    if (Array.isArray(data)) {
        const dias = data.filter(isTransacoes).reduce((acc, item) => {
            const [datas, tempo] = item.data.split(' ');
            const diaVendido = Number(verificarDia(datas, tempo));
            if (diaVendido === 0) {
                domingo += 1;
            }
            else if (diaVendido === 1) {
                segunda += 1;
            }
            else if (diaVendido === 2) {
                terca += 1;
            }
            else if (diaVendido === 3) {
                quarta += 1;
            }
            else if (diaVendido === 4) {
                quinta += 1;
            }
            else if (diaVendido === 5) {
                sexta += 1;
            }
            else if (diaVendido === 6) {
                sabado += 1;
            }
            return [domingo, segunda, terca, quarta, quinta, sexta, sabado];
        }, {});
        if (dias instanceof Array) {
            let vendas = {};
            let indice = 0;
            dias.reduce((acc, dia, index) => {
                if (acc > dia) {
                    vendas = { vendas: acc, dia: verificaNumero(indice) };
                    return acc;
                }
                else {
                    indice = index;
                    vendas = { vendas: acc, dia: verificaNumero(indice) };
                    return dia;
                }
            }, 0);
            if (isVenda(vendas)) {
                return vendas.dia;
            }
            else {
                return false;
            }
        }
    }
    return false;
}
//# sourceMappingURL=diasVendas.js.map