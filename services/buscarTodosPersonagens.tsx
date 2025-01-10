import { useEffect, useState} from 'react';

export default function BuscarTodosPersonagens(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const buscarDados = async()=>{
            try{
                const dados = await fetch("https://rickandmortyapi.com/api/character/539");
                if(!dados.ok){
                    throw new Error(`Falha ao fazer a requisição para o servidor do rick and morty, erro: ${dados.status} , ${dados.statusText}`);
                }
                const dadosJson = await dados.json();
                setData(dadosJson);
            } 
            catch(err){
                setError(null);
            }
        };
        buscarDados();
    },[]);
    return (<>
        <h1>{JSON.stringify(data)}</h1>
    </>)
}