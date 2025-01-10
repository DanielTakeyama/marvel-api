import { useState, useEffect } from 'react';
import { criarEndpoint } from '@/services/criarEndpoint';
import MoldePersonagem from '@/components/moldePersonagem';

interface Personagem{
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

let endpoint = "/v1/public/characters";
let endpointMontado = criarEndpoint(endpoint);

export default function BuscarTodosPersonagens(){
    const [dados, setDados] = useState<Personagem[]>([])
    
    useEffect(()=>{

        const buscarDados = async () => {
            try{
                const dadosApi = await fetch(endpointMontado);
                if(!dadosApi.ok){
                    throw new Error (`Falha ao fazer a requisição para o servidor do Rick And Morty, status: ${dadosApi.statusText}`);
                }
                const dadosJson = await dadosApi.json();
                setDados(dadosJson.data.results);

            } catch(err) {
                console.log(err)
            }
        };

        buscarDados();
    }, []);

    console.log(dados);
    return(
    <>
        {dados.length === 0 ? <p>Carregando...</p> : dados.map((personagem)=>(
        <MoldePersonagem key={personagem.id} src={personagem.thumbnail.path + "/portrait_incredible." + personagem.thumbnail.extension} alt={personagem.name} id={personagem.id} name={personagem.name} desc={personagem.description}/>
        ))}
    </>
);

}