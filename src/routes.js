import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Erro from './pages/Erro';
import Layout from './Components/Layout';
import Login from './pages/Login';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout/> }/>
                <Route path='*' element={ <Erro/> }/>
                <Route path='/login' element={ <Login/> }/>
            </Routes>          
        </BrowserRouter>
    )
}
// <Route path='/filme/:id' element={<Filme/>}/>
// <Route path='/favoritos' element={ <Favoritos/> }/>
export default RoutesApp;