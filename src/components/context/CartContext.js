import React, {createContext, useState, useContext, useEffect} from "react";

export const CartContext  = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider =({children})=>{

    /*const [carrito, setPelisCarrito]= useState([]);*/
    /*const [cartCount, setCartCount]=useState(0);*/
    

   
    let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
    
    
    
    

    const agregarAlCarrito = (id, title, count)=>{

        function guardarEnLocalStorage (array, nombre){
            localStorage.setItem(nombre, JSON.stringify(array));
    
            
        }

        
        let carro = {
            id: id,
            title: title,
            cantidad: count,
        }

        
        carrito.push(carro);
       
        guardarEnLocalStorage(carrito, "carrito");
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(carrito)
        };

        return(

            <CartContext.Provider value={{carrito, agregarAlCarrito}}>
                {children}
                
            </CartContext.Provider>
        );
}