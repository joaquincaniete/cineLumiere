
import React, {useContext} from "react";
import { CartContext, CartProvider } from "./context/CartContext";
import ItemCarrito from "../components/ItemCarrito";
import { Link } from "react-router-dom";



export default function Cart (){
    
    /*const {cartPelis} = useCartContext();
    console.log(cartPelis);
    let pelis = cartPelis.flat();
    console.log(pelis);*/
    const {cart} = useContext(CartContext);
    let pelis = cart;
    


    return (
        <>

        <CartProvider>
        
        {pelis.length > 0 ?
            (
                <div>
                {pelis.map((peli)=>(
                <ItemCarrito{...peli} key={peli.id}/>
                ))}
                <br/>
                Total: $ ${pelis.reduce((acum,item)=> acum + (item.price * item.cantidad),0)}
                
                
                </div>
                
            )
        
            
        : <div>
            <br/><br/><br/><br/>
            

            <h2>El Carrito esta Vacio </h2>
            <br/><br/><br/>

            <Link to="/">
            <button>Volver al Home</button>
            </Link>
            <br/><br/>
            </div>
        }

        

        
        </CartProvider>
            </>
    );
}