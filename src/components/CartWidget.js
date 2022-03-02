import React from "react";
import carrito from '../assets/img/cart.svg';
import { Link } from "react-router-dom";

const CartWidget=()=>{
    return(

    <div>

        <ul className="carrito">

            <li>
                <Link to="/cart">

                <img className = "imgCarrito" src={carrito}/>
                </Link>
            </li>
            <li>
                <h3 className="nroItem">1</h3>
            </li>
            </ul>
            
    </div>
      
    )
    
}

export default CartWidget;
