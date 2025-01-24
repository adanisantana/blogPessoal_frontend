import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold  m-12">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
          <h2 className='text-blue-600 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome " className='text-slate-700'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 md:border-gray-200 md:focus:border-white
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 mt-1"
             
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='text-slate-700'>Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 md:border-gray-200 md:focus:border-white
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 m-0.5 "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className='text-slate-700'>Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 md:border-gray-200 md:focus:border-white 
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 m-0.5"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='text-slate-700'>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 md:border-gray-200 md:focus:border-white 
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 m-0.5"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='text-slate-700'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              className="border-2 md:border-gray-200 md:focus:border-white 
              placeholder-gray-300 placeholder-opacity-100 rounded-lg p-2 m-0.5"
            />
          </div>
          <div className="flex justify-around w-full gap-8 m-2">
            <button className='rounded text-white bg-red-400 
                  hover:bg-red-500 w-1/2 py-2' >
              Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-blue-500 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center' 
                >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro