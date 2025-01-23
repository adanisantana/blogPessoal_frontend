import ListaPostagens from "../../componentes/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../componentes/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="w-screen flex justify-center  bg-white ">
                <div>
                    <div className="max-w-7xl flex flex-col items-center ">
                        <p className="text-blue-400 font-sans font-medium m-4">
                            Encontre desenvolvedores que compartilham o que sabem</p>
                            
                    </div>

                    <div className="max-w-7xl flex flex-col items-center  ">
                        <img className='rounded-lg ...'
                            src="./src/assets/banner.png"
                            alt="Imagem da Página Home"
                            width="1200px"
                        />
                        <div className="flex justify-around gap-4 mt-8">
                            <div className='rounded-lg font-semibold text-lg text-white bg-red-400
                                            border-white border-solid border-2 '
                                >
                                <ModalPostagem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ListaPostagens/>
        </>
    )
}

export default Home