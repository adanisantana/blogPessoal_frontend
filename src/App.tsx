import { BrowserRouter,Route,Routes } from "react-router-dom"
import Footer from "./componentes/footer/Footer"
import Home from "./pages/home/Home"
import Navbar from "./componentes/navbar/Navbar"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./componentes/temas/listatemas/ListaTemas"
import FormTema from "./componentes/temas/formtema/FormTema"
import DeletarTema from "./componentes/temas/deletartema/DeletarTema"

function App() {
    return (
       <>
       <AuthProvider>
        <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastrartema" element={<FormTema />} />
                <Route path="/editartema/:id" element={<FormTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
            </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
        </AuthProvider>
       </>
    )
}

export default App
