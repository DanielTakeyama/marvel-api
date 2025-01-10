export default function Navbar(){
    return (<>
                <nav className="bg-red-600 w-full h-12 flex flex-row items-center justify-center drop-shadow-lg max-[600px]:h-20 max-[600px]:flex-wrap">
                    <p className="text-white text-xl mr-10 max-[600px]:text-center max-[600px]:mr-1">Bem vindo ao mundo da marvel!</p>
                    <input type="text" placeholder="Pesquisar" className="h-8 w-80 pl-3 rounded-2xl"></input>
                </nav>
            </>);
}