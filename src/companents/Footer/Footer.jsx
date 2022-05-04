import { Link } from "react-router-dom";
import './Footer.css'
export const Footer = ()=>{
    return (
        <footer>
            
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
        </footer> 
    )
}