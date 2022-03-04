import React from "react";
import Item from "../components/Item";
import { CartProvider } from "./context/CartContext";
import ItemCount from "./ItemCount";

    
function ItemDetail (props) {

    const{id, price, title, img, onAdd}=props;
    

    /*const agregarAlCarrito = (id, title, count)=>{
         console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
         };*/
    
    
    return(
        <div>
            <div>
                <h2>Detalle de : {title}</h2>
                <h3>Resumen de la trama:</h3>     
                <img className="imagen" src={img} width = '500px'/>
                <h3>Valor Ticket: $ {price}</h3>
                <CartProvider>


                <ItemCount stock="5" initial="1" id={id} title={title} onAdd={onAdd}/>
                </CartProvider>

                <h3>Ver Trailer</h3>
            
                
            </div>
        </div>
    )
};
export default ItemDetail;
