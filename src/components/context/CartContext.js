import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let numero = JSON.parse(localStorage.getItem("nro")) || 0;

  let [cart, setCart] = useState([carrito]);
  let [cartItems, setCartItems] = useState(numero);

  function guardarEnLocalStorage(array, nombre) {
    localStorage.setItem(nombre, JSON.stringify(array));
  }

  const productosEnCarrito = () => {
    let productos = 0;

    let cantidades = carrito.map((x) => x.cantidad);

    cantidades.forEach(function (a) {
      productos += a;
    });
    numero = productos;
    guardarEnLocalStorage(productos, "nro");
    return productos;
  };

  const eliminarItem = (id) => {
    const index = carrito.findIndex((peli) => peli.id === id);
    carrito.splice(index, 1);
  };

  const vaciarCarrito = () => {
    let carrito = [];
    numero = 0;
    setCartItems(numero);
  };

  const agregarAlCarrito = (id, title, count, img, price) => {
    let carro = {
      id: id,
      title: title,
      cantidad: count,
      price: price,
      img: img,
    };

    carrito.push(carro);
  };

  return (
    <CartContext.Provider
      value={{
        eliminarItem,
        agregarAlCarrito,
        cartItems,
        setCartItems,
        cart,
        carrito,
        numero,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
