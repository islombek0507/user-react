import { Link } from "react-router-dom";
import './header.css'
export const Header = ()=>{
    return (
        <header>
            
                <p className="logo">Logo</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="users">Users</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}