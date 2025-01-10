import { useState, useEffect } from 'react';
import MoldePersonagem from '@/components/moldePersonagem';


interface Personagem{
    id: string;
    name: string;
    image: string;
    species: string;
}



export default function BuscarTodosPersonagens(){
    const [dados, setDados] = useState<Personagem[]>([])
    
    useEffect(()=>{

        const buscarDados = async () => {
            try{
                const dadosApi = await fetch("https://rickandmortyapi.com/api/character");
                if(!dadosApi.ok){
                    throw new Error (`Falha ao fazer a requisição para o servidor do Rick And Morty, status: ${dadosApi.statusText}`);
                }
                const dadosJson = await dadosApi.json();
                setDados(dadosJson.results);

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
        <MoldePersonagem key={personagem.id} src={personagem.image} alt={personagem.name} id={personagem.id} name={personagem.name} desc={personagem.species}/>
        ))}
    </>
);

}