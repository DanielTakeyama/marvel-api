import Image from "next/image";


interface MoldePersonagemProps{
    src: string;
    alt: string;
    id: string;
    name: string;
    desc: string;
}





export default function MoldePersonagem({ src, alt, id, name, desc }:MoldePersonagemProps){
    return (<>
    
                <br/>{/*Coloquei essa quebra de linha para poder dar um espaço entre uma imagem e a outra caso tenha mais de 1*/}
                <div className="w-full h-50 flex items-center max-[600px]:flex-wrap max-[600px]:justify-center">{/*Container Pai*/}
                    <div className="drop-shadow-lg shrink-0 grow-0">{/*Container da Imagem*/}
                        <Image
                            src={src}
                            alt={alt}
                            width="216"/*Largura Padrão das imagens, não alterar!*/
                            height="324"/*Altura Padrão das imagens, não alterar!*/
                        />
                    </div>
                    <div className="ml-10 max-[600px]:ml-0 max-[600px]:mt-3 max-[600px]:w-full max-[600px]:text-center">{/*Container das Informações*/}
                        <h3 className="mb-2"><b>ID:</b>{id}</h3>
                        <h3 className="mb-2"><b>Nome do Personagem:</b> {name}</h3>
                        <h3 className="mb-2 max-w-2xl"><b>Descrição do Personagem:<br/></b>{desc}</h3>
                    </div>
                </div>
    
    
    </>)
}