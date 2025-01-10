'use client'
import MoldePersonagem from '@/components/moldePersonagem';
import BuscarTodosPersonagens from '@/services/buscarTodosPersonagens';

export default function Home(){
  return (<>
            <h1 className="text-3xl mt-10"><b>Personagens</b></h1>
            <BuscarTodosPersonagens />
          </>)
}

