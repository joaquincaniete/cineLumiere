import React from "react";


import { CartProvider } from "./context/CartContext";
import ItemCount from "./ItemCount";



    
function ItemDetail (props) {

    const{id, price, title, img, trailer, onAdd}=props;

    

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
                
                {price > 0 ? 
                <div>
                <CartProvider>
                <ItemCount stock="5" initial="1" id={id} img={img} title={title} onAdd={onAdd}/>
                </CartProvider>
                
                    <a href={trailer} target = "_blank">Ver Trailer</a> 
                
                </div>
                    : <a href={trailer} target= "_blank">Ver Trailer</a>}
                            
            </div>
        </div>
    )
};
export default ItemDetail;
