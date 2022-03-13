import React, {createContext, useState, useContext, useEffect} from "react";

export const CartContext  = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider =({children})=>{

    let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
    let numero = JSON.parse(localStorage.getItem("nro"))||0;

    let [ cart, setCart] = useState([]);
    
    let [cartItems, setCartItems] = useState(numero);

    useEffect (function(){

        setCart(carrito);
        setCartItems (productosEnCarrito());


    },[carrito])
    

  
    //const [cartPelis, setCartPelis] = useState([carrito]);
    

    /*const [carrito, setPelisCarrito]= useState([]);*/
    /*const [cartCount, setCartCount]=useState(0);*/

    /*function getCart (){

        carrito = JSON.parse(localStorage.getItem("carrito"))||[];

        return carrito;

    }*/
       

    function guardarEnLocalStorage (array, nombre){
        localStorage.setItem(nombre, JSON.stringify(array));               
    }
    
    const productosEnCarrito = ()=>{
        
        let productos=0;
        let cantidades = carrito.map(x => x.cantidad)
        
        cantidades.forEach(function(a){
            productos += a;            
        });
        
        guardarEnLocalStorage(productos, "nro");

        return productos;

        
                
        
    }

    const eliminarItem = (id)=>{

        const index = carrito.findIndex((peli)=> peli.id === id);
        carrito.splice(index,1);
        guardarEnLocalStorage(carrito, "carrito");
        //productosEnCarrito();


        console.log('item eliminado' + index);
        
    }
    
    

    const agregarAlCarrito = (id, title, count, img, price)=>{

        /*function guardarEnLocalStorage (array, nombre){
            localStorage.setItem(nombre, JSON.stringify(array));               
        }*/

        
        let carro = {
            id: id,
            title: title,
            cantidad: count,
            price: price,
            img: img,
        }

        
        carrito.push(carro);
        guardarEnLocalStorage(carrito, "carrito");
        productosEnCarrito();
        //setCart(carrito);

        
        
        
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(`numero ${numero}`);
        console.log(`items ${cartItems}`);
        };

        return(

            <CartContext.Provider value={{eliminarItem, agregarAlCarrito, guardarEnLocalStorage, setCartItems, cartItems, cart}}>
                {children}
                
            </CartContext.Provider>
        );
}