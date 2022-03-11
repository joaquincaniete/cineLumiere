import React, { useState } from "react";
import carrito from '../assets/img/cart.svg';
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";



const CartWidget=()=>{

    const {cartItems} = useCartContext();
    /*let numero = JSON.parse(localStorage.getItem("nro"))||[];  */ 

    /*nro [number, setNumber]= useState (numero);*/


    return(

    <div>

        <ul className="carrito">

            <li>
                <Link to="/cart">

                <img className = "imgCarrito" src={carrito}/>
                </Link>
            </li>
            <li>
                <>
                <h3 className="nroItem">{cartItems}</h3>
                </>
            </li>
            </ul>
            
    </div>
      
    )
    
}

export default CartWidget;
