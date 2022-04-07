import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import logo from "../assets/img/cine.png";





const NavBar = ()=>{

    
    
    return(
        <header className="menu-top" id="header">
            <nav className="nav">
            <Link style={{textDecoration :'none'}} to ="/">
            <div>
            <img className = "logo" src={logo} alt="imagen logo"/>
            </div>
                
            <div  id="logo" className="logo_letras"><strong>Cine Lumiere</strong></div>
            </Link>

                <ul className="menu">
                    <li>
                        <Link to="/">Inicio</Link>
                        
                    </li>
                    <li>
                        <Link to="/category/estreno">Estrenos</Link>
                    </li>
                    <li>
                        <Link to="/category/clasica">Ciclos de Peliculas</Link>
                        
                    </li>
                    <li>
                        <Link to="/category/proximamente">Proximamente</Link>
                        
                    </li>
                    <li>
                        <Link to="/login"><strong>Login</strong></Link>
                        
                    </li>
                </ul>
                    
                    <CartProvider>
                    <CartWidget/>
                    </CartProvider>
                    
                    
                
            </nav>
          
        </header>
    )
}

export default NavBar;