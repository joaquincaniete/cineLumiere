import React, {createContext, useState, useContext, useEffect} from "react";

export const CartContext  = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider =({children})=>{

    let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
    let numero = JSON.parse(localStorage.getItem("nro"))||0;

    const [cartItems, setCartItems] = useState(numero);
    let productos=0;

  
    //const [cartPelis, setCartPelis] = useState([carrito]);
    

    /*const [carrito, setPelisCarrito]= useState([]);*/
    /*const [cartCount, setCartCount]=useState(0);*/

    function getCart (){

        carrito = JSON.parse(localStorage.getItem("carrito"))||[];

        return carrito;

    }
       

    function guardarEnLocalStorage (array, nombre){
        localStorage.setItem(nombre, JSON.stringify(array));               
    }
    
    const productosEnCarrito = ()=>{
        let cantidades = carrito.map(x => x.cantidad)
        
        cantidades.forEach(function(a){

            productos += a;
            
        });
        //setCartItems(0);
        //setCartItems(productos);
        //guardarEnLocalStorage(cartItems, "items");
        guardarEnLocalStorage(productos, "nro");
        /*let numero = JSON.parse(localStorage.getItem("nro"))||[];*/
        /*return productos;*/
    }

    const eliminarItem = (id)=>{
        console.log('item eliminado');
        
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
        productosEnCarrito();

        //setCartPelis([]);
        //setCartPelis(carrito);
        //guardarEnLocalStorage(cartPelis, "cartpelis");
        
        console.log(`productos en carrito ${productos}`);
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(`numero ${numero}`);
        console.log(`items ${cartItems}`);
        };

        return(

            <CartContext.Provider value={{eliminarItem, agregarAlCarrito, guardarEnLocalStorage, setCartItems, cartItems, getCart}}>
                {children}
                
            </CartContext.Provider>
        );
}