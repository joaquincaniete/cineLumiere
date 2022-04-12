import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let carrito = [];

  useEffect(() => {
    carrito = cart;
  }, [cart]);

  function agregarAlCarrito(id, title, count, img, price) {
    let carro = {
      id: id,
      title: title,
      cantidad: count,
      price: price,
      img: img,
    };
    if (!itemIsInCart(id)) {
      setCart(...cart, carro);
    } else {
      const cartAux = cart;
      const position = cart.findIndex((item) => item.id === id);
      cartAux[position].cantidad = cartAux[position].cantidad + count;
      setCart(cartAux);
    }
  }

  const itemIsInCart = (id) => {
    if (cart.lenght > 0) {
      return cart.some((e) => e.id === id);
    } else {
      return false;
    }
  };

  const getCart = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(carrito);
    }, 2000);
  });

  return (
    <CartContext.Provider value={{ setCart, agregarAlCarrito, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
