import React from "react";

const NavBar = ()=>{
    return(
        <header id="header">
            <div className="center">
                <div id="logo">
                    <span id="brand"><strong>Cine Lumiere</strong> </span>
                </div>

            <nav id="menu">
                <ul>
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
            </nav>
            
            </div>

        </header>
    )
}

export default NavBar;