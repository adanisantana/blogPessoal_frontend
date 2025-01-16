import Footer from "./componentes/footer/Footer"
import Home from "./pages/home/Home"
import Navbar from "./componentes/navbar/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"



function App() {
    return (
       <>
        <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
        <Home/>
        <Footer/>
        </BrowserRouter>
       </>
    )
}

export default App
