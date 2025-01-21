import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { RotatingLines } from 'react-loader-spinner';
import UsuarioLogin from '../../models/UsuarioLogin';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


function Login() {
 
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
      {} as UsuarioLogin
  )

  useEffect(() => {
      if (usuario.token !== "") {
          navigate('/home')
      }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value
      })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      handleLogin(usuarioLogin)
  }

  return (
      <>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold  m-12 ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4"
        onSubmit={login}>
            <h2 className="text-blue-600 text-5xl">Entrar</h2>
            <div className="flex flex-col w-full">
               <label className='text-slate-700'>Usuario</label> 
               <input type="text"
               id="usuario"
               name="usuario"
               placeholder='Usuario'
               className="border-2 md:border-gray-200 md:focus:border-white
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 mt-1" 
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            </div>
            <div className="flex flex-col w-full">
                <label htmlFor='senha' className='text-slate-700'>Senha</label>
                <input 
                type="password"
                id="senha"
                name='senha'
                placeholder='Usuario'
                className="border-2 md:border-gray-200 md:focus:border-white
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 mt-1"
              value={usuarioLogin.senha}
              onChange={(e:ChangeEvent<HTMLInputElement>)=> atualizarEstado(e)}
                 />
            </div>
            <button type='submit'  className="rounded bg-blue-400 flex justify-center
                                   hover:bg-blue-900 text-white w-1/2 py-2">

                  {isLoading? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
                    </button>
            <hr className="border-slate-800 w-full"/>
            <p>
                  Ainda não tem uma conta?{' '}
                <Link to="/cadastro" className="text-blue-800 hover:underline">
                    Cadastre-se
                </Link>
            </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
    </div >
    </>
  )
}

export default Login