import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro from "./pages/Erro";
import Login from './pages/Login';
import Layout from './Components/Layout'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> }/>
                <Route path="*" element={ <Erro/> }/>
                <Route path="/login" element={ <Login/> }/>
            </Routes>
        </BrowserRouter>
    )
}