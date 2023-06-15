import { Link } from "react-router-dom";
import './Nav.css'
export default function Nav({show}){
    return(
        <aside className="container">
            <nav>
                <Link className="navLink" to='/'>teste</Link>
                <Link className="navLink" to='/'>teste</Link>
            </nav>
        </aside>
    )
}