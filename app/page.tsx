'use client'
import MoldePersonagem from '@/components/moldePersonagem';
import BuscarTodosPersonagens from '@/services/buscarTodosPersonagens';

export default function Home(){
  return (<>
            <BuscarTodosPersonagens></BuscarTodosPersonagens>
            <h1 className="text-3xl mt-10"><b>Personagens</b></h1>
            <MoldePersonagem src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_incredible.jpg" alt="3-D Man" id="1" name="3-D Man" desc="Esse é um super herói"/>
            <MoldePersonagem src="https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_incredible.jpg" alt="A-Bomb (HAS)" id="2" name="A-Bomb (HAS)" desc="Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!"/>
          </>)
}

