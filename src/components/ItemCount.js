import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";
import ItemContext from "./context/ItemContext";

export default function ItemCount(props) {
  const { item, setItem } = useContext(ItemContext);
  const { agregarAlCarrito } = useContext(CartContext);
  const { stock, initial, id, title, img, price } = props;

  let onAdd = false;
  const inicial = parseInt(initial);
  const [count, setCount] = useState(inicial);
  const [enCarrito, setEnCarrito] = useState(onAdd);

  const sumarItem = () => {
    count < stock ? setCount(count + 1) : setCount(count);
  };
  const restarItem = () => {
    count === inicial ? setCount(count) : setCount(count - 1);
  };

  function agregar() {
    setEnCarrito(!onAdd);
    setItem(item + count);
    agregarAlCarrito(id, title, count, img, price);
  }

  return (
    <div className="itemCount">
      <p className="resumen">{count}</p>
      <button id="numberButton" onClick={restarItem}>
        -
      </button>
      <button id="numberButton" onClick={sumarItem}>
        +
      </button>
      <br />
      <>
        {enCarrito === true ? (
          <Link to="/cart">
            <button id="largeButton">Ir Al Carrito</button>
          </Link>
        ) : (
          <button id="largeButton" onClick={() => agregar()}>
            Agregar al Carrito
          </button>
        )}
      </>
    </div>
  );
}
