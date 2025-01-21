import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className='w-full flex justify-center py-4
            			   bg-blue-100 text-blue-600'>
        <div className="container flex justify-between text-lg">
            <Link to="/home" className="text-2xl font-bold text-blue-500">Blog Pessoal</Link>
            <div className='flex gap-4 '>
                <button className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Postagens</button>
                <Link to='/temas' className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Temas</Link>
                <Link to='/cadastrartema' className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white'>Cadastrar tema</Link>
                <button className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Perfil</button>
                <button className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Sair</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar