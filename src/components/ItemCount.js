import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

export default function ItemCount(props){

  /* export default function ItemCount({stock, initial, onAdd}, addPeliCart, id, title){*/
    const{stock, initial, id, title, img} = props;
    const {cartPelis} = useCartContext();

    const onAdd = cartPelis.some(peli =>{return peli.id == id});
    console.log (onAdd)


    const inicial = parseInt(initial);

    const [count, setCount] = useState(inicial);

    const {agregarAlCarrito} = useCartContext();

    

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
        setEnCarrito (!onAdd);
        agregarAlCarrito(id, title, count, img);
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