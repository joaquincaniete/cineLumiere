import React from "react";
import CartWidget from "./CartWidget";

const NavBar = ()=>{
    return(
        <header id="header">
            <nav className="nav">
            <div id="logo" className="logo"><strong>Cine Lumiere</strong></div>

                <ul className="menu">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Estrenos</a>
                    </li>
                    <li>
                        <a href="#">Ciclos de Peliculas</a>
                    </li>
                    <li>
                        <a href="#">Proximamente</a>
                    </li>
                    <li>
                        <a href="#"><strong>Login</strong></a>
                    </li>
                </ul>
                    <CartWidget />
                    
                    
                
            </nav>
          
        </header>
    )
}

export default NavBar;