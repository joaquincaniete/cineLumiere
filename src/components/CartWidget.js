import React, { useContext, useState, useEffect } from "react";
import carrito from "../assets/img/cart.svg";
import { Link } from "react-router-dom";
import { CartContext, useCartContext } from "./context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  function checkNumber() {
    if (cartItems > 0) {
      return (
        <>
          <h3 className="nroItem">{cartItems}</h3>;
        </>
      );
    } else {
      return null;
    }
  }

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
            {useEffect(() => {
              checkNumber();
            }, [cartItems])}
          </>
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
