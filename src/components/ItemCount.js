import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext, useCartContext } from "./context/CartContext";

export default function ItemCount(props){

  /* export default function ItemCount({stock, initial, onAdd}, addPeliCart, id, title){*/
    const{stock, initial, id, title, img, price} = props;
    const {cart} = useContext(CartContext);

    let cartPelis = cart;

    const onAdd = cartPelis.some(peli =>{return peli.id == id});
    console.log (onAdd)


    const inicial = parseInt(initial);

    const [count, setCount] = useState(inicial);

    const {agregarAlCarrito} = useCartContext();

    const {setCartItems, guardarEnLocalStorage} = useCartContext();

    

    const [enCarrito, setEnCarrito] = useState(onAdd);

    /*const onAdd = carrito.some(peli =>{return peli.id == id});
    console.log (onAdd);*/
    /*useEffect(()=>{
      const onAdd = carrito.some(peli =>{return peli.id == id});
    console.log (onAdd)
    })*/

    
    
    const sumarItem = () => {
        count < stock ? setCount(count + 1) : setCount(count);
      };
      const restarItem = () => {
        count === inicial ? setCount(count) : setCount(count - 1);
      };
      /*const agregarAlCarrito=() =>{
        stock > 0 ? console.log("agregado") : console.log ("no hay stock");
      };*/

      function agregar (){

        
        setCartItems(prevCartItems => prevCartItems + count);        
            
        setEnCarrito (!onAdd);
        agregarAlCarrito(id, title, count, img, price);

      };

    return(

        <div className="itemCount">

      <p>{count}</p>
            <button onClick={restarItem}>-</button>
      <button onClick={sumarItem}>+</button><br/>
      <>
      {
        enCarrito == true ? (
        <Link  to="/cart">
        <button id="largeButton">Ir Al Carrito</button>
        </Link>) : (<button id="largeButton" onClick={()=>agregar()}>Agregar al Carrito</button>

        )
      }
      
      </>
        </div>

    )
}