import React, { useState, useEffect} from "react";
import carrito from '../assets/img/cart.svg';
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";



const CartWidget=()=>{

    const {cartItems} = useCartContext();
    const [num, setNum]= useState (cartItems);

    useEffect ( function(){
        setNum(cartItems);
    },[cartItems]);
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
                {num > 0 ? <h3 className="nroItem">{num}</h3> : null}
                
                </>
            </li>
            </ul>
            
    </div>
      
    )
    
}

export default CartWidget;
