import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartProvider, useCartContext } from "./context/CartContext";



const NavBar = ()=>{

    
    
    return(
        <header id="header">
            <nav className="nav">
            <Link style={{textDecoration :'none'}} to ="/">
            <div  id="logo" className="logo"><strong>Cine Lumiere</strong></div>
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