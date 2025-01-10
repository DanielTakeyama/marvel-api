import CryptoJS from 'crypto-js';

export function criarEndpoint(endpoint: string){
    const public_key = process.env.marvel_api_public_key;
    const private_key = process.env.marvel_api_private_key;


    if(!public_key || !private_key){
        throw new Error("As variáveis de ambiente marvel_api_public_key ou marvel_api_private_key não foram encontradas ou não existem!");
    }

    const ts = Date.now();
    const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
    const endpointCompleto = "https://gateway.marvel.com" + endpoint + "?ts=" + ts + "&apikey=" + public_key + "&hash=" + hash;
    return endpointCompleto;
}
