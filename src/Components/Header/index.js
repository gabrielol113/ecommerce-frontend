import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <header>
                    <div className='btnDiv'>
                        <button type='button' className='navBtn' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
        </div>
        
    )
}

export default Header;