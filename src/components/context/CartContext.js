import React, {createContext, useState, useContext} from "react";

export const CartContext  = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider =({children})=>{

    let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
    let numero = JSON.parse(localStorage.getItem("nro"))||[];

    const [cartPelis, setCartPelis] = useState([carrito]);
    
    const [cartItems, setCartItems] = useState(numero);
    let productos = 0;

    /*const [carrito, setPelisCarrito]= useState([]);*/
    /*const [cartCount, setCartCount]=useState(0);*/
       

    function guardarEnLocalStorage (array, nombre){
        localStorage.setItem(nombre, JSON.stringify(array));               
    }
    
    const productosEnCarrito = ()=>{
        let cantidades = carrito.map(x => x.cantidad)
        
        cantidades.forEach(function(a){

            productos += a;
            
        });
        setCartItems(productos);
        guardarEnLocalStorage(productos, "nro");
        guardarEnLocalStorage(cartItems, "items");
        /*let numero = JSON.parse(localStorage.getItem("nro"))||[];*/
        /*return productos;*/
    }

    const eliminarItem = (id)=>{
        
    }
    
    

    const agregarAlCarrito = (id, title, count, img)=>{

        /*function guardarEnLocalStorage (array, nombre){
            localStorage.setItem(nombre, JSON.stringify(array));               
        }*/

        
        let carro = {
            id: id,
            title: title,
            cantidad: count,
            img: img,
        }

        
        carrito.push(carro);
        
        guardarEnLocalStorage(carrito, "carrito");

        setCartPelis([]);
        setCartPelis(carrito);

        guardarEnLocalStorage(cartPelis, "cartpelis");
        productosEnCarrito();
        console.log(`productos en carrito ${productos}`);
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(`numero ${numero}`)
        console.log(`cartPelis ${cartPelis}`)
        };

        return(

            <CartContext.Provider value={{cartPelis, agregarAlCarrito, cartItems}}>
                {children}
                
            </CartContext.Provider>
        );
}