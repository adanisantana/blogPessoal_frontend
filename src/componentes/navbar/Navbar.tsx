import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta('O usuário foi desconectado com sucesso!','info')
    navigate('/')
  }

  let component: ReactNode
  if (usuario.token !== "") {
    component = (
      <>
        <div className='w-full flex justify-center py-4
                       bg-blue-100 text-blue-600'>
          <div className="container flex justify-between text-lg">
            <Link to="/home" className="text-2xl font-bold text-blue-500">Blog Pessoal</Link>
            <div className='flex gap-4 '>
              <Link to='/postagens' className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300  hover:text-white'>Postagens</Link>
              <Link to='/temas' className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white'>Temas</Link>
              <Link to='/cadastrartema' className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white'>Cadastrar tema</Link>
              <Link to='/perfil' className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white'>Perfil</Link>
              <Link to='' onClick={logout} className='px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white' >Sair</Link>
            </div>
          </div>
        </div>
      </>

    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar