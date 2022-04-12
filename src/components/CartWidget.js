import React, { useContext} from "react";
import carrito from "../assets/img/cart.svg";
import { Link } from "react-router-dom";
import ItemContext from "./context/ItemContext";

const CartWidget = () => {

  const { item } = useContext(ItemContext);

  return (
    <div>
      <ul className="carrito">
        <li>
          <Link to="/cart">
            <img
              className="imgCarrito"
              src={carrito}
              alt="imagen del carrito"
            />
          </Link>
        </li>
        <li>
         
        <>
        {
          item > 0 ?
          <h3 className="nroItem">{item}</h3>
          :
          null
        }
        </>
          
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
