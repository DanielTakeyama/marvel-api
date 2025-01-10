import CryptoJS from 'crypto-js';

export function criarEndpoint(endpoint: string){
    const public_key = process.env.MARVEL_PUBLIC_KEY;
    const private_key = process.env.MARVEL_PRIVATE_KEY;
    const ts = Date.now();
    const hash = CryptoJS.MD5(ts + private_key + public_key).toString();
    const endpointCompleto = "https://gateway.marvel.com" + endpoint + "?ts=" + ts + "&apikey=" + public_key + "&hash=" + hash;
    return endpointCompleto;
}
