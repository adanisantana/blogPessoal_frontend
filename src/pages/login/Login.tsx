import './Login.css';

function Login() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold  m-12 ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4">
            <h2 className="text-blue-600 text-5xl">Entrar</h2>
            <div className="flex flex-col w-full">
               <label className='text-slate-700'>Usuario</label> 
               <input type="text"
               id="usuario"
               name="usuario"
               placeholder='Usuario'
               className="border-2 md:border-gray-200 md:focus:border-white
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 mt-1" />

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
                 />
            </div>
            <button type='submit'  className="rounded bg-blue-400 flex justify-center
                                   hover:bg-blue-900 text-white w-1/2 py-2">
                <span>Entrar</span>
            </button>
            <hr className="border-slate-800 w-full"/>
            <p>
                Ainda não tem uma conta?{' '}
                Cadastre-se
            </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
    </div >
    </>
  )
}

export default Login