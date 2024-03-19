export const url = 'https://api.origamid.dev/json/transacoes.json?';
export default async function fetchData(url, getData) {
    let response;
    let json = null;
    let error = null;
    let load = false;
    try {
        load = true;
        error = null;
        getData({ json, error, load });
        response = await fetch(url);
        json = await response.json();
        if (response.ok === false)
            throw new Error(json.message);
    }
    catch (e) {
        json = null;
        if (e instanceof Error) {
            error = `Error: ${e.message}`;
        }
        else {
            error = 'Error: erro ao fazer a requisição';
        }
    }
    finally {
        load = false;
        getData({ json, error, load });
    }
}
//# sourceMappingURL=fetchData.js.map