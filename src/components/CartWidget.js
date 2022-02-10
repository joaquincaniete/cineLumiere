import React from "react";
import carrito from '../assets/img/cart.svg';

const CartWidget=()=>{
    return(

    <div>

        <ul className="carrito">

            <li>
                <img className = "imgCarrito" src={carrito}/>
            </li>
            <li>
                <h3 className="nroItem">1</h3>
            </li>
            </ul>
            
    </div>
      
    )
    
}

export default CartWidget;
