import { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from "../Nav";
import './Layout.css'

export default function Layout({children}){

    const [showNav, setShowNav] = useState(true);
    return(
        <div className="Layout">
            <header>
            <div className='btnDiv'>
                        <button 
                            type='button' 
                            className='navBtn'
                            onClick={ () => setShowNav(!showNav)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                        </button> 
                    </div>  
                    <div className='logoDiv'>
                        <Link className='logo' to="/">Ecommerce</Link> 
                    </div>  
                    <div className='loginDiv'>
                        <Link className='login' to="/login">Login</Link> 
                    </div>
 
            </header>
            <div className="page-content">
                <Nav show={showNav}/>
                <div className="flex-grow p-4">
                    {children}
                </div>
            </div>

        </div>
    )
}