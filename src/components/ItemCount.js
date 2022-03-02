import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function ItemCount(props){

  /* export default function ItemCount({stock, initial, onAdd}, addPeliCart, id, title){*/
    const{stock, initial, onAdd, id, title, agregarAlCarrito} = props;

    const inicial = parseInt(initial);

    const [count, setCount] = useState(inicial);

    

    
    
    const sumarItem = () => {
        count < stock ? setCount(count + 1) : setCount(count);
      };
      const restarItem = () => {
        count === inicial ? setCount(count) : setCount(count - 1);
      };
      /*const agregarAlCarrito=() =>{
        stock > 0 ? console.log("agregado") : console.log ("no hay stock");
      };*/

    return(

        <div className="itemCount">

      <p>{count}</p>
            <button onClick={restarItem}>-</button>
      <button onClick={sumarItem}>+</button><br/>
      <>
      {
        onAdd == true ? (
        <Link  to="/cart">
        <button id="largeButton">Ir Al Carrito</button>
        </Link>) : (<button id="largeButton" onClick={()=>agregarAlCarrito(id, title, count)}>Agregar al Carrito</button>

        )
      }
      
      </>
        </div>

    )
}